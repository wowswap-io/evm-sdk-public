/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockTokenWithFeeOnTransfer,
  MockTokenWithFeeOnTransferInterface,
} from "../MockTokenWithFeeOnTransfer";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "dec",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200131038038062001310833981810160405260808110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b506040908152602082810151929091015186519294509250859185918591859185918591620001cd9160039185019062000402565b508051620001e390600490602084019062000402565b50506005805460ff1916601217905550620001fe8262000220565b620002123360ff8416600a0a830262000236565b5050505050505050620004ae565b6005805460ff191660ff92909216919091179055565b6001600160a01b03821662000292576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620002a06000838362000345565b620002bc81600254620003a060201b620006e81790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620002ef918390620006e8620003a0821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600081116200039b576040805162461bcd60e51b815260206004820152601a60248201527f496e76616c696420616d6f756e7420746f207472616e73666572000000000000604482015290519081900360640190fd5b505050565b600082820183811015620003fb576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200043a576000855562000485565b82601f106200045557805160ff191683800117855562000485565b8280016001018555821562000485579182015b828111156200048557825182559160200191906001019062000468565b506200049392915062000497565b5090565b5b8082111562000493576000815560010162000498565b610e5280620004be6000396000f3fe6080604052600436106100c25760003560e01c8063395093511161007f578063a457c2d711610059578063a457c2d7146102e0578063a9059cbb14610319578063d0e30db014610352578063dd62ed3e1461035a576100c2565b8063395093511461025f57806370a082311461029857806395d89b41146102cb576100c2565b806306fdde03146100c7578063095ea7b31461015157806318160ddd1461019e57806323b872dd146101c55780632e1a7d4d14610208578063313ce56714610234575b600080fd5b3480156100d357600080fd5b506100dc610395565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101165781810151838201526020016100fe565b50505050905090810190601f1680156101435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015d57600080fd5b5061018a6004803603604081101561017457600080fd5b506001600160a01b03813516906020013561042b565b604080519115158252519081900360200190f35b3480156101aa57600080fd5b506101b3610448565b60408051918252519081900360200190f35b3480156101d157600080fd5b5061018a600480360360608110156101e857600080fd5b506001600160a01b0381358116916020810135909116906040013561044e565b34801561021457600080fd5b506102326004803603602081101561022b57600080fd5b50356104d5565b005b34801561024057600080fd5b50610249610562565b6040805160ff9092168252519081900360200190f35b34801561026b57600080fd5b5061018a6004803603604081101561028257600080fd5b506001600160a01b03813516906020013561056b565b3480156102a457600080fd5b506101b3600480360360208110156102bb57600080fd5b50356001600160a01b03166105b9565b3480156102d757600080fd5b506100dc6105d4565b3480156102ec57600080fd5b5061018a6004803603604081101561030357600080fd5b506001600160a01b038135169060200135610635565b34801561032557600080fd5b5061018a6004803603604081101561033c57600080fd5b506001600160a01b03813516906020013561069d565b6102326106b1565b34801561036657600080fd5b506101b36004803603604081101561037d57600080fd5b506001600160a01b03813581169160200135166106bd565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104215780601f106103f657610100808354040283529160200191610421565b820191906000526020600020905b81548152906001019060200180831161040457829003601f168201915b5050505050905090565b600061043f610438610749565b848461074d565b50600192915050565b60025490565b600061045b848484610839565b6104cb84610467610749565b6104c685604051806060016040528060288152602001610d66602891396001600160a01b038a166000908152600160205260408120906104a5610749565b6001600160a01b03168152602081019190915260400160002054919061085e565b61074d565b5060019392505050565b806104df336105b9565b1015610527576040805162461bcd60e51b81526020600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b604482015290519081900360640190fd5b61053133826108f5565b604051339082156108fc029083906000818181858888f1935050505015801561055e573d6000803e3d6000fd5b5050565b60055460ff1690565b600061043f610578610749565b846104c68560016000610589610749565b6001600160a01b03908116825260208083019390935260409182016000908120918c1681529252902054906106e8565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104215780601f106103f657610100808354040283529160200191610421565b600061043f610642610749565b846104c685604051806060016040528060258152602001610df8602591396001600061066c610749565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919061085e565b600061043f6106aa610749565b8484610839565b6106bb33346109f1565b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600082820183811015610742576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b0383166107925760405162461bcd60e51b8152600401808060200182810382526024815260200180610dd46024913960400191505060405180910390fd5b6001600160a01b0382166107d75760405162461bcd60e51b8152600401808060200182810382526022815260200180610d1e6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6064600582020461084d8484838503610ae1565b610858843083610ae1565b50505050565b600081848411156108ed5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108b257818101518382015260200161089a565b50505050905090810190601f1680156108df5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b03821661093a5760405162461bcd60e51b8152600401808060200182810382526021815260200180610d8e6021913960400191505060405180910390fd5b61094682600083610c3c565b61098381604051806060016040528060228152602001610cfc602291396001600160a01b038516600090815260208190526040902054919061085e565b6001600160a01b0383166000908152602081905260409020556002546109a99082610c96565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160a01b038216610a4c576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610a5860008383610c3c565b600254610a6590826106e8565b6002556001600160a01b038216600090815260208190526040902054610a8b90826106e8565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038316610b265760405162461bcd60e51b8152600401808060200182810382526025815260200180610daf6025913960400191505060405180910390fd5b6001600160a01b038216610b6b5760405162461bcd60e51b8152600401808060200182810382526023815260200180610cd96023913960400191505060405180910390fd5b610b76838383610c3c565b610bb381604051806060016040528060268152602001610d40602691396001600160a01b038616600090815260208190526040902054919061085e565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610be290826106e8565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008111610c91576040805162461bcd60e51b815260206004820152601a60248201527f496e76616c696420616d6f756e7420746f207472616e73666572000000000000604482015290519081900360640190fd5b505050565b600061074283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061085e56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212209d097265646d948dbb15b1112697383830a119583445bab00dc8ab1e9046334664736f6c63430007040033";

export class MockTokenWithFeeOnTransfer__factory extends ContractFactory {
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
    tokenName: string,
    tokenSymbol: string,
    dec: BigNumberish,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockTokenWithFeeOnTransfer> {
    return super.deploy(
      tokenName,
      tokenSymbol,
      dec,
      supply,
      overrides || {}
    ) as Promise<MockTokenWithFeeOnTransfer>;
  }
  getDeployTransaction(
    tokenName: string,
    tokenSymbol: string,
    dec: BigNumberish,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      tokenName,
      tokenSymbol,
      dec,
      supply,
      overrides || {}
    );
  }
  attach(address: string): MockTokenWithFeeOnTransfer {
    return super.attach(address) as MockTokenWithFeeOnTransfer;
  }
  connect(signer: Signer): MockTokenWithFeeOnTransfer__factory {
    return super.connect(signer) as MockTokenWithFeeOnTransfer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTokenWithFeeOnTransferInterface {
    return new utils.Interface(_abi) as MockTokenWithFeeOnTransferInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTokenWithFeeOnTransfer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockTokenWithFeeOnTransfer;
  }
}
