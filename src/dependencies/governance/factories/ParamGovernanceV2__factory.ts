/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ParamGovernanceV2,
  ParamGovernanceV2Interface,
} from "../ParamGovernanceV2";

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
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
    ],
    name: "getAddress",
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
    name: "getFeeDistribution",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "funds",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "percentages",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "param",
        type: "bytes32",
      },
    ],
    name: "getParam",
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
    name: "getParams",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "name",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxValue",
            type: "uint256",
          },
        ],
        internalType: "struct ParameterView[]",
        name: "parameters",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "names",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
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
        name: "_xWOW",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "holder",
        type: "address",
      },
    ],
    name: "revote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "setAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "parameter",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "minValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxValue",
        type: "uint256",
      },
    ],
    name: "setParamBounds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "parameters",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "minValues",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "maxValues",
        type: "uint256[]",
      },
    ],
    name: "setParamsBounds",
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
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "automaticReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "manualReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "development",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "insurance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "charity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyAndBurn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeDistributionReward",
            type: "uint256",
          },
        ],
        internalType: "struct FundsV2.FeeDistribution",
        name: "distribution",
        type: "tuple",
      },
    ],
    name: "voteForFeeDistribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "voteForParam",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "names",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "voteForParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061294d806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638da5cb5b116100a2578063ca446dd911610071578063ca446dd9146101fb578063dde43cba1461020e578063efc1a9bf14610223578063f2fde38b14610236578063f811db68146102495761010b565b80638da5cb5b146101ba578063965faf3d146101c25780639ab24eb0146101d5578063c4d66de8146101e85761010b565b8063539d7f38116100de578063539d7f38146101745780635e615a6b14610187578063715018a61461019c578063752f77f1146101a45761010b565b80630ed9a5121461011057806321067dab1461012557806321f8a721146101385780633b68ccdb14610161575b600080fd5b61012361011e366004612506565b61025c565b005b610123610133366004612538565b610484565b61014b61014636600461260c565b610794565b6040516101589190612692565b60405180910390f35b61012361016f36600461246e565b6107b2565b61012361018236600461264f565b610919565b61018f61098b565b604051610158919061273a565b610123610ab6565b6101ac610b62565b6040516101589291906126c0565b61014b610c0e565b6101236101d0366004612576565b610c1d565b6101ac6101e336600461246e565b610d80565b6101236101f636600461246e565b610eb2565b610123610209366004612624565b610f82565b610216611073565b60405161015891906127fb565b61021661023136600461260c565b611078565b61012361024436600461246e565b61108a565b610123610257366004612488565b61118d565b81610268606682611465565b6040518060400160405280601181526020017024b73b30b634b2103830b930b6b2ba32b960791b815250906102b95760405162461bcd60e51b81526004016102b091906127a8565b60405180910390fd5b50606554604051636eb1769f60e11b81526000916001600160a01b03169063dd62ed3e906102ed90889030906004016126a6565b60206040518083038186803b15801561030557600080fd5b505afa158015610319573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033d919061267a565b1160405180604001604052806016815260200175159bdd1a5b99c81a5cc81b9bdd08185c1c1c9bdd995960521b8152509061038b5760405162461bcd60e51b81526004016102b091906127a8565b506065546040516370a0823160e01b81526000916001600160a01b0316906370a08231906103bd908890600401612692565b60206040518083038186803b1580156103d557600080fd5b505afa1580156103e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040d919061267a565b905061041b8582868661147a565b60655460405163457c367d60e11b81526001600160a01b0390911690638af86cfa9061044b908890600401612692565b600060405180830381600087803b15801561046557600080fd5b505af1158015610479573d6000803e3d6000fd5b505050505050505050565b606554604051636eb1769f60e11b81526000916001600160a01b03169063dd62ed3e906104b790869030906004016126a6565b60206040518083038186803b1580156104cf57600080fd5b505afa1580156104e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610507919061267a565b1160405180604001604052806016815260200175159bdd1a5b99c81a5cc81b9bdd08185c1c1c9bdd995960521b815250906105555760405162461bcd60e51b81526004016102b091906127a8565b50600061058d60c083013561058760a08501358160808701358160608901358160408b0135818c3560208e0135611741565b90611741565b905061271081146040518060600160405280602e815260200161287b602e9139906105cb5760405162461bcd60e51b81526004016102b091906127a8565b506065546040516370a0823160e01b81526000916001600160a01b0316906370a08231906105fd908790600401612692565b60206040518083038186803b15801561061557600080fd5b505afa158015610629573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064d919061267a565b905061066f84826f10555513d350551250d7d49155d0549160821b863561147a565b61068f84826c13505395505317d49155d05491609a1b866020013561147a565b6106ad84826a111155915313d41351539560aa1b866040013561147a565b6106c9848268494e535552414e434560b81b866060013561147a565b6106e38482664348415249545960c81b866080013561147a565b61070284826b212aacafa0a7222fa12aa92760a11b8660a0013561147a565b61072c84827611915157d11254d514925095551253d397d49155d05491604a1b8660c0013561147a565b60655460405163457c367d60e11b81526001600160a01b0390911690638af86cfa9061075c908790600401612692565b600060405180830381600087803b15801561077657600080fd5b505af115801561078a573d6000803e3d6000fd5b5050505050505050565b6000818152606960205260409020546001600160a01b03165b919050565b6001600160a01b0381166000908152606a602090815260409182902080548351818402810184019094528084526060939283018282801561081257602002820191906000526020600020905b8154815260200190600101908083116107fe575b50506065546040516370a0823160e01b81529495506000946001600160a01b0390911693506370a08231925061084d91508690600401612692565b60206040518083038186803b15801561086557600080fd5b505afa158015610879573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089d919061267a565b90506000805b8351811015610912578381815181106108b857fe5b6020026020010151915061090a858484606a60008a6001600160a01b03166001600160a01b0316815260200190815260200160002060020160008781526020019081526020016000206000015461147a565b6001016108a3565b5050505050565b61092161179b565b6001600160a01b0316610932610c0e565b6001600160a01b03161461097b576040805162461bcd60e51b815260206004820181905260248201526000805160206128ca833981519152604482015290519081900360640190fd5b61098683838361179f565b505050565b606060006109996066611871565b90508067ffffffffffffffff811180156109b257600080fd5b506040519080825280602002602001820160405280156109ec57816020015b6109d961239a565b8152602001906001900390816109d15790505b50915060006109f96123cc565b60005b83811015610aaf57610a0f60668261187c565b92506068600084815260200190815260200160002060405180608001604052908160008201548152602001600182015481526020016002820154815260200160038201548152505091506040518060a001604052808481526020018360000151815260200183602001518152602001836040015181526020018360600151815250858281518110610a9c57fe5b60209081029190910101526001016109fc565b5050505090565b610abe61179b565b6001600160a01b0316610acf610c0e565b6001600160a01b031614610b18576040805162461bcd60e51b815260206004820181905260248201526000805160206128ca833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b606080610b6d611888565b9150815167ffffffffffffffff81118015610b8757600080fd5b50604051908082528060200260200182016040528015610bb1578160200160208202803683370190505b50905060005b8251811015610c095760686000848381518110610bd057fe5b6020026020010151815260200190815260200160002060000154828281518110610bf657fe5b6020908102919091010152600101610bb7565b509091565b6033546001600160a01b031690565b610c2561179b565b6001600160a01b0316610c36610c0e565b6001600160a01b031614610c7f576040805162461bcd60e51b815260206004820181905260248201526000805160206128ca833981519152604482015290519081900360640190fd5b60408051808201909152601a81527950726f766964656420696e636f6e73697374656e74206461746160301b6020820152858414610cd05760405162461bcd60e51b81526004016102b091906127a8565b5060408051808201909152601a81527950726f766964656420696e636f6e73697374656e74206461746160301b6020820152858214610d225760405162461bcd60e51b81526004016102b091906127a8565b5060005b85811015610d7757610d6f878783818110610d3d57fe5b90506020020135868684818110610d5057fe5b90506020020135858585818110610d6357fe5b9050602002013561179f565b600101610d26565b50505050505050565b6001600160a01b0381166000908152606a60209081526040918290208054835181840281018401909452808452606093849390929190830182828015610de557602002820191906000526020600020905b815481526020019060010190808311610dd1575b50505050509150815167ffffffffffffffff81118015610e0457600080fd5b50604051908082528060200260200182016040528015610e2e578160200160208202803683370190505b50905060005b8251811015610eac57606a6000856001600160a01b03166001600160a01b031681526020019081526020016000206002016000848381518110610e7357fe5b6020026020010151815260200190815260200160002060000154828281518110610e9957fe5b6020908102919091010152600101610e34565b50915091565b600054610100900460ff1680610ecb5750610ecb6119d5565b80610ed9575060005460ff16155b610f145760405162461bcd60e51b815260040180806020018281038252602e81526020018061284d602e913960400191505060405180910390fd5b600054610100900460ff16158015610f3f576000805460ff1961ff0019909116610100171660011790555b610f476119e6565b606580546001600160a01b0319166001600160a01b038416179055610f6c6066611a98565b8015610f7e576000805461ff00191690555b5050565b610f8a61179b565b6001600160a01b0316610f9b610c0e565b6001600160a01b031614610fe4576040805162461bcd60e51b815260206004820181905260248201526000805160206128ca833981519152604482015290519081900360640190fd5b6a29aba0a82fa927aaaa22a960a91b82148061100d57506a14149250d157d1d550549160aa1b82145b6040518060600160405280602e81526020016128ea602e9139906110445760405162461bcd60e51b81526004016102b091906127a8565b5060009182526069602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b600281565b60009081526068602052604090205490565b61109261179b565b6001600160a01b03166110a3610c0e565b6001600160a01b0316146110ec576040805162461bcd60e51b815260206004820181905260248201526000805160206128ca833981519152604482015290519081900360640190fd5b6001600160a01b0381166111315760405162461bcd60e51b81526004018080602001828103825260268152602001806128276026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b60408051808201909152601a81527950726f766964656420696e636f6e73697374656e74206461746160301b60208201528382146111de5760405162461bcd60e51b81526004016102b091906127a8565b50606554604051636eb1769f60e11b81526000916001600160a01b03169063dd62ed3e9061121290899030906004016126a6565b60206040518083038186803b15801561122a57600080fd5b505afa15801561123e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611262919061267a565b1160405180604001604052806016815260200175159bdd1a5b99c81a5cc81b9bdd08185c1c1c9bdd995960521b815250906112b05760405162461bcd60e51b81526004016102b091906127a8565b5060005b83811015611333576112e28585838181106112cb57fe5b90506020020135606661146590919063ffffffff16565b6040518060400160405280601181526020017024b73b30b634b2103830b930b6b2ba32b960791b8152509061132a5760405162461bcd60e51b81526004016102b091906127a8565b506001016112b4565b506065546040516370a0823160e01b81526000916001600160a01b0316906370a0823190611365908990600401612692565b60206040518083038186803b15801561137d57600080fd5b505afa158015611391573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b5919061267a565b905060005b848110156113fa576113f287838888858181106113d357fe5b905060200201358787868181106113e657fe5b9050602002013561147a565b6001016113ba565b5060655460405163457c367d60e11b81526001600160a01b0390911690638af86cfa9061142b908990600401612692565b600060405180830381600087803b15801561144557600080fd5b505af1158015611459573d6000803e3d6000fd5b50505050505050505050565b60006114718383611b27565b90505b92915050565b6114826123cc565b506000828152606860209081526040918290208251608081018452815481526001820154818401526002820154818501819052600390920154606082015283518085019094528284527f506172616d657465722076616c7565206973206f7574206f6620626f756e6473928401929092529091908310156115165760405162461bcd60e51b81526004016102b091906127a8565b506060810151158061152c575080606001518211155b6040518060400160405280602081526020017f506172616d657465722076616c7565206973206f7574206f6620626f756e6473815250906115805760405162461bcd60e51b81526004016102b091906127a8565b506001600160a01b0385166000908152606a60205260408120819081906115a79087611465565b1561168a576115b46123f4565b506001600160a01b0388166000908152606a6020908152604080832089845260020182529182902082518084019093528054835260010154828201819052908601516115ff91611b3f565b9150811561164a576116458261163f61162984602001518560000151611b8190919063ffffffff16565b6020890151895161163991611b81565b90611b3f565b90611bda565b61164d565b60005b93506116598289611741565b925087611684576001600160a01b0389166000908152606a602052604090206116829088611c1c565b505b506116c6565b508251602084015190925061169f8188611741565b6001600160a01b0389166000908152606a602052604090209092506116c49087611c28565b505b600082156116ee576116e98361163f6116df898c611b81565b6105878887611b81565b6116f1565b60005b6001600160a01b039099166000908152606a602090815260408083208a84526002018252808320988955988252600197880199909955606890985250509390942094855550929092019190915550565b600082820183811015611471576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b826117ab606682611465565b6040518060400160405280601181526020017024b73b30b634b2103830b930b6b2ba32b960791b815250906117f35760405162461bcd60e51b81526004016102b091906127a8565b508115806118015750828210155b6040518060400160405280601a81526020017950726f766964656420696e636f6e73697374656e74206461746160301b815250906118525760405162461bcd60e51b81526004016102b091906127a8565b5050600092835260686020526040909220600281019190915560030155565b600061147482611c34565b60006114718383611c38565b60408051600780825261010082019092526060916020820160e0803683370190505090506f10555513d350551250d7d49155d0549160821b816000815181106118cd57fe5b6020026020010181815250506c13505395505317d49155d05491609a1b816001815181106118f757fe5b6020026020010181815250506a111155915313d41351539560aa1b8160028151811061191f57fe5b60200260200101818152505068494e535552414e434560b81b8160038151811061194557fe5b602002602001018181525050664348415249545960c81b8160048151811061196957fe5b6020026020010181815250506b212aacafa0a7222fa12aa92760a11b8160058151811061199257fe5b6020026020010181815250507611915157d11254d514925095551253d397d49155d05491604a1b816006815181106119c657fe5b60200260200101818152505090565b60006119e030611c9c565b15905090565b600054610100900460ff16806119ff57506119ff6119d5565b80611a0d575060005460ff16155b611a485760405162461bcd60e51b815260040180806020018281038252602e81526020018061284d602e913960400191505060405180910390fd5b600054610100900460ff16158015611a73576000805460ff1961ff0019909116610100171660011790555b611a7b611ca2565b611a83611d42565b8015611a95576000805461ff00191690555b50565b6060611aa2611e3b565b90506000611aaf83611871565b90506000805b82811015611aeb57611ac7858261187c565b9150611ad3848361214a565b611ae357611ae18583611c1c565b505b600101611ab5565b5060005b835181101561091257611b1e848281518110611b0757fe5b602002602001015186611c2890919063ffffffff16565b50600101611aef565b60009081526001919091016020526040902054151590565b600061147183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061218e565b600082611b9057506000611474565b82820282848281611b9d57fe5b04146114715760405162461bcd60e51b81526004018080602001828103825260218152602001806128a96021913960400191505060405180910390fd5b600061147183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250612225565b6000611471838361228a565b60006114718383612350565b5490565b81546000908210611c7a5760405162461bcd60e51b81526004018080602001828103825260228152602001806128056022913960400191505060405180910390fd5b826000018281548110611c8957fe5b9060005260206000200154905092915050565b3b151590565b600054610100900460ff1680611cbb5750611cbb6119d5565b80611cc9575060005460ff16155b611d045760405162461bcd60e51b815260040180806020018281038252602e81526020018061284d602e913960400191505060405180910390fd5b600054610100900460ff16158015611a83576000805460ff1961ff0019909116610100171660011790558015611a95576000805461ff001916905550565b600054610100900460ff1680611d5b5750611d5b6119d5565b80611d69575060005460ff16155b611da45760405162461bcd60e51b815260040180806020018281038252602e81526020018061284d602e913960400191505060405180910390fd5b600054610100900460ff16158015611dcf576000805460ff1961ff0019909116610100171660011790555b6000611dd961179b565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015611a95576000805461ff001916905550565b604080516010808252610220820190925260609160208201610200803683370190505090507f504f4f4c5f5554494c495a4154494f4e5f414c4c4f57414e434500000000000081600081518110611e8e57fe5b6020026020010181815250506f424153455f424f52524f575f5241544560801b81600181518110611ebb57fe5b6020026020010181815250506c4f5054494d414c5f534c4f504560981b81600281518110611ee557fe5b6020026020010181815250506b4558434553535f534c4f504560a01b81600381518110611f0e57fe5b6020026020010181815250507227a82a24a6a0a62faaaa24a624ad20aa24a7a760691b81600481518110611f3e57fe5b602002602001018181525050712624a8aaa4a220aa24a7a72fa6a0a923a4a760711b81600581518110611f6d57fe5b6020026020010181815250507113125455525110551253d397d49155d0549160721b81600681518110611f9c57fe5b6020026020010181815250507226a0ac2fa622ab22a920a3a2afa320a1aa27a960691b81600781518110611fcc57fe5b6020026020010181815250507226a0ac2fa920aa22afa6aaa62a24a82624a2a960691b81600881518110611ffc57fe5b6020026020010181815250507113525397d5d3d5d7d09053105390d157d60d60721b8160098151811061202b57fe5b602002602001018181525050714d494e5f574f575f42414c414e43455f583560701b81600a8151811061205a57fe5b602002602001018181525050705452414445525f50524f4649545f46454560781b81600b8151811061208857fe5b602002602001018181525050754c49515549444954595f50524f56494445525f46454560501b81600c815181106120bb57fe5b6020026020010181815250506e2a2922a0a9aaa922afa320a1aa27a960891b81600d815181106120e757fe5b6020026020010181815250507513505617d3125455525110551253d397d49155d0549160521b81600e8151811061211a57fe5b6020026020010181815250507213505617d4149250d157d512149154d213d311606a1b81600f815181106119c657fe5b6000805b8351811015612184578284828151811061216457fe5b6020026020010151141561217c576001915050611474565b60010161214e565b5060009392505050565b6000818484111561221d5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156121e25781810151838201526020016121ca565b50505050905090810190601f16801561220f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600081836122745760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156121e25781810151838201526020016121ca565b50600083858161228057fe5b0495945050505050565b6000818152600183016020526040812054801561234657835460001980830191908101906000908790839081106122bd57fe5b90600052602060002001549050808760000184815481106122da57fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061230a57fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050611474565b6000915050611474565b600061235c8383611b27565b61239257508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155611474565b506000611474565b6040518060a0016040528060008019168152602001600081526020016000815260200160008152602001600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b80356001600160a01b03811681146107ad57600080fd5b60008083601f840112612436578182fd5b50813567ffffffffffffffff81111561244d578182fd5b602083019150836020808302850101111561246757600080fd5b9250929050565b60006020828403121561247f578081fd5b6114718261240e565b60008060008060006060868803121561249f578081fd5b6124a88661240e565b9450602086013567ffffffffffffffff808211156124c4578283fd5b6124d089838a01612425565b909650945060408801359150808211156124e8578283fd5b506124f588828901612425565b969995985093965092949392505050565b60008060006060848603121561251a578283fd5b6125238461240e565b95602085013595506040909401359392505050565b60008082840361010081121561254c578283fd5b6125558461240e565b925060e0601f1982011215612568578182fd5b506020830190509250929050565b6000806000806000806060878903121561258e578081fd5b863567ffffffffffffffff808211156125a5578283fd5b6125b18a838b01612425565b909850965060208901359150808211156125c9578283fd5b6125d58a838b01612425565b909650945060408901359150808211156125ed578283fd5b506125fa89828a01612425565b979a9699509497509295939492505050565b60006020828403121561261d578081fd5b5035919050565b60008060408385031215612636578182fd5b823591506126466020840161240e565b90509250929050565b600080600060608486031215612663578283fd5b505081359360208301359350604090920135919050565b60006020828403121561268b578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b604080825283519082018190526000906020906060840190828701845b828110156126f9578151845292840192908401906001016126dd565b50505083810382850152845180825285830191830190845b8181101561272d57835183529284019291840191600101612711565b5090979650505050505050565b602080825282518282018190526000919060409081850190868401855b8281101561279b5781518051855286810151878601528581015186860152606080820151908601526080908101519085015260a09093019290850190600101612757565b5091979650505050505050565b6000602080835283518082850152825b818110156127d4578581018301518582016040015282016127b8565b818111156127e55783604083870101525b50601f01601f1916929092016040019392505050565b9081526020019056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564546f74616c2066656520646973747269627574696f6e2073686f756c6420626520657175616c20746f2031303025536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657250726f7669646564206e616d65206973206e6f7420612076616c6964206164647265737320706172616d65746572a264697066735822122089351ed0a7b5c3c04db190c5eca2b6a7a36a0df59047301c4fcf7c0fc2372a7964736f6c63430007040033";

export class ParamGovernanceV2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ParamGovernanceV2> {
    return super.deploy(overrides || {}) as Promise<ParamGovernanceV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ParamGovernanceV2 {
    return super.attach(address) as ParamGovernanceV2;
  }
  connect(signer: Signer): ParamGovernanceV2__factory {
    return super.connect(signer) as ParamGovernanceV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ParamGovernanceV2Interface {
    return new utils.Interface(_abi) as ParamGovernanceV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ParamGovernanceV2 {
    return new Contract(address, _abi, signerOrProvider) as ParamGovernanceV2;
  }
}
