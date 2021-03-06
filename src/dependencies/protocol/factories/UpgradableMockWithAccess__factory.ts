/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UpgradableMockWithAccess,
  UpgradableMockWithAccessInterface,
} from "../UpgradableMockWithAccess";

const _abi = [
  {
    inputs: [],
    name: "REVISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "offset",
        type: "bytes32",
      },
    ],
    name: "getStorageAt",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060a88061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80631ca0027a146037578063dde43cba146063575b600080fd5b605160048036036020811015604b57600080fd5b50356069565b60408051918252519081900360200190f35b6051606d565b5490565b60d28156fea264697066735822122038b779310970f1f7e0dba69ab45296d5df99d1f2ab112242121861c64bcf706464736f6c63430007040033";

export class UpgradableMockWithAccess__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UpgradableMockWithAccess> {
    return super.deploy(overrides || {}) as Promise<UpgradableMockWithAccess>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UpgradableMockWithAccess {
    return super.attach(address) as UpgradableMockWithAccess;
  }
  connect(signer: Signer): UpgradableMockWithAccess__factory {
    return super.connect(signer) as UpgradableMockWithAccess__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradableMockWithAccessInterface {
    return new utils.Interface(_abi) as UpgradableMockWithAccessInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradableMockWithAccess {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UpgradableMockWithAccess;
  }
}
