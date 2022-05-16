/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IPairExplorerV1,
  IPairExplorerV1Interface,
} from "../IPairExplorerV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "lendable",
        type: "address",
      },
      {
        internalType: "address",
        name: "tradable",
        type: "address",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "calculateBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "profit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debtPayable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lendable",
        type: "address",
      },
      {
        internalType: "address",
        name: "tradable",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "leverageFactor",
        type: "uint256",
      },
    ],
    name: "calculateOpenPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "maxAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationCost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lendable",
        type: "address",
      },
      {
        internalType: "address",
        name: "proxyLendable",
        type: "address",
      },
      {
        internalType: "address",
        name: "tradable",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "leverageFactor",
        type: "uint256",
      },
    ],
    name: "calculateOpenProxyPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "maxAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationCost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lendable",
        type: "address",
      },
      {
        internalType: "address",
        name: "proxyLendable",
        type: "address",
      },
      {
        internalType: "address",
        name: "tradable",
        type: "address",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "calculateProxyBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "profit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debtPayable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "lendable",
        type: "address",
      },
      {
        internalType: "address",
        name: "tradable",
        type: "address",
      },
    ],
    name: "getPosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "selfValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "principalDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationCost",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "expirationDate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "stopLossPercentage",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "takeProfitPercentage",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "terminationReward",
                type: "uint256",
              },
            ],
            internalType: "struct TerminationConditions",
            name: "terminationConditions",
            type: "tuple",
          },
        ],
        internalType: "struct Position",
        name: "position",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "lendable",
        type: "address",
      },
      {
        internalType: "address",
        name: "proxyLendable",
        type: "address",
      },
      {
        internalType: "address",
        name: "tradable",
        type: "address",
      },
    ],
    name: "getProxyPosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "selfValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "principalDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationCost",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "expirationDate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "stopLossPercentage",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "takeProfitPercentage",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "terminationReward",
                type: "uint256",
              },
            ],
            internalType: "struct TerminationConditions",
            name: "terminationConditions",
            type: "tuple",
          },
        ],
        internalType: "struct Position",
        name: "position",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPairExplorerV1__factory {
  static readonly abi = _abi;
  static createInterface(): IPairExplorerV1Interface {
    return new utils.Interface(_abi) as IPairExplorerV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPairExplorerV1 {
    return new Contract(address, _abi, signerOrProvider) as IPairExplorerV1;
  }
}
