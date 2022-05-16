/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ViewStorageAccessible,
  ViewStorageAccessibleInterface,
} from "../ViewStorageAccessible";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "getStorageAt",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ViewStorageAccessible__factory {
  static readonly abi = _abi;
  static createInterface(): ViewStorageAccessibleInterface {
    return new utils.Interface(_abi) as ViewStorageAccessibleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ViewStorageAccessible {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ViewStorageAccessible;
  }
}
