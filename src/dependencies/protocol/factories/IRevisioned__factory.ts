/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRevisioned, IRevisionedInterface } from "../IRevisioned";

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
    stateMutability: "pure",
    type: "function",
  },
];

export class IRevisioned__factory {
  static readonly abi = _abi;
  static createInterface(): IRevisionedInterface {
    return new utils.Interface(_abi) as IRevisionedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRevisioned {
    return new Contract(address, _abi, signerOrProvider) as IRevisioned;
  }
}
