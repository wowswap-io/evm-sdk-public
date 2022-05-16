/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockTokenConverter,
  MockTokenConverterInterface,
} from "../MockTokenConverter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "getAmountOut",
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
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "setRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060ea8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806346df2ccb1460375780635c195217146059575b600080fd5b605760048036036040811015604b57600080fd5b50803590602001356085565b005b607360048036036020811015606d57600080fd5b50356090565b60408051918252519081900360200190f35b600091909155600155565b600080541560ab5760005460015483028160a657fe5b0460ae565b60005b9291505056fea264697066735822122025db65e5edced2fe3d361d1e38819fbd43e6f7a736add685bfadfcf058c902b764736f6c63430007040033";

export class MockTokenConverter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockTokenConverter> {
    return super.deploy(overrides || {}) as Promise<MockTokenConverter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockTokenConverter {
    return super.attach(address) as MockTokenConverter;
  }
  connect(signer: Signer): MockTokenConverter__factory {
    return super.connect(signer) as MockTokenConverter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTokenConverterInterface {
    return new utils.Interface(_abi) as MockTokenConverterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTokenConverter {
    return new Contract(address, _abi, signerOrProvider) as MockTokenConverter;
  }
}