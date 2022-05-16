/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IPancakeCallee,
  IPancakeCalleeInterface,
} from "../IPancakeCallee";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "pancakeCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPancakeCallee__factory {
  static readonly abi = _abi;
  static createInterface(): IPancakeCalleeInterface {
    return new utils.Interface(_abi) as IPancakeCalleeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPancakeCallee {
    return new Contract(address, _abi, signerOrProvider) as IPancakeCallee;
  }
}
