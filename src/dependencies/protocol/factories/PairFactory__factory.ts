/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PairFactory, PairFactoryInterface } from "../PairFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
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
    inputs: [],
    name: "getAllProxyLendables",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllShortables",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTradables",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
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
    ],
    name: "getOrCreatePair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    ],
    name: "getOrCreateRoutablePair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    ],
    name: "getOrCreateRoutableShortingPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    ],
    name: "getOrCreateShortingPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    ],
    name: "getPair",
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
    inputs: [],
    name: "getPairDeployer",
    outputs: [
      {
        internalType: "contract IPairDeployer",
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
    name: "getRoutablePair",
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
    name: "getRoutableShortingPair",
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
    name: "getShortingPair",
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
    inputs: [],
    name: "getShortingPairDeployer",
    outputs: [
      {
        internalType: "contract IPairDeployer",
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
        internalType: "address",
        name: "reserveFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "paramProviderFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "pairDeployer",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasurer",
        type: "address",
      },
      {
        internalType: "address",
        name: "wow",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    name: "isPair",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "isRegisteredShortable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "registerProxyLendable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "registerProxyLendables",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "registerShortable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "registerShortables",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "registerTradable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "registerTradables",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pairDeployer",
        type: "address",
      },
    ],
    name: "setPairDeployer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "shortingPairDeployer",
        type: "address",
      },
    ],
    name: "setShortingPairDeployer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061336f806100206000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c8063870bd02511610104578063c70cc1eb116100a2578063e6a4390511610071578063e6a439051461038b578063ef6f8cba1461039e578063f2fde38b146103b1578063f85db189146103c4576101cf565b8063c70cc1eb14610348578063d55ec6971461035b578063dde43cba14610363578063e5e31b1314610378576101cf565b806396eaa53d116100de57806396eaa53d14610307578063ac8187211461030f578063b5affdcb14610322578063bc6b312f14610335576101cf565b8063870bd025146102d95780638da5cb5b146102ec57806390a2956d146102f4576101cf565b806351394094116101715780636a71352e1161014b5780636a71352e146102b9578063715018a6146102c15780637bfc2313146102c957806386e987d9146102d1576101cf565b8063513940941461027e5780635a8f2c791461029357806364a2fea9146102a6576101cf565b80632fb03d01116101ad5780632fb03d01146102255780633820068614610245578063450626ea146102585780634dad26241461026b576101cf565b80631459457a146101d45780632878e3f0146101e95780632c11db0c146101fc575b600080fd5b6101e76101e2366004612520565b6103d7565b005b6101e76101f7366004612590565b6104f1565b61020f61020a36600461249e565b610599565b60405161021c91906127e7565b60405180910390f35b61023861023336600461245f565b6105c9565b60405161021c91906128ee565b6101e761025336600461245f565b6105df565b6101e7610266366004612590565b610664565b61020f6102793660046124d6565b610707565b61028661073e565b60405161021c91906128aa565b6101e76102a136600461245f565b610796565b6101e76102b436600461245f565b61084b565b61020f6108b9565b6101e76108c9565b61020f610977565b610286610987565b61020f6102e73660046124d6565b6109dd565b61020f610a14565b61020f61030236600461249e565b610a24565b610286610b94565b6101e761031d36600461245f565b610bea565b61020f6103303660046124d6565b610c6f565b6101e761034336600461245f565b610f14565b61020f61035636600461249e565b610fbc565b6101e76111cd565b61036b611259565b60405161021c919061290c565b61023861038636600461245f565b61125e565b61020f61039936600461249e565b61127d565b61020f6103ac3660046124d6565b6112a8565b6101e76103bf36600461245f565b611476565b6101e76103d2366004612590565b61157b565b600054610100900460ff16806103f057506103f061161e565b806103fe575060005460ff16155b6104395760405162461bcd60e51b815260040180806020018281038252602e8152602001806132c4602e913960400191505060405180910390fd5b600054610100900460ff16158015610464576000805460ff1961ff0019909116610100171660011790555b61046c61162f565b6104746116d0565b61047c61176d565b61016980546001600160a01b03199081166001600160a01b038981169190911790925561016a8054821688841617905561016b8054821685841617905561016c805482168684161790556101a7805490911691861691909117905580156104e9576000805461ff00191690555b505050505050565b6104f9611860565b6001600160a01b031661050a610a14565b6001600160a01b031614610553576040805162461bcd60e51b815260206004820181905260248201526000805160206132f2833981519152604482015290519081900360640190fd5b60005b818110156105945761058b83838381811061056d57fe5b9050602002016020810190610582919061245f565b61016f90611864565b50600101610556565b505050565b6001600160a01b0380831660009081526101a8602090815260408083208585168452909152902054165b92915050565b60006105d76101aa836118c7565b90505b919050565b6105e7611860565b6001600160a01b03166105f8610a14565b6001600160a01b031614610641576040805162461bcd60e51b815260206004820181905260248201526000805160206132f2833981519152604482015290519081900360640190fd5b6101ac80546001600160a01b0319166001600160a01b0392909216919091179055565b61066c611860565b6001600160a01b031661067d610a14565b6001600160a01b0316146106c6576040805162461bcd60e51b815260206004820181905260248201526000805160206132f2833981519152604482015290519081900360640190fd5b60005b81811015610594576106fe8383838181106106e057fe5b90506020020160208101906106f5919061245f565b6101aa90611864565b506001016106c9565b6001600160a01b0392831660009081526101a460209081526040808320948616835293815283822092851682529190915220541690565b6101aa8054604080516020808402820181019092528281526060939092909183018282801561078c57602002820191906000526020600020905b815481526020019060010190808311610778575b5050505050905090565b61079e611860565b6001600160a01b03166107af610a14565b6001600160a01b0316146107f8576040805162461bcd60e51b815260206004820181905260248201526000805160206132f2833981519152604482015290519081900360640190fd5b61080461016f82611864565b6040518060400160405280600381526020016210549560ea1b815250906108475760405162461bcd60e51b815260040161083e91906128f9565b60405180910390fd5b5050565b610853611860565b6001600160a01b0316610864610a14565b6001600160a01b0316146108ad576040805162461bcd60e51b815260206004820181905260248201526000805160206132f2833981519152604482015290519081900360640190fd5b6108046101aa82611864565b6101a7546001600160a01b031690565b6108d1611860565b6001600160a01b03166108e2610a14565b6001600160a01b03161461092b576040805162461bcd60e51b815260206004820181905260248201526000805160206132f2833981519152604482015290519081900360640190fd5b610134546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a361013480546001600160a01b0319169055565b6101ac546001600160a01b031690565b61016f8054604080516020808402820181019092528281526060939092909183018282801561078c5760200282019190600052602060002090815481526020019060010190808311610778575050505050905090565b6001600160a01b0392831660009081526101a960209081526040808320948616835293815283822092851682529190915220541690565b610134546001600160a01b031690565b600081610a3361016f826118c7565b60405180604001604052806002815260200161139560f21b81525090610a6c5760405162461bcd60e51b815260040161083e91906128f9565b506040805160028082526060808301845292602083019080368337019050509050848482600081518110610a9c57fe5b6020026020010183600181518110610ab057fe5b6001600160a01b039384166020918202929092018101919091529282169052868116600090815261016d83526040808220888416835290935291909120541680610b7f57610b26828787604051602001610b0b929190612733565b604051602081830303815290604052805190602001206118e8565b6001600160a01b03878116600090815261016d602090815260408083208a85168452825280832080546001600160a01b031916948616948517905592825261016e905220805460ff191660011790559350610b8d915050565b610b898282611cb9565b9250505b5092915050565b6101a58054604080516020808402820181019092528281526060939092909183018282801561078c5760200282019190600052602060002090815481526020019060010190808311610778575050505050905090565b610bf2611860565b6001600160a01b0316610c03610a14565b6001600160a01b031614610c4c576040805162461bcd60e51b815260206004820181905260248201526000805160206132f2833981519152604482015290519081900360640190fd5b6101a780546001600160a01b0319166001600160a01b0392909216919091179055565b600081610c7e61016f826118c7565b60405180604001604052806002815260200161139560f21b81525090610cb75760405162461bcd60e51b815260040161083e91906128f9565b5061016954604051630a65984f60e31b815286916001600160a01b03169063532cc27890610ce99084906004016127e7565b60206040518083038186803b158015610d0157600080fd5b505afa158015610d15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3991906125ff565b60405180604001604052806002815260200161139360f21b81525090610d725760405162461bcd60e51b815260040161083e91906128f9565b5084610d806101a5826118c7565b60405180604001604052806002815260200161139360f21b81525090610db95760405162461bcd60e51b815260040161083e91906128f9565b506040805160038082526080820190925260609160208201838036833701905050905087878783600081518110610dec57fe5b6020026020010184600181518110610e0057fe5b6020026020010185600281518110610e1457fe5b6001600160a01b03948516602091820292909201810191909152938316905292811690925289821660009081526101a9825260408082208b8516835283528082208a8516835290925220541680610efc57610e99828a8a8a604051602001610e7e939291906127af565b60405160208183030381529060405280519060200120611e0e565b6001600160a01b038a811660009081526101a9602090815260408083208d8516845282528083208c85168452825280832080546001600160a01b031916948616948517905592825261016e905220805460ff191660011790559550610f0a915050565b610f06828261212f565b9450505b5050509392505050565b610f1c611860565b6001600160a01b0316610f2d610a14565b6001600160a01b031614610f76576040805162461bcd60e51b815260206004820181905260248201526000805160206132f2833981519152604482015290519081900360640190fd5b610f826101a582611864565b6040518060400160405280600381526020016210549360ea1b815250906108475760405162461bcd60e51b815260040161083e91906128f9565b600081610fcb6101aa826118c7565b604051806040016040528060028152602001614e5360f01b815250906110045760405162461bcd60e51b815260040161083e91906128f9565b5061016954604051630a65984f60e31b815285916001600160a01b03169063532cc278906110369084906004016127e7565b60206040518083038186803b15801561104e57600080fd5b505afa158015611062573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108691906125ff565b60405180604001604052806002815260200161139360f21b815250906110bf5760405162461bcd60e51b815260040161083e91906128f9565b5060408051600280825260608083018452926020830190803683370190505090508585826000815181106110ef57fe5b602002602001018360018151811061110357fe5b6001600160a01b03938416602091820292909201810191909152928216905287811660009081526101a8835260408082208984168352909352919091205416806111b75761115e828888604051602001610e7e92919061277f565b6001600160a01b0388811660009081526101a8602090815260408083208b85168452825280832080546001600160a01b031916948616948517905592825261016e905220805460ff1916600117905594506111c5915050565b6111c1828261212f565b9350505b505092915050565b6101a760009054906101000a90046001600160a01b03166001600160a01b031663aec525e46040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561121e57600080fd5b505af1158015611232573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112569190612482565b50565b607881565b6001600160a01b0316600090815261016e602052604090205460ff1690565b6001600160a01b03918216600090815261016d60209081526040808320938516835292905220541690565b6000816112b761016f826118c7565b60405180604001604052806002815260200161139560f21b815250906112f05760405162461bcd60e51b815260040161083e91906128f9565b50836112fe6101a5826118c7565b60405180604001604052806002815260200161139360f21b815250906113375760405162461bcd60e51b815260040161083e91906128f9565b50604080516003808252608082019092526060916020820183803683370190505090508686868360008151811061136a57fe5b602002602001018460018151811061137e57fe5b602002602001018560028151811061139257fe5b6001600160a01b03948516602091820292909201810191909152938316905292811690925288821660009081526101a4825260408082208a85168352835280822089851683529092522054168061145f576113fc82898989604051602001610b0b93929190612755565b6001600160a01b0389811660009081526101a4602090815260408083208c8516845282528083208b85168452825280832080546001600160a01b031916948616948517905592825261016e905220805460ff19166001179055945061146d915050565b6114698282611cb9565b9350505b50509392505050565b61147e611860565b6001600160a01b031661148f610a14565b6001600160a01b0316146114d8576040805162461bcd60e51b815260206004820181905260248201526000805160206132f2833981519152604482015290519081900360640190fd5b6001600160a01b03811661151d5760405162461bcd60e51b815260040180806020018281038252602681526020018061329e6026913960400191505060405180910390fd5b610134546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a361013480546001600160a01b0319166001600160a01b0392909216919091179055565b611583611860565b6001600160a01b0316611594610a14565b6001600160a01b0316146115dd576040805162461bcd60e51b815260206004820181905260248201526000805160206132f2833981519152604482015290519081900360640190fd5b60005b81811015610594576116158383838181106115f757fe5b905060200201602081019061160c919061245f565b6101a590611864565b506001016115e0565b600061162930612257565b15905090565b600054610100900460ff1680611648575061164861161e565b80611656575060005460ff16155b6116915760405162461bcd60e51b815260040180806020018281038252602e8152602001806132c4602e913960400191505060405180910390fd5b600054610100900460ff161580156116bc576000805460ff1961ff0019909116610100171660011790555b8015611256576000805461ff001916905550565b600054610100900460ff16806116e957506116e961161e565b806116f7575060005460ff16155b6117325760405162461bcd60e51b815260040180806020018281038252602e8152602001806132c4602e913960400191505060405180910390fd5b600054610100900460ff1615801561175d576000805460ff1961ff0019909116610100171660011790555b61176561162f565b6116bc61225d565b600054610100900460ff1680611786575061178661161e565b80611794575060005460ff16155b6117cf5760405162461bcd60e51b815260040180806020018281038252602e8152602001806132c4602e913960400191505060405180910390fd5b600054610100900460ff161580156117fa576000805460ff1961ff0019909116610100171660011790555b603354611805612357565b116118415760405162461bcd60e51b81526004018080602001828103825260288152602001806133126028913960400191505060405180910390fd5b611849612357565b6033558015611256576000805461ff001916905550565b3390565b6001600160a01b038116600081815260018401602052604081205490919084906118bc5780546001818101835560008381526020808220909301859055835494815292810190915260409091209190915590506105c3565b506000949350505050565b6001600160a01b031660009081526001919091016020526040902054151590565b61016954825160009182916001600160a01b0390911690635cf3abfe908690849061190f57fe5b60200260200101516040518263ffffffff1660e01b815260040161193391906127e7565b602060405180830381600087803b15801561194d57600080fd5b505af1158015611961573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119859190612482565b905060008460018651038151811061199957fe5b602090810291909101015161016a5460405160016231db4d60e01b031981529192506000916001600160a01b039091169063ffce24b3906119de908990600401612897565b602060405180830381600087803b1580156119f857600080fd5b505af1158015611a0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a309190612482565b90506060826001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015611a6d57600080fd5b505afa158015611a81573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611aa9919081019061261f565b90506060836001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015611ae657600080fd5b505afa158015611afa573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611b22919081019061261f565b61016b54604051919250606091630f7d9be360e11b91611b5a91899188916001600160a01b03909116908e90899089906024016127fb565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600088604051611b9e90612452565b8190604051809103906000f5905080158015611bbe573d6000803e3d6000fd5b509050806001600160a01b031663cf7a1d776101a760009054906101000a90046001600160a01b03166001600160a01b031663aec525e46040518163ffffffff1660e01b8152600401602060405180830381600087803b158015611c2157600080fd5b505af1158015611c35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c599190612482565b30856040518463ffffffff1660e01b8152600401611c7993929190612862565b600060405180830381600087803b158015611c9357600080fd5b505af1158015611ca7573d6000803e3d6000fd5b50929c9b505050505050505050505050565b6078611cc48261235c565b101561084757806001600160a01b0316633659cfe66101a760009054906101000a90046001600160a01b03166001600160a01b031663aec525e46040518163ffffffff1660e01b8152600401602060405180830381600087803b158015611d2a57600080fd5b505af1158015611d3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d629190612482565b6040518263ffffffff1660e01b8152600401611d7e91906127e7565b600060405180830381600087803b158015611d9857600080fd5b505af1158015611dac573d6000803e3d6000fd5b505061016a546040516272313f60e51b81526001600160a01b039091169250630e4627e09150611de0908590600401612897565b600060405180830381600087803b158015611dfa57600080fd5b505af11580156104e9573d6000803e3d6000fd5b60008083600185510381518110611e2157fe5b602090810291909101015161016954604051637bf8c2fb60e01b81529192506000916001600160a01b0390911690637bf8c2fb90611e639085906004016127e7565b602060405180830381600087803b158015611e7d57600080fd5b505af1158015611e91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eb59190612482565b61016a54604051636723d0d960e01b81529192506000916001600160a01b0390911690636723d0d990611eec908990600401612897565b602060405180830381600087803b158015611f0657600080fd5b505af1158015611f1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f3e9190612482565b90506060836001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015611f7b57600080fd5b505afa158015611f8f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611fb7919081019061261f565b90506060846001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015611ff457600080fd5b505afa158015612008573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612030919081019061261f565b61016b54604051919250606091630f7d9be360e11b9161206891889188916001600160a01b03909116908e90899089906024016127fb565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000886040516120ac90612452565b8190604051809103906000f59050801580156120cc573d6000803e3d6000fd5b509050806001600160a01b031663cf7a1d776101ac60009054906101000a90046001600160a01b03166001600160a01b031663aec525e46040518163ffffffff1660e01b8152600401602060405180830381600087803b158015611c2157600080fd5b607861213a8261235c565b101561084757806001600160a01b0316633659cfe66101ac60009054906101000a90046001600160a01b03166001600160a01b031663aec525e46040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156121a057600080fd5b505af11580156121b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121d89190612482565b6040518263ffffffff1660e01b81526004016121f491906127e7565b600060405180830381600087803b15801561220e57600080fd5b505af1158015612222573d6000803e3d6000fd5b505061016a54604051632d74ea9360e01b81526001600160a01b039091169250632d74ea939150611de0908590600401612897565b3b151590565b600054610100900460ff1680612276575061227661161e565b80612284575060005460ff16155b6122bf5760405162461bcd60e51b815260040180806020018281038252602e8152602001806132c4602e913960400191505060405180910390fd5b600054610100900460ff161580156122ea576000805460ff1961ff0019909116610100171660011790555b60006122f4611860565b61013480546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015611256576000805461ff001916905550565b607890565b600080826001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561239857600080fd5b505afa1580156123ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123d09190612482565b9050806001600160a01b031663dde43cba6040518163ffffffff1660e01b815260040160206040518083038186803b15801561240b57600080fd5b505afa92505050801561243b575060408051601f3d908101601f19168201909252612438918101906126ac565b60015b6124495760019150506105da565b91506105da9050565b6109438061295b83390190565b600060208284031215612470578081fd5b813561247b81612945565b9392505050565b600060208284031215612493578081fd5b815161247b81612945565b600080604083850312156124b0578081fd5b82356124bb81612945565b915060208301356124cb81612945565b809150509250929050565b6000806000606084860312156124ea578081fd5b83356124f581612945565b9250602084013561250581612945565b9150604084013561251581612945565b809150509250925092565b600080600080600060a08688031215612537578081fd5b853561254281612945565b9450602086013561255281612945565b9350604086013561256281612945565b9250606086013561257281612945565b9150608086013561258281612945565b809150509295509295909350565b600080602083850312156125a2578182fd5b823567ffffffffffffffff808211156125b9578384fd5b818501915085601f8301126125cc578384fd5b8135818111156125da578485fd5b86602080830285010111156125ed578485fd5b60209290920196919550909350505050565b600060208284031215612610578081fd5b8151801515811461247b578182fd5b600060208284031215612630578081fd5b815167ffffffffffffffff80821115612647578283fd5b818401915084601f83011261265a578283fd5b81518181111561266657fe5b604051601f8201601f19168101602001838111828210171561268457fe5b60405281815283820160200187101561269b578485fd5b6111c1826020830160208701612915565b6000602082840312156126bd578081fd5b5051919050565b6000815180845260208085019450808401835b838110156126fc5781516001600160a01b0316875295820195908201906001016126d7565b509495945050505050565b6000815180845261271f816020860160208601612915565b601f01601f19169290920160200192915050565b6001600160601b0319606093841b811682529190921b16601482015260280190565b6001600160601b0319606094851b8116825292841b83166014820152921b166028820152603c0190565b6414d213d49560da1b81526001600160601b0319606093841b811660058301529190921b166019820152602d0190565b6414d213d49560da1b81526001600160601b0319606094851b8116600583015292841b83166019820152921b16602d82015260410190565b6001600160a01b0391909116815260200190565b6001600160a01b03878116825286811660208301528516604082015260c06060820181905260009061282f908301866126c4565b82810360808401526128418186612707565b905082810360a08401526128558185612707565b9998505050505050505050565b6001600160a01b0384811682528316602082015260606040820181905260009061288e90830184612707565b95945050505050565b60006020825261247b60208301846126c4565b6020808252825182820181905260009190848201906040850190845b818110156128e2578351835292840192918401916001016128c6565b50909695505050505050565b901515815260200190565b60006020825261247b6020830184612707565b90815260200190565b60005b83811015612930578181015183820152602001612918565b8381111561293f576000848401525b50505050565b6001600160a01b038116811461125657600080fdfe608060405234801561001057600080fd5b50610923806100206000396000f3fe6080604052600436106100745760003560e01c80638f2839701161004e5780638f2839701461017c578063cf7a1d77146101af578063d1f578941461026e578063f851a4401461032457610083565b80633659cfe6146100985780634f1ef286146100cb5780635c60da1b1461014b57610083565b3661008357610081610339565b005b34801561008f57600080fd5b50610081610339565b3480156100a457600080fd5b50610081600480360360208110156100bb57600080fd5b50356001600160a01b0316610353565b610081600480360360408110156100e157600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561010c57600080fd5b82018360208201111561011e57600080fd5b8035906020019184600183028401116401000000008311171561014057600080fd5b50909250905061038d565b34801561015757600080fd5b5061016061043a565b604080516001600160a01b039092168252519081900360200190f35b34801561018857600080fd5b506100816004803603602081101561019f57600080fd5b50356001600160a01b0316610477565b610081600480360360608110156101c557600080fd5b6001600160a01b0382358116926020810135909116918101906060810160408201356401000000008111156101f957600080fd5b82018360208201111561020b57600080fd5b8035906020019184600183028401116401000000008311171561022d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610531945050505050565b6100816004803603604081101561028457600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156102af57600080fd5b8201836020820111156102c157600080fd5b803590602001918460018302840111640100000000831117156102e357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610561945050505050565b34801561033057600080fd5b50610160610641565b61034161066c565b61035161034c610674565b610699565b565b61035b6106bd565b6001600160a01b0316336001600160a01b031614156103825761037d816106e2565b61038a565b61038a610339565b50565b6103956106bd565b6001600160a01b0316336001600160a01b0316141561042d576103b7836106e2565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d8060008114610414576040519150601f19603f3d011682016040523d82523d6000602084013e610419565b606091505b505090508061042757600080fd5b50610435565b610435610339565b505050565b60006104446106bd565b6001600160a01b0316336001600160a01b0316141561046c57610465610674565b9050610474565b610474610339565b90565b61047f6106bd565b6001600160a01b0316336001600160a01b03161415610382576001600160a01b0381166104dd5760405162461bcd60e51b815260040180806020018281038252603681526020018061087d6036913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6105066106bd565b604080516001600160a01b03928316815291841660208301528051918290030190a161037d81610722565b600061053b610674565b6001600160a01b03161461054e57600080fd5b6105588382610561565b61043582610722565b600061056b610674565b6001600160a01b03161461057e57600080fd5b61058782610746565b80511561063d576000826001600160a01b0316826040518082805190602001908083835b602083106105ca5780518252601f1990920191602091820191016105ab565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461062a576040519150601f19603f3d011682016040523d82523d6000602084013e61062f565b606091505b505090508061043557600080fd5b5050565b600061064b6106bd565b6001600160a01b0316336001600160a01b0316141561046c576104656106bd565b6103516107ae565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156106b8573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6106eb81610746565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b61074f8161080e565b61078a5760405162461bcd60e51b815260040180806020018281038252603b8152602001806108b3603b913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6107b66106bd565b6001600160a01b0316336001600160a01b031614156108065760405162461bcd60e51b815260040180806020018281038252603281526020018061084b6032913960400191505060405180910390fd5b610351610351565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061084257508115155b94935050505056fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f787920746f20746865207a65726f206164647265737343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a2646970667358221220bde8e9c96b8d3ffcd547b02f95c6dc560f1a05011a8dd6c847e5a9a2cff37c7364736f6c634300070400334f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657256657273696f6e65643a207265766973696f6e20697320746f6f206c6f7720746f20757064617465a26469706673582212201458031e5f885279e5fef19267cdac2952a119d65c151889cfd865fd5040673c64736f6c63430007040033";

export class PairFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PairFactory> {
    return super.deploy(overrides || {}) as Promise<PairFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PairFactory {
    return super.attach(address) as PairFactory;
  }
  connect(signer: Signer): PairFactory__factory {
    return super.connect(signer) as PairFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PairFactoryInterface {
    return new utils.Interface(_abi) as PairFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PairFactory {
    return new Contract(address, _abi, signerOrProvider) as PairFactory;
  }
}
