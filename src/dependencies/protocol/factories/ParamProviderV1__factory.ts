/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ParamProviderV1,
  ParamProviderV1Interface,
} from "../ParamProviderV1";

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
    name: "baseBorrowRate",
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
    name: "excessSlope",
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
        name: "owner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "baseBorrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optimalSlope",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "excessSlope",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optimalUtilization",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasureFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolUtilizationAllowance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "traderProfitFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationMargin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLeverageFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxRateMultiplier",
            type: "uint256",
          },
        ],
        internalType: "struct ProtocolParameters",
        name: "defaultParameters",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maxLiquidationReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minPositionDeposit",
            type: "uint256",
          },
        ],
        internalType: "struct TokenParameters",
        name: "defaultTokenParameters",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "leverageFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minWOWBalance",
            type: "uint256",
          },
        ],
        internalType: "struct MinWOWBalanceParameters[]",
        name: "minWOWBalances",
        type: "tuple[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidationMargin",
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
    name: "liquidationReward",
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
    name: "maxLeverageFactor",
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
    name: "maxLiquidationReward",
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
    name: "maxRateMultiplier",
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
    name: "minPositionDeposit",
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
        name: "leverageFactor",
        type: "uint256",
      },
    ],
    name: "minWOWBalance",
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
    name: "optimalSlope",
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
    name: "optimalUtilization",
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
    name: "poolUtilizationAllowance",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setBaseBorrowRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setExcessSlope",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setLiquidationMargin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setLiquidationReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setMaxLeverageFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setMaxLiquidationReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setMaxRateMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setMinPositionDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "leverageFactor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setMinWOWBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setOptimalSlope",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setOptimalUtilization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "baseBorrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optimalSlope",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "excessSlope",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optimalUtilization",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasureFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolUtilizationAllowance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "traderProfitFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationMargin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLeverageFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxRateMultiplier",
            type: "uint256",
          },
        ],
        internalType: "struct ProtocolParameters",
        name: "parameters",
        type: "tuple",
      },
    ],
    name: "setParameters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setPoolUtilizationAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setTraderProfitFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setTreasureFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "traderProfitFee",
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
    name: "treasureFactor",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611463806100206000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c8063715018a61161011a578063b2c53a6c116100ad578063cc70cd411161007c578063cc70cd41146103bd578063d0704a67146103d0578063dde43cba146103e3578063f2fde38b146103eb578063fb844c2c146103fe57610206565b8063b2c53a6c14610392578063b339b3681461039a578063bf386682146103a2578063c8fad694146103aa57610206565b80638da5cb5b116100e95780638da5cb5b1461034f5780639a3418d514610364578063ab78ace414610377578063ac8a7bac1461037f57610206565b8063715018a6146103195780637629da6f1461032157806379da16c4146103345780637f1857611461034757610206565b80633e29d70a1161019d5780635f4985c41161016c5780635f4985c4146102d057806360fa0425146102d85780636290cd1c146102eb5780636b000606146102f35780636e34394a1461030657610206565b80633e29d70a1461029a57806344b01c56146102ad5780634845a820146102b55780635d03baea146102c857610206565b806323616d45116101d957806323616d4514610264578063255bb3a91461027757806327b182921461027f57806337ae0f1b1461029257610206565b80630a8836901461020b5780630c9c81a1146102205780631d9cdcd2146102335780632262697e14610246575b600080fd5b61021e610219366004611245565b610406565b005b61021e61022e366004611245565b61046e565b61021e610241366004611245565b6104d6565b61024e61053e565b60405161025b9190611292565b60405180910390f35b61021e610272366004611245565b610545565b61024e6105ad565b61024e61028d366004611245565b6105b4565b61024e6105e3565b61021e6102a8366004611245565b6105ea565b61024e610652565b61021e6102c3366004611245565b610659565b61024e6106c1565b61024e6106c8565b61021e6102e6366004611179565b6106cf565b61024e610806565b61021e610301366004611245565b61080d565b61021e61031436600461125d565b610875565b61021e6108f9565b61021e61032f366004611245565b6109a5565b61021e610342366004611229565b610a0d565b61024e610a82565b610357610a89565b60405161025b919061127e565b61021e610372366004611245565b610a98565b61024e610b00565b61021e61038d366004611245565b610b07565b61024e610b6f565b61024e610b76565b61024e610b7d565b61021e6103b8366004611245565b610b84565b61021e6103cb366004611245565b610bec565b61021e6103de366004611245565b610c54565b61024e610cbc565b61021e6103f9366004611158565b610cc1565b61024e610dc4565b61040e610dcb565b6001600160a01b031661041f610a89565b6001600160a01b031614610468576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016955565b610476610dcb565b6001600160a01b0316610487610a89565b6001600160a01b0316146104d0576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016655565b6104de610dcb565b6001600160a01b03166104ef610a89565b6001600160a01b031614610538576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016b55565b61016d5490565b61054d610dcb565b6001600160a01b031661055e610a89565b6001600160a01b0316146105a7576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016755565b6101685490565b60006127108083048102908306156105cb57612710015b6000908152610173602052604090205490505b919050565b61016c5490565b6105f2610dcb565b6001600160a01b0316610603610a89565b6001600160a01b03161461064c576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61017255565b6101675490565b610661610dcb565b6001600160a01b0316610672610a89565b6001600160a01b0316146106bb576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016e55565b61016b5490565b6101725490565b600054610100900460ff16806106e857506106e8610dcf565b806106f6575060005460ff16155b6107315760405162461bcd60e51b815260040180806020018281038252602e8152602001806113b8602e913960400191505060405180910390fd5b600054610100900460ff1615801561075c576000805460ff1961ff0019909116610100171660011790555b610764610de0565b61076c610e92565b61077586610cc1565b84610166610783828261129b565b508490506101716107948282611360565b90505060005b828110156107eb578383828181106107ae57fe5b9050604002016020013561017360008686858181106107c957fe5b604090810292909201358352506020820192909252016000205560010161079a565b5080156107fe576000805461ff00191690555b505050505050565b6101695490565b610815610dcb565b6001600160a01b0316610826610a89565b6001600160a01b03161461086f576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016d55565b61087d610dcb565b6001600160a01b031661088e610a89565b6001600160a01b0316146108d7576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b6127108206156108e657600080fd5b6000918252610173602052604090912055565b610901610dcb565b6001600160a01b0316610912610a89565b6001600160a01b03161461095b576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6109ad610dcb565b6001600160a01b03166109be610a89565b6001600160a01b031614610a07576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016f55565b610a15610dcb565b6001600160a01b0316610a26610a89565b6001600160a01b031614610a6f576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b80610166610a7d828261129b565b505050565b61016a5490565b6033546001600160a01b031690565b610aa0610dcb565b6001600160a01b0316610ab1610a89565b6001600160a01b031614610afa576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61017155565b6101715490565b610b0f610dcb565b6001600160a01b0316610b20610a89565b6001600160a01b031614610b69576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016855565b61016f5490565b61016e5490565b6101665490565b610b8c610dcb565b6001600160a01b0316610b9d610a89565b6001600160a01b031614610be6576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016c55565b610bf4610dcb565b6001600160a01b0316610c05610a89565b6001600160a01b031614610c4e576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61016a55565b610c5c610dcb565b6001600160a01b0316610c6d610a89565b6001600160a01b031614610cb6576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b61017055565b600181565b610cc9610dcb565b6001600160a01b0316610cda610a89565b6001600160a01b031614610d23576040805162461bcd60e51b815260206004820181905260248201526000805160206113e6833981519152604482015290519081900360640190fd5b6001600160a01b038116610d685760405162461bcd60e51b81526004018080602001828103825260268152602001806113926026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b6101705490565b3390565b6000610dda30610f85565b15905090565b600054610100900460ff1680610df95750610df9610dcf565b80610e07575060005460ff16155b610e425760405162461bcd60e51b815260040180806020018281038252602e8152602001806113b8602e913960400191505060405180910390fd5b600054610100900460ff16158015610e6d576000805460ff1961ff0019909116610100171660011790555b610e75610f8b565b610e7d61102b565b8015610e8f576000805461ff00191690555b50565b600054610100900460ff1680610eab5750610eab610dcf565b80610eb9575060005460ff16155b610ef45760405162461bcd60e51b815260040180806020018281038252602e8152602001806113b8602e913960400191505060405180910390fd5b600054610100900460ff16158015610f1f576000805460ff1961ff0019909116610100171660011790555b606554610f2a611124565b11610f665760405162461bcd60e51b81526004018080602001828103825260288152602001806114066028913960400191505060405180910390fd5b610f6e611124565b6065558015610e8f576000805461ff001916905550565b3b151590565b600054610100900460ff1680610fa45750610fa4610dcf565b80610fb2575060005460ff16155b610fed5760405162461bcd60e51b815260040180806020018281038252602e8152602001806113b8602e913960400191505060405180910390fd5b600054610100900460ff16158015610e7d576000805460ff1961ff0019909116610100171660011790558015610e8f576000805461ff001916905550565b600054610100900460ff16806110445750611044610dcf565b80611052575060005460ff16155b61108d5760405162461bcd60e51b815260040180806020018281038252602e8152602001806113b8602e913960400191505060405180910390fd5b600054610100900460ff161580156110b8576000805460ff1961ff0019909116610100171660011790555b60006110c2610dcb565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610e8f576000805461ff001916905550565b600190565b80356001600160a01b03811681146105de57600080fd5b60006101608284031215611152578081fd5b50919050565b600060208284031215611169578081fd5b61117282611129565b9392505050565b60008060008060008587036101e0811215611192578182fd5b61119b87611129565b95506111aa8860208901611140565b9450604061017f19820112156111be578182fd5b50610180860192506101c086013567ffffffffffffffff808211156111e1578283fd5b818801915088601f8301126111f4578283fd5b813581811115611202578384fd5b896020604083028501011115611216578384fd5b9699959850939650602001949392505050565b6000610160828403121561123b578081fd5b6111728383611140565b600060208284031215611256578081fd5b5035919050565b6000806040838503121561126f578182fd5b50508035926020909101359150565b6001600160a01b0391909116815260200190565b90815260200190565b60006112a983358284611372565b6112bb60208401358260018501611372565b6112cd60408401358260028501611372565b6112df60608401358260038501611372565b6112f160808401358260048501611372565b61130360a08401358260058501611372565b61131560c08401358260068501611372565b61132760e08401358260078501611372565b61133a6101008401358260088501611372565b61134d6101208401358260098501611372565b610a7d61014084013582600a8501611372565b81358155602082013560018201555050565b805460088302600019811b8086831b168119841617845550505050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657256657273696f6e65643a207265766973696f6e20697320746f6f206c6f7720746f20757064617465a2646970667358221220f12b8ea765296605e6d255f90d52477458bcf4eeb996954617d508337c9164d264736f6c63430007040033";

export class ParamProviderV1__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ParamProviderV1> {
    return super.deploy(overrides || {}) as Promise<ParamProviderV1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ParamProviderV1 {
    return super.attach(address) as ParamProviderV1;
  }
  connect(signer: Signer): ParamProviderV1__factory {
    return super.connect(signer) as ParamProviderV1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ParamProviderV1Interface {
    return new utils.Interface(_abi) as ParamProviderV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ParamProviderV1 {
    return new Contract(address, _abi, signerOrProvider) as ParamProviderV1;
  }
}
