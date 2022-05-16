/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Referral, ReferralInterface } from "../Referral";

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
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "availableClaim",
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
        name: "token",
        type: "address",
      },
    ],
    name: "availableIncentivize",
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
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
    ],
    name: "calculateRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reward1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reward2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reward3",
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
        name: "token",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "claimAll",
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
    name: "claimable",
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
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "claimed",
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
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
    ],
    name: "distributeReward",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
    ],
    name: "distributeRewardIncentivized",
    outputs: [
      {
        internalType: "uint256",
        name: "volumeLeft",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "getReferral",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "referral",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "blocknumber",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "timestamp",
            type: "uint128",
          },
        ],
        internalType: "struct ReferralEntry",
        name: "found",
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
        name: "referral",
        type: "address",
      },
    ],
    name: "getReferrer",
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
    name: "incentivize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "paramProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "pairFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "lendableProvider",
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
        name: "referrer",
        type: "address",
      },
    ],
    name: "isReferrer",
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
    inputs: [],
    name: "pairFactory",
    outputs: [
      {
        internalType: "contract IPairFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paramProvider",
    outputs: [
      {
        internalType: "contract IParamProvider",
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
        name: "referrer",
        type: "address",
      },
    ],
    name: "referrals",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "referral",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "blocknumber",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "timestamp",
            type: "uint128",
          },
        ],
        internalType: "struct ReferralEntry[]",
        name: "found",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "register",
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
        name: "value",
        type: "address",
      },
    ],
    name: "setPairFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        internalType: "address",
        name: "referral",
        type: "address",
      },
    ],
    name: "setReferral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        internalType: "address",
        name: "referral",
        type: "address",
      },
    ],
    name: "setReferralAdmin",
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
    name: "treasurer",
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
    name: "wow",
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
    name: "xwow",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506122f3806100206000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806382e58d51116100f9578063c75b506911610097578063e14f870d11610071578063e14f870d146103a0578063e7cea7f4146103a8578063f2fde38b146103bb578063fda49eb4146103ce576101c4565b8063c75b506914610370578063d64d696814610378578063dde43cba14610398576101c4565b80639ca423b3116100d35780639ca423b314610322578063b3af27a414610342578063bd1cbc9d14610355578063c0c53b8b1461035d576101c4565b806382e58d51146102d75780638b4d7577146102f75780638da5cb5b1461031a576101c4565b80634a9fefc711610166578063715018a611610140578063715018a6146102965780637543e3f01461029e57806377329f35146102b15780637964bac9146102c4576101c4565b80634a9fefc71461025d578063678e3daa146102705780636af4544a14610283576101c4565b806321c0b342116101a257806321c0b3421461020f578063274eec5b146102225780632c87d47c14610235578063402914f51461024a576101c4565b80630c9cbf0e146101c9578063123b9332146101f25780631aa3a00814610205575b600080fd5b6101dc6101d7366004611f89565b6103d6565b6040516101e991906121c1565b60405180910390f35b6101dc61020036600461200b565b610403565b61020d610607565b005b61020d61021d366004611f89565b61063f565b6101dc610230366004611f89565b61070c565b61023d610737565b6040516101e991906120f3565b6101dc610258366004611f51565b610746565b61023d61026b366004611f51565b610765565b61020d61027e366004611f51565b610783565b6101dc610291366004611f51565b6107d4565b61020d6107ef565b61020d6102ac366004611f89565b61089b565b61020d6102bf366004611f51565b610983565b61020d6102d2366004611f51565b6109c2565b6102ea6102e536600461206b565b610a46565b6040516101e991906121b3565b61030a61030536600461200b565b610aa2565b6040516101e994939291906121ca565b61023d610bd5565b610335610330366004611f51565b610be4565b6040516101e99190612107565b61020d610350366004611f89565b610c9c565b61023d610d08565b61020d61036b366004611fc1565b610d87565b61023d610e78565b61038b610386366004611f51565b610eba565b6040516101e99190612155565b6101dc610ed8565b61023d610edd565b61020d6103b636600461200b565b610eec565b61020d6103c9366004611f51565b611241565b61023d611344565b6001600160a01b038083166000908152606e60209081526040808320938516835292905220545b92915050565b6066546000906001600160a01b031663e5e31b1361041f611386565b6040518263ffffffff1660e01b815260040161043b91906120f3565b60206040518083038186803b15801561045357600080fd5b505afa158015610467573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048b919061204b565b6040518060400160405280601e81526020017f4f6e6c7920706169722063616e2063616c6c2074686973206d6574686f640000815250906104e85760405162461bcd60e51b81526004016104df9190612160565b60405180910390fd5b5060006104f6858585610aa2565b505050905060006105068561138a565b9050801561052c5781811015610527576105208282611467565b915061052c565b600091505b6001600160a01b0385166000908152606b60205260409020548061054f57600080fd5b828110156105b157600061056382856114b0565b6001600160a01b0388166000908152606b6020526040812055905061059a610593670de0b6b3a764000083611467565b87906115ef565b94506105ab88886103b68989611467565b506105fd565b6001600160a01b0386166000908152606b60205260409020546105d49084611467565b6001600160a01b0387166000908152606b60205260409020556105f8878787610eec565b600093505b5050509392505050565b6001606a6000610615611386565b6001600160a01b031681526020810191909152604001600020805460ff1916911515919091179055565b600061064b838361070c565b90508015610707576106678284610662868661070c565b6116a2565b6001600160a01b038084166000818152606d60209081526040808320948716808452948252808320839055928252606e8152828220938252929092529020546106b090826117f6565b6001600160a01b038085166000908152606e60209081526040808320938716835292815282822093909355606c9092529020546106ed9082611467565b6001600160a01b0383166000908152606c60205260409020555b505050565b6001600160a01b039182166000908152606d6020908152604080832093909416825291909152205490565b6065546001600160a01b031690565b6001600160a01b0381166000908152606c60205260409020545b919050565b6001600160a01b039081166000908152606960205260409020541690565b600061078e8261138a565b6001600160a01b0383166000908152606b60205260409020549091506107b490826117f6565b6001600160a01b039092166000908152606b602052604090209190915550565b6001600160a01b03166000908152606b602052604090205490565b6107f7611386565b6001600160a01b0316610808610bd5565b6001600160a01b031614610851576040805162461bcd60e51b81526020600482018190526024820152600080516020612271833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6066546001600160a01b031663e5e31b136108b4611386565b6040518263ffffffff1660e01b81526004016108d091906120f3565b60206040518083038186803b1580156108e857600080fd5b505afa1580156108fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610920919061204b565b6040518060400160405280601e81526020017f4f6e6c7920706169722063616e2063616c6c2074686973206d6574686f640000815250906109745760405162461bcd60e51b81526004016104df9190612160565b5061097f8282611850565b5050565b600061098f6070611adf565b90506000805b828110156109bc576109a8607082611aea565b91506109b4848361063f565b600101610995565b50505050565b6109ca611386565b6001600160a01b03166109db610bd5565b6001600160a01b031614610a24576040805162461bcd60e51b81526020600482018190526024820152600080516020612271833981519152604482015290519081900360640190fd5b606680546001600160a01b0319166001600160a01b0392909216919091179055565b610a4e611f31565b50600090815260686020908152604091829020825160608101845281546001600160a01b031681526001909101546001600160801b0380821693830193909352600160801b90049091169181019190915290565b600080600080610b2a610ab3610737565b6001600160a01b031663b84fe2ab6040518163ffffffff1660e01b815260040160206040518083038186803b158015610aeb57600080fd5b505afa158015610aff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b239190612083565b86906115ef565b9250610b6f610b37610737565b6001600160a01b0316631e70ad0a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610aeb57600080fd5b9150610bb4610b7c610737565b6001600160a01b0316638fea21076040518163ffffffff1660e01b815260040160206040518083038186803b158015610aeb57600080fd5b9050610bca81610bc485856117f6565b906117f6565b935093509350935093565b6033546001600160a01b031690565b6001600160a01b03811660009081526067602052604090208054606091908015610c95578067ffffffffffffffff81118015610c1f57600080fd5b50604051908082528060200260200182016040528015610c5957816020015b610c46611f31565b815260200190600190039081610c3e5790505b50925060005b81811015610c9357610c746102e58483611aea565b848281518110610c8057fe5b6020908102919091010152600101610c5f565b505b5050919050565b610ca4611386565b6001600160a01b0316610cb5610bd5565b6001600160a01b031614610cfe576040805162461bcd60e51b81526020600482018190526024820152600080516020612271833981519152604482015290519081900360640190fd5b61097f8282611850565b6000610d12610737565b6001600160a01b031663acdd82436040518163ffffffff1660e01b815260040160206040518083038186803b158015610d4a57600080fd5b505afa158015610d5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d829190611f6d565b905090565b600054610100900460ff1680610da05750610da0611af6565b80610dae575060005460ff16155b610de95760405162461bcd60e51b815260040180806020018281038252602e815260200180612243602e913960400191505060405180910390fd5b600054610100900460ff16158015610e14576000805460ff1961ff0019909116610100171660011790555b610e1c611b07565b610e24611ba9565b606580546001600160a01b038087166001600160a01b03199283161790925560668054868416908316179055606f80549285169290911691909117905580156109bc576000805461ff001916905550505050565b6000610e82610737565b6001600160a01b031663ad214e1a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d4a57600080fd5b6001600160a01b03166000908152606a602052604090205460ff1690565b607881565b6066546001600160a01b031690565b606f54604051630a65984f60e31b81526001600160a01b039091169063532cc27890610f1c9085906004016120f3565b60206040518083038186803b158015610f3457600080fd5b505afa158015610f48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6c919061204b565b60405180604001604052806015815260200174546f6b656e206973206e6f74206c656e6461626c6560581b81525090610fb85760405162461bcd60e51b81526004016104df9190612160565b50610fc4607083611c46565b50600080600080610fd6878787610aa2565b60408051600380825260808201909252949850929650909450925060609190602082018380368337019050509050838160008151811061101257fe5b602002602001018181525050828160018151811061102c57fe5b602002602001018181525050818160028151811061104657fe5b602002602001018181525050600061105d8861138a565b90508581101561106c57600080fd5b6001600160a01b0388166000908152606c6020526040902054899061109190886117f6565b6001600160a01b038a166000908152606c60205260408120919091555b6003811015611234576110c082610765565b91506001600160a01b03821661116d5761113288606d60006110e0611344565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008d6001600160a01b03166001600160a01b03168152602001908152602001600020546117f690919063ffffffff16565b606d600061113e611344565b6001600160a01b03908116825260208083019390935260409182016000908120918f1681529252902055611234565b6111db84828151811061117c57fe5b6020026020010151606d6000856001600160a01b03166001600160a01b0316815260200190815260200160002060008d6001600160a01b03166001600160a01b03168152602001908152602001600020546117f690919063ffffffff16565b6001600160a01b038084166000908152606d60209081526040808320938f1683529290522055835161122a9085908390811061121357fe5b60200260200101518961146790919063ffffffff16565b97506001016110ae565b5050505050505050505050565b611249611386565b6001600160a01b031661125a610bd5565b6001600160a01b0316146112a3576040805162461bcd60e51b81526020600482018190526024820152600080516020612271833981519152604482015290519081900360640190fd5b6001600160a01b0381166112e85760405162461bcd60e51b815260040180806020018281038252602681526020018061221d6026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b600061134e610737565b6001600160a01b031663fda49eb46040518163ffffffff1660e01b815260040160206040518083038186803b158015610d4a57600080fd5b3390565b600080826001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016113b991906120f3565b60206040518083038186803b1580156113d157600080fd5b505afa1580156113e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114099190612083565b6001600160a01b0384166000908152606c6020908152604080832054606b909252822054929350919061143c83836117f6565b9050808411611452576000945050505050610760565b61145c8482611467565b945050505050610760565b60006114a983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611c5b565b9392505050565b60408051808201909152600381526226a22d60e91b6020820152600090826115565760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561151b578181015183820152602001611503565b50505050905090810190601f1680156115485780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506040805180820190915260038152624d4d4f60e81b60208201526002830490670de0b6b3a76400008219048511156115d05760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561151b578181015183820152602001611503565b508281670de0b6b3a7640000860201816115e657fe5b04949350505050565b60008215806115fc575081155b15611609575060006103fd565b816706f05b59d3b20000198161161b57fe5b04831115604051806040016040528060038152602001624d4d4f60e81b815250906116875760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561151b578181015183820152602001611503565b5050670de0b6b3a764000091026706f05b59d3b20000010490565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b6020831061171f5780518252601f199092019160209182019101611700565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611781576040519150601f19603f3d011682016040523d82523d6000602084013e611786565b606091505b50915091508180156117b45750805115806117b457508080602001905160208110156117b157600080fd5b50515b6117ef5760405162461bcd60e51b815260040180806020018281038252602d815260200180612291602d913960400191505060405180910390fd5b5050505050565b6000828201838110156114a9576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b806001600160a01b0316826001600160a01b03161415801561187a57506001600160a01b03821615155b80156118975750600061188c82610765565b6001600160a01b0316145b1561097f576001600160a01b0382166000908152606760205260408120805490916119d3670de0b6b3a76400006119cd6118cf610d08565b6001600160a01b03166370a08231896040518263ffffffff1660e01b81526004016118fa91906120f3565b60206040518083038186803b15801561191257600080fd5b505afa158015611926573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061194a9190612083565b611952610e78565b6001600160a01b03166370a082318a6040518263ffffffff1660e01b815260040161197d91906120f3565b60206040518083038186803b15801561199557600080fd5b505afa1580156119a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc49190612083565b90611cb5565b9050818111156117ef57600085856040516020016119f29291906120cc565b60408051601f1981840301815282825280516020918201206060840183526001600160a01b03808a1685526001600160801b03438116868501908152428216878701908152600085815260688752878120985189549086166001600160a01b031990911617895591516001909801805491518416600160801b029884166fffffffffffffffffffffffffffffffff19909216919091179092169690961790558a16845260679091529120909150611aa99082611cf7565b505050506001600160a01b03918216600090815260696020526040902080546001600160a01b0319169390921692909217905550565b60006103fd82611d03565b60006114a98383611d07565b6000611b0130611d6b565b15905090565b600054610100900460ff1680611b205750611b20611af6565b80611b2e575060005460ff16155b611b695760405162461bcd60e51b815260040180806020018281038252602e815260200180612243602e913960400191505060405180910390fd5b600054610100900460ff16158015611b94576000805460ff1961ff0019909116610100171660011790555b8015611ba6576000805461ff00191690555b50565b600054610100900460ff1680611bc25750611bc2611af6565b80611bd0575060005460ff16155b611c0b5760405162461bcd60e51b815260040180806020018281038252602e815260200180612243602e913960400191505060405180910390fd5b600054610100900460ff16158015611c36576000805460ff1961ff0019909116610100171660011790555b611c3e611b07565b611b94611d71565b60006114a9836001600160a01b038416611e6a565b60008184841115611cad5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561151b578181015183820152602001611503565b505050900390565b60006114a983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611eb4565b60006114a98383611e6a565b5490565b81546000908210611d495760405162461bcd60e51b81526004018080602001828103825260228152602001806121fb6022913960400191505060405180910390fd5b826000018281548110611d5857fe5b9060005260206000200154905092915050565b3b151590565b600054610100900460ff1680611d8a5750611d8a611af6565b80611d98575060005460ff16155b611dd35760405162461bcd60e51b815260040180806020018281038252602e815260200180612243602e913960400191505060405180910390fd5b600054610100900460ff16158015611dfe576000805460ff1961ff0019909116610100171660011790555b6000611e08611386565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015611ba6576000805461ff001916905550565b6000611e768383611f19565b611eac575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103fd565b5060006103fd565b60008183611f035760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561151b578181015183820152602001611503565b506000838581611f0f57fe5b0495945050505050565b60009081526001919091016020526040902054151590565b604080516060810182526000808252602082018190529181019190915290565b600060208284031215611f62578081fd5b81356114a9816121e5565b600060208284031215611f7e578081fd5b81516114a9816121e5565b60008060408385031215611f9b578081fd5b8235611fa6816121e5565b91506020830135611fb6816121e5565b809150509250929050565b600080600060608486031215611fd5578081fd5b8335611fe0816121e5565b92506020840135611ff0816121e5565b91506040840135612000816121e5565b809150509250925092565b60008060006060848603121561201f578283fd5b833561202a816121e5565b9250602084013561203a816121e5565b929592945050506040919091013590565b60006020828403121561205c578081fd5b815180151581146114a9578182fd5b60006020828403121561207c578081fd5b5035919050565b600060208284031215612094578081fd5b5051919050565b80516001600160a01b031682526020808201516001600160801b039081169184019190915260409182015116910152565b6bffffffffffffffffffffffff19606093841b811682529190921b16601482015260280190565b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b818110156121495761213683855161209b565b9284019260609290920191600101612123565b50909695505050505050565b901515815260200190565b6000602080835283518082850152825b8181101561218c57858101830151858201604001528201612170565b8181111561219d5783604083870101525b50601f01601f1916929092016040019392505050565b606081016103fd828461209b565b90815260200190565b93845260208401929092526040830152606082015260800190565b6001600160a01b0381168114611ba657600080fdfe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c6564a26469706673582212204258df38adc30cbb16cdfb45747bc0267f2d998fc5d9171563dbf25037c25b9b64736f6c63430007040033";

export class Referral__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Referral> {
    return super.deploy(overrides || {}) as Promise<Referral>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Referral {
    return super.attach(address) as Referral;
  }
  connect(signer: Signer): Referral__factory {
    return super.connect(signer) as Referral__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReferralInterface {
    return new utils.Interface(_abi) as ReferralInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Referral {
    return new Contract(address, _abi, signerOrProvider) as Referral;
  }
}