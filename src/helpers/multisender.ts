import { Provider } from '@ethersproject/abstract-provider';
import { BaseContract, BigNumber, BytesLike } from 'ethers';
import { Multicall, Multicall__factory } from '../dependencies/protocol';

export interface CallRequest {
  onResult: (response: string, height: BigNumber) => void;
  call: Call;
}

export interface Call {
  target: string;
  callData: BytesLike;
}

export type CallResult<
  TContract extends BaseContract,
  TMethod extends keyof TContract['functions']
> = ReturnType<TContract['functions'][TMethod]> extends Promise<infer R>
  ? R extends [infer F]
    ? F & R
    : R
  : never;

export type CallAnswer<
  TContract extends BaseContract,
  TMethod extends keyof TContract['functions']
> = {
  result: CallResult<TContract, TMethod>;
  blockHeight: BigNumber;
};

export class Multisender {
  private contract: Multicall;
  private queue: Array<CallRequest> = [];
  private processing: boolean = false;

  constructor(private provider: Provider, private address: string) {
    this.contract = Multicall__factory.connect(this.address, this.provider);
  }

  async callWithBlock<
    T extends BaseContract,
    TMethod extends keyof T['functions']
  >(
    contract: T,
    methodName: TMethod,
    ...args: Parameters<T['functions'][TMethod]>
  ): Promise<CallAnswer<T, TMethod>> {
    return new Promise((resolve, reject) => {
      this.queue.push({
        call: {
          target: contract.address,
          callData: contract.interface.encodeFunctionData(
            methodName as string,
            args
          ),
        },
        onResult: (encoded: string, blockHeight: BigNumber) => {
          try {
            // hack
            const [success, data] = [
              Buffer.from(encoded.slice(2, 4), 'hex'),
              Buffer.from(encoded.slice(4), 'hex'),
            ];
            if (success.readUInt8()) {
              const typedResult = contract.interface.decodeFunctionResult(
                methodName as string,
                data
              );

              const result =
                Array.isArray(typedResult) && typedResult.length === 1
                  ? typedResult[0]
                  : typedResult;

              resolve({
                result,
                blockHeight,
              } as any);
            } else {
              reject(
                new Error(
                  `Unsuccess call: ${contract.constructor.name} ${
                    contract.address
                  } ${methodName}(${args.join(', ')}) –> ${data.toString()}`
                )
              );
            }
          } catch (e) {
            reject(new Error('Failed decode: ' + encoded));
          }
        },
      });
    });
  }

  async call<T extends BaseContract, TMethod extends keyof T['functions']>(
    contract: T,
    methodName: TMethod,
    ...args: Parameters<T['functions'][TMethod]>
  ): Promise<CallResult<T, TMethod>> {
    return this.callWithBlock<T, TMethod>(contract, methodName, ...args).then(
      ({ result }) => result
    );
  }

  async update() {
    if (this.processing) return;
    this.processing = true;

    while (this.queue.length) {
      const requests = this.queue.splice(0, 100);

      const result = await this.contract.callStatic
        .aggregate(requests.map((r) => r.call))
        .catch((e) => {
          console.log(e);
          throw e;
        });

      requests.forEach((request, index) =>
        request.onResult(result.returnData[index], result.blockNumber)
      );
    }

    this.processing = false;
  }
}
