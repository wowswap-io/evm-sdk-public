/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AdvancedMockPancakeRouter,
  AdvancedMockPancakeRouterInterface,
} from "../AdvancedMockPancakeRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasurer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "getAmountsIn",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
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
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "getAmountsOut",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "setRate",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610a7a380380610a7a8339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c6109f76100836000398061076e525080610553528061063a52506109f76000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631f00ca741461006757806338ed1739146101615780635911fb9a146101ec5780635c11d79514610161578063c45a015514610224578063d06ca61f14610248575b600080fd5b6101116004803603604081101561007d57600080fd5b8135919081019060408101602082013564010000000081111561009f57600080fd5b8201836020820111156100b157600080fd5b803590602001918460208302840111640100000000831117156100d357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506102f2945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561014d578181015183820152602001610135565b505050509050019250505060405180910390f35b610111600480360360a081101561017757600080fd5b81359160208101359181019060608101604082013564010000000081111561019e57600080fd5b8201836020820111156101b057600080fd5b803590602001918460208302840111640100000000831117156101d257600080fd5b91935091506001600160a01b0381351690602001356103dd565b6102226004803603606081101561020257600080fd5b506001600160a01b03813581169160208101359091169060400135610700565b005b61022c61076c565b604080516001600160a01b039092168252519081900360200190f35b6101116004803603604081101561025e57600080fd5b8135919081019060408101602082013564010000000081111561028057600080fd5b82018360208201111561029257600080fd5b803590602001918460208302840111640100000000831117156102b457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610790945050505050565b6060815167ffffffffffffffff8111801561030c57600080fd5b50604051908082528060200260200182016040528015610336578160200160208202803683370190505b5090506103be6000808460018651038151811061034f57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008460008151811061038657fe5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020548461083490919063ffffffff16565b816000815181106103cb57fe5b60200260200101818152505092915050565b60606000610478600080888860008181106103f457fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b031681526020019081526020016000206000888860018b8b90500381811061043857fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b03168152602001908152602001600020548961083490919063ffffffff16565b60408051600280825260608201835292935091906020830190803683370190505091508781836000815181106104aa57fe5b60200260200101846001815181106104be57fe5b602002602001018281525082815250505086826001845103815181106104e057fe5b602002602001015110156105255760405162461bcd60e51b81526004018080602001828103825260298152602001806109786029913960400191505060405180910390fd5b8585600081811061053257fe5b905060200201356001600160a01b03166001600160a01b03166323b872dd337f00000000000000000000000000000000000000000000000000000000000000008560008151811061057f57fe5b60200260200101516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050602060405180830381600087803b1580156105dd57600080fd5b505af11580156105f1573d6000803e3d6000fd5b505050506040513d602081101561060757600080fd5b5086905085600019810181811061061a57fe5b905060200201356001600160a01b03166001600160a01b03166323b872dd7f0000000000000000000000000000000000000000000000000000000000000000868560018751038151811061066a57fe5b60200260200101516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050602060405180830381600087803b1580156106c857600080fd5b505af11580156106dc573d6000803e3d6000fd5b505050506040513d60208110156106f257600080fd5b509198975050505050505050565b6001600160a01b038084166000908152602081815260408083209386168352929052208190558061073361271080610917565b8161073a57fe5b6001600160a01b0393841660009081526020818152604080832097909616825295909552929093209290910490915550565b7f000000000000000000000000000000000000000000000000000000000000000081565b6060815167ffffffffffffffff811180156107aa57600080fd5b506040519080825280602002602001820160405280156107d4578160200160208202803683370190505b509050610824600080846000815181106107ea57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008460018651038151811061038657fe5b816001835103815181106103cb57fe5b6000821580610841575081155b1561084e57506000610911565b81611388198161085a57fe5b04831115604051806040016040528060038152602001624d4d4f60e81b815250906109035760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108c85781810151838201526020016108b0565b50505050905090810190601f1680156108f55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505061271061138882840201045b92915050565b60008261092657506000610911565b8282028284828161093357fe5b04146109705760405162461bcd60e51b81526004018080602001828103825260218152602001806109a16021913960400191505060405180910390fd5b939250505056fe50616e63616b65526f757465723a20494e53554646494349454e545f4f55545055545f414d4f554e54536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220041b473c1761b111dc7fded18742d73b2dc8638f8065739d97ad12bfbc24124e64736f6c63430007040033";

export class AdvancedMockPancakeRouter__factory extends ContractFactory {
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
    _treasurer: string,
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AdvancedMockPancakeRouter> {
    return super.deploy(
      _treasurer,
      _factory,
      overrides || {}
    ) as Promise<AdvancedMockPancakeRouter>;
  }
  getDeployTransaction(
    _treasurer: string,
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_treasurer, _factory, overrides || {});
  }
  attach(address: string): AdvancedMockPancakeRouter {
    return super.attach(address) as AdvancedMockPancakeRouter;
  }
  connect(signer: Signer): AdvancedMockPancakeRouter__factory {
    return super.connect(signer) as AdvancedMockPancakeRouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdvancedMockPancakeRouterInterface {
    return new utils.Interface(_abi) as AdvancedMockPancakeRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdvancedMockPancakeRouter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AdvancedMockPancakeRouter;
  }
}
