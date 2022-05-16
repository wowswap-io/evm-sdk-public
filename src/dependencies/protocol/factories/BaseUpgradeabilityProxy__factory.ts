/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BaseUpgradeabilityProxy,
  BaseUpgradeabilityProxyInterface,
} from "../BaseUpgradeabilityProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060b18061001f6000396000f3fe608060405236601057600e601f565b005b348015601b57600080fd5b50600e5b60256031565b6031602d6033565b6058565b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156076573d6000f35b3d6000fdfea2646970667358221220519f53ca197e94388704ce712fe5a7d693667228796704e0c081fc68da2fadd464736f6c63430007040033";

export class BaseUpgradeabilityProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BaseUpgradeabilityProxy> {
    return super.deploy(overrides || {}) as Promise<BaseUpgradeabilityProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BaseUpgradeabilityProxy {
    return super.attach(address) as BaseUpgradeabilityProxy;
  }
  connect(signer: Signer): BaseUpgradeabilityProxy__factory {
    return super.connect(signer) as BaseUpgradeabilityProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseUpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as BaseUpgradeabilityProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseUpgradeabilityProxy;
  }
}
