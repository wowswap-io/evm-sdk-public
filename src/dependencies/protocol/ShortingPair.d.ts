/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ShortingPairInterface extends ethers.utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "REVISION()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "calcProfitFee(uint256,uint256)": FunctionFragment;
    "calculateLoan(uint256,uint256)": FunctionFragment;
    "closePosition(address,uint256)": FunctionFragment;
    "closePositionWithReferrer(address,uint256,address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "getAmountOut(uint256)": FunctionFragment;
    "getBorrowLimit()": FunctionFragment;
    "getDeposit(address)": FunctionFragment;
    "getLendableBalance()": FunctionFragment;
    "getLiquidationCost(uint256)": FunctionFragment;
    "getLoan(address)": FunctionFragment;
    "getRateMultiplier(uint256)": FunctionFragment;
    "getReserve()": FunctionFragment;
    "getTotalDeposit()": FunctionFragment;
    "getTotalLoan()": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "initialize(address,address,address,address[],string,string)": FunctionFragment;
    "liquidatePosition(address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "openPosition(address,uint256,uint256,address,tuple)": FunctionFragment;
    "openPositionWithReferrer(address,uint256,uint256,address)": FunctionFragment;
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "positionCosts(address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "underlyingBalanceOf(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "calcProfitFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateLoan",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closePositionWithReferrer",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBorrowLimit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getDeposit", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getLendableBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidationCost",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getLoan", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getRateMultiplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalLoan",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string[], string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidatePosition",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(
    functionFragment: "openPosition",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      {
        minDeposit: BigNumberish;
        minPrice: BigNumberish;
        maxPrice: BigNumberish;
        deadline: BigNumberish;
        signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "openPositionWithReferrer",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "positionCosts",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingBalanceOf",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "REVISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calcProfitFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePositionWithReferrer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLendableBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidationCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRateMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReserve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidatePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openPositionWithReferrer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionCosts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingBalanceOf",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ChangedPosition(address,uint256,uint256,uint256,uint256)": EventFragment;
    "Liquidated(address,uint256,uint256,uint256,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedPosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Liquidated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class ShortingPair extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ShortingPairInterface;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    calcProfitFee(
      amount: BigNumberish,
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { profit: BigNumber; fee: BigNumber }>;

    calculateLoan(
      deposit: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    closePosition(
      trader: string,
      amountOutMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    closePositionWithReferrer(
      trader: string,
      amountOutMin: BigNumberish,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAmountOut(
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBorrowLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    getDeposit(trader: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getLendableBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getLiquidationCost(
      currentDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLoan(trader: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getRateMultiplier(
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getReserve(overrides?: CallOverrides): Promise<[string]>;

    getTotalDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalLoan(overrides?: CallOverrides): Promise<[BigNumber]>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      reserve: string,
      paramProvider: string,
      wow: string,
      path: string[],
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidatePosition(
      trader: string,
      liquidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    openPosition(
      trader: string,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      referrer: string,
      guardedPrice: {
        minDeposit: BigNumberish;
        minPrice: BigNumberish;
        maxPrice: BigNumberish;
        deadline: BigNumberish;
        signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openPositionWithReferrer(
      trader: string,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    positionCosts(
      trader: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        currentCost: BigNumber;
        liquidationCost: BigNumber;
      }
    >;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlyingBalanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  calcProfitFee(
    amount: BigNumberish,
    deposit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { profit: BigNumber; fee: BigNumber }>;

  calculateLoan(
    deposit: BigNumberish,
    leverageFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  closePosition(
    trader: string,
    amountOutMin: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  closePositionWithReferrer(
    trader: string,
    amountOutMin: BigNumberish,
    referrer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAmountOut(
    amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBorrowLimit(overrides?: CallOverrides): Promise<BigNumber>;

  getDeposit(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

  getLendableBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getLiquidationCost(
    currentDebt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLoan(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

  getRateMultiplier(
    leverageFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReserve(overrides?: CallOverrides): Promise<string>;

  getTotalDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalLoan(overrides?: CallOverrides): Promise<BigNumber>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    reserve: string,
    paramProvider: string,
    wow: string,
    path: string[],
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidatePosition(
    trader: string,
    liquidator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  openPosition(
    trader: string,
    leverageFactor: BigNumberish,
    amountOutMin: BigNumberish,
    referrer: string,
    guardedPrice: {
      minDeposit: BigNumberish;
      minPrice: BigNumberish;
      maxPrice: BigNumberish;
      deadline: BigNumberish;
      signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openPositionWithReferrer(
    trader: string,
    leverageFactor: BigNumberish,
    amountOutMin: BigNumberish,
    referrer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  permit(
    owner: string,
    spender: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  positionCosts(
    trader: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      currentCost: BigNumber;
      liquidationCost: BigNumber;
    }
  >;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlyingBalanceOf(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    calcProfitFee(
      amount: BigNumberish,
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { profit: BigNumber; fee: BigNumber }>;

    calculateLoan(
      deposit: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closePosition(
      trader: string,
      amountOutMin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closePositionWithReferrer(
      trader: string,
      amountOutMin: BigNumberish,
      referrer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAmountOut(
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBorrowLimit(overrides?: CallOverrides): Promise<BigNumber>;

    getDeposit(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    getLendableBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidationCost(
      currentDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLoan(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRateMultiplier(
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserve(overrides?: CallOverrides): Promise<string>;

    getTotalDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalLoan(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      reserve: string,
      paramProvider: string,
      wow: string,
      path: string[],
      name: string,
      symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidatePosition(
      trader: string,
      liquidator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    openPosition(
      trader: string,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      referrer: string,
      guardedPrice: {
        minDeposit: BigNumberish;
        minPrice: BigNumberish;
        maxPrice: BigNumberish;
        deadline: BigNumberish;
        signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openPositionWithReferrer(
      trader: string,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      referrer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    positionCosts(
      trader: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        currentCost: BigNumber;
        liquidationCost: BigNumber;
      }
    >;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    underlyingBalanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    ChangedPosition(
      trader?: string | null,
      amount?: null,
      loan?: null,
      cost?: null,
      liquidationCost?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        trader: string;
        amount: BigNumber;
        loan: BigNumber;
        cost: BigNumber;
        liquidationCost: BigNumber;
      }
    >;

    Liquidated(
      trader?: string | null,
      amount?: null,
      loanPaid?: null,
      cost?: null,
      liquidationCost?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        trader: string;
        amount: BigNumber;
        loanPaid: BigNumber;
        cost: BigNumber;
        liquidationCost: BigNumber;
      }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    calcProfitFee(
      amount: BigNumberish,
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateLoan(
      deposit: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closePosition(
      trader: string,
      amountOutMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    closePositionWithReferrer(
      trader: string,
      amountOutMin: BigNumberish,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAmountOut(
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBorrowLimit(overrides?: CallOverrides): Promise<BigNumber>;

    getDeposit(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    getLendableBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidationCost(
      currentDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLoan(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRateMultiplier(
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserve(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalLoan(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      reserve: string,
      paramProvider: string,
      wow: string,
      path: string[],
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidatePosition(
      trader: string,
      liquidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    openPosition(
      trader: string,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      referrer: string,
      guardedPrice: {
        minDeposit: BigNumberish;
        minPrice: BigNumberish;
        maxPrice: BigNumberish;
        deadline: BigNumberish;
        signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openPositionWithReferrer(
      trader: string,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    positionCosts(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlyingBalanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcProfitFee(
      amount: BigNumberish,
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateLoan(
      deposit: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closePosition(
      trader: string,
      amountOutMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    closePositionWithReferrer(
      trader: string,
      amountOutMin: BigNumberish,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAmountOut(
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBorrowLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeposit(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLendableBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidationCost(
      currentDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLoan(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRateMultiplier(
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalLoan(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      reserve: string,
      paramProvider: string,
      wow: string,
      path: string[],
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidatePosition(
      trader: string,
      liquidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    openPosition(
      trader: string,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      referrer: string,
      guardedPrice: {
        minDeposit: BigNumberish;
        minPrice: BigNumberish;
        maxPrice: BigNumberish;
        deadline: BigNumberish;
        signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openPositionWithReferrer(
      trader: string,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    positionCosts(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlyingBalanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}