import { pack, keccak256 } from '@ethersproject/solidity';
import { getCreate2Address } from 'ethers/lib/utils';
import { PancakePair__factory, PancakeRouter, PancakeRouter__factory } from '../dependencies/protocol';
import { InferContext } from './abstract';
import { CoreRelevant } from './core';
import { Reserves } from './reserves';
import BigNumber, { toBN } from '@wowswap-io/bignumber';

export class Swap extends CoreRelevant<
  {
    contracts: Record<typeof Swap.REQUIRED_ADDRESSES[number], string>;
  },
  {
    reserves: Reserves;
  }
> {
  public static REQUIRED_ADDRESSES = ['swapFactory', 'swapCodehash', 'swapRouter'] as const;

  constructor(context: InferContext<Swap>) {
    super(context);
  }

  get router(): PancakeRouter {
    return this.core.useContract(PancakeRouter__factory, this.params.contracts.swapRouter);
  }

  async useReserves(
    tokenA: string,
    tokenB: string
  ): Promise<{ pair: string; tokenA: BigNumber; tokenB: BigNumber }> {
    const flip = tokenA.toLowerCase() > tokenB.toLowerCase();
    const [left, right] = flip ? [tokenB, tokenA] : [tokenA, tokenB];

    const pairAddress = getCreate2Address(
      this.params.contracts.swapFactory,
      keccak256(['bytes'], [pack(['address', 'address'], [left, right])]),
      this.params.contracts.swapCodehash
    );

    const pair = this.core.useContract(PancakePair__factory, pairAddress);

    const [reserveLeft, reserveRight] = await this.core
      .useCall(pair, 'getReserves')
      .catch((e) => {
        console.log(`Failed get reserve of ${left} ${right} \n \tError: ${e}`);
        return [0, 0];
      });

    return {
      pair: pairAddress,
      tokenA: toBN(flip ? reserveRight : reserveLeft),
      tokenB: toBN(flip ? reserveLeft : reserveRight),
    };
  }
}
