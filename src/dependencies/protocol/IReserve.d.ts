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
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IReserveInterface extends ethers.utils.Interface {
  functions: {
    "borrow(address,uint256,uint256)": FunctionFragment;
    "calculateBorrow(uint256,uint256)": FunctionFragment;
    "calculateDeposit(uint256)": FunctionFragment;
    "calculateWithdraw(uint256,address)": FunctionFragment;
    "deposit(address)": FunctionFragment;
    "fill()": FunctionFragment;
    "getAvailableLiquidity()": FunctionFragment;
    "getBorrowRate()": FunctionFragment;
    "getConfig()": FunctionFragment;
    "getDebt(address,address)": FunctionFragment;
    "getDebtState(address,address)": FunctionFragment;
    "getLiquidityFeeAccrued()": FunctionFragment;
    "getLiquidityRate()": FunctionFragment;
    "getReserveDebt()": FunctionFragment;
    "getState()": FunctionFragment;
    "getTotalDebt()": FunctionFragment;
    "getTotalLiquidity()": FunctionFragment;
    "getUtilizationRate()": FunctionFragment;
    "isActive()": FunctionFragment;
    "liquidate(address)": FunctionFragment;
    "liquidityOf(address)": FunctionFragment;
    "repay(address,address)": FunctionFragment;
    "shareOf(address)": FunctionFragment;
    "sweepFee()": FunctionFragment;
    "transferDebt(address,address,uint256)": FunctionFragment;
    "withdraw(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "borrow",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateBorrow",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateDeposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateWithdraw",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values: [string]): string;
  encodeFunctionData(functionFragment: "fill", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAvailableLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBorrowRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getConfig", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getDebt",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getDebtState",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidityFeeAccrued",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidityRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveDebt",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getState", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getTotalDebt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUtilizationRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isActive", values?: undefined): string;
  encodeFunctionData(functionFragment: "liquidate", values: [string]): string;
  encodeFunctionData(functionFragment: "liquidityOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "repay",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "shareOf", values: [string]): string;
  encodeFunctionData(functionFragment: "sweepFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferDebt",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAvailableLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDebtState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidityFeeAccrued",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidityRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getState", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUtilizationRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isActive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidityOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shareOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sweepFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Borrow(address,address,uint256)": EventFragment;
    "Deposit(address,address,uint256)": EventFragment;
    "Fill(address,uint256)": EventFragment;
    "Liquidate(address,address)": EventFragment;
    "Repay(address,address,uint256)": EventFragment;
    "Withdraw(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Fill"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Liquidate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type BorrowEvent = TypedEvent<
  [string, string, BigNumber] & {
    reserve: string;
    trader: string;
    amount: BigNumber;
  }
>;

export type DepositEvent = TypedEvent<
  [string, string, BigNumber] & {
    reserve: string;
    investor: string;
    amount: BigNumber;
  }
>;

export type FillEvent = TypedEvent<
  [string, BigNumber] & { reserve: string; amount: BigNumber }
>;

export type LiquidateEvent = TypedEvent<
  [string, string] & { reserve: string; trader: string }
>;

export type RepayEvent = TypedEvent<
  [string, string, BigNumber] & {
    reserve: string;
    trader: string;
    amount: BigNumber;
  }
>;

export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber] & {
    reserve: string;
    investor: string;
    amount: BigNumber;
  }
>;

export class IReserve extends BaseContract {
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

  interface: IReserveInterface;

  functions: {
    borrow(
      trader: string,
      amount: BigNumberish,
      rateMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateBorrow(
      amount: BigNumberish,
      rateMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { borrowRate: BigNumber }>;

    calculateDeposit(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateWithdraw(
      amount: BigNumberish,
      investor: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deposit(
      investor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fill(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAvailableLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBorrowRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    getConfig(
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
          baseBorrowRate: BigNumber;
          optimalSlope: BigNumber;
          excessSlope: BigNumber;
          optimalUtilization: BigNumber;
          treasureFactor: BigNumber;
        }
      ]
    >;

    getDebt(
      pair: string,
      trader: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { debt: BigNumber }>;

    getDebtState(
      pair: string,
      trader: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        principal: BigNumber;
        current: BigNumber;
        rate: BigNumber;
        lastUpdate: BigNumber;
      }
    >;

    getLiquidityFeeAccrued(overrides?: CallOverrides): Promise<[BigNumber]>;

    getLiquidityRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    getReserveDebt(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        principalDebt: BigNumber;
        currentDebt: BigNumber;
        averageRate: BigNumber;
        lastUpdate: BigNumber;
      }
    >;

    getState(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        lastUpdate: BigNumber;
        liquidity: BigNumber;
        liquidityRate: BigNumber;
        borrowRate: BigNumber;
        treasureAccrued: BigNumber;
        availableUnderlying: BigNumber;
      }
    >;

    getTotalDebt(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUtilizationRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    isActive(overrides?: CallOverrides): Promise<[boolean]>;

    liquidate(
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidityOf(
      inverstor: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    repay(
      pair: string,
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shareOf(inverstor: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    sweepFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferDebt(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  borrow(
    trader: string,
    amount: BigNumberish,
    rateMultiplier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateBorrow(
    amount: BigNumberish,
    rateMultiplier: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateDeposit(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateWithdraw(
    amount: BigNumberish,
    investor: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deposit(
    investor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fill(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAvailableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  getBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

  getConfig(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      baseBorrowRate: BigNumber;
      optimalSlope: BigNumber;
      excessSlope: BigNumber;
      optimalUtilization: BigNumber;
      treasureFactor: BigNumber;
    }
  >;

  getDebt(
    pair: string,
    trader: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDebtState(
    pair: string,
    trader: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      principal: BigNumber;
      current: BigNumber;
      rate: BigNumber;
      lastUpdate: BigNumber;
    }
  >;

  getLiquidityFeeAccrued(overrides?: CallOverrides): Promise<BigNumber>;

  getLiquidityRate(overrides?: CallOverrides): Promise<BigNumber>;

  getReserveDebt(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      liquidity: BigNumber;
      principalDebt: BigNumber;
      currentDebt: BigNumber;
      averageRate: BigNumber;
      lastUpdate: BigNumber;
    }
  >;

  getState(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      lastUpdate: BigNumber;
      liquidity: BigNumber;
      liquidityRate: BigNumber;
      borrowRate: BigNumber;
      treasureAccrued: BigNumber;
      availableUnderlying: BigNumber;
    }
  >;

  getTotalDebt(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  getUtilizationRate(overrides?: CallOverrides): Promise<BigNumber>;

  isActive(overrides?: CallOverrides): Promise<boolean>;

  liquidate(
    trader: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidityOf(inverstor: string, overrides?: CallOverrides): Promise<BigNumber>;

  repay(
    pair: string,
    trader: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shareOf(inverstor: string, overrides?: CallOverrides): Promise<BigNumber>;

  sweepFee(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferDebt(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    from: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    borrow(
      trader: string,
      amount: BigNumberish,
      rateMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    calculateBorrow(
      amount: BigNumberish,
      rateMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateDeposit(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateWithdraw(
      amount: BigNumberish,
      investor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(investor: string, overrides?: CallOverrides): Promise<void>;

    fill(overrides?: CallOverrides): Promise<void>;

    getAvailableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    getBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

    getConfig(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        baseBorrowRate: BigNumber;
        optimalSlope: BigNumber;
        excessSlope: BigNumber;
        optimalUtilization: BigNumber;
        treasureFactor: BigNumber;
      }
    >;

    getDebt(
      pair: string,
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDebtState(
      pair: string,
      trader: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        principal: BigNumber;
        current: BigNumber;
        rate: BigNumber;
        lastUpdate: BigNumber;
      }
    >;

    getLiquidityFeeAccrued(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidityRate(overrides?: CallOverrides): Promise<BigNumber>;

    getReserveDebt(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        principalDebt: BigNumber;
        currentDebt: BigNumber;
        averageRate: BigNumber;
        lastUpdate: BigNumber;
      }
    >;

    getState(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        lastUpdate: BigNumber;
        liquidity: BigNumber;
        liquidityRate: BigNumber;
        borrowRate: BigNumber;
        treasureAccrued: BigNumber;
        availableUnderlying: BigNumber;
      }
    >;

    getTotalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    getUtilizationRate(overrides?: CallOverrides): Promise<BigNumber>;

    isActive(overrides?: CallOverrides): Promise<boolean>;

    liquidate(trader: string, overrides?: CallOverrides): Promise<void>;

    liquidityOf(
      inverstor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    repay(
      pair: string,
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    shareOf(inverstor: string, overrides?: CallOverrides): Promise<BigNumber>;

    sweepFee(overrides?: CallOverrides): Promise<void>;

    transferDebt(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdraw(
      from: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Borrow(address,address,uint256)"(
      reserve?: string | null,
      trader?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { reserve: string; trader: string; amount: BigNumber }
    >;

    Borrow(
      reserve?: string | null,
      trader?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { reserve: string; trader: string; amount: BigNumber }
    >;

    "Deposit(address,address,uint256)"(
      reserve?: string | null,
      investor?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { reserve: string; investor: string; amount: BigNumber }
    >;

    Deposit(
      reserve?: string | null,
      investor?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { reserve: string; investor: string; amount: BigNumber }
    >;

    "Fill(address,uint256)"(
      reserve?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { reserve: string; amount: BigNumber }
    >;

    Fill(
      reserve?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { reserve: string; amount: BigNumber }
    >;

    "Liquidate(address,address)"(
      reserve?: string | null,
      trader?: string | null
    ): TypedEventFilter<[string, string], { reserve: string; trader: string }>;

    Liquidate(
      reserve?: string | null,
      trader?: string | null
    ): TypedEventFilter<[string, string], { reserve: string; trader: string }>;

    "Repay(address,address,uint256)"(
      reserve?: string | null,
      trader?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { reserve: string; trader: string; amount: BigNumber }
    >;

    Repay(
      reserve?: string | null,
      trader?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { reserve: string; trader: string; amount: BigNumber }
    >;

    "Withdraw(address,address,uint256)"(
      reserve?: string | null,
      investor?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { reserve: string; investor: string; amount: BigNumber }
    >;

    Withdraw(
      reserve?: string | null,
      investor?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { reserve: string; investor: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    borrow(
      trader: string,
      amount: BigNumberish,
      rateMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateBorrow(
      amount: BigNumberish,
      rateMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateDeposit(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateWithdraw(
      amount: BigNumberish,
      investor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      investor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fill(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAvailableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    getBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

    getConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getDebt(
      pair: string,
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDebtState(
      pair: string,
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidityFeeAccrued(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidityRate(overrides?: CallOverrides): Promise<BigNumber>;

    getReserveDebt(overrides?: CallOverrides): Promise<BigNumber>;

    getState(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    getUtilizationRate(overrides?: CallOverrides): Promise<BigNumber>;

    isActive(overrides?: CallOverrides): Promise<BigNumber>;

    liquidate(
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidityOf(
      inverstor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    repay(
      pair: string,
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shareOf(inverstor: string, overrides?: CallOverrides): Promise<BigNumber>;

    sweepFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferDebt(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    borrow(
      trader: string,
      amount: BigNumberish,
      rateMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateBorrow(
      amount: BigNumberish,
      rateMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateDeposit(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateWithdraw(
      amount: BigNumberish,
      investor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      investor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fill(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAvailableLiquidity(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBorrowRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDebt(
      pair: string,
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDebtState(
      pair: string,
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidityFeeAccrued(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidityRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReserveDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUtilizationRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidate(
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidityOf(
      inverstor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    repay(
      pair: string,
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shareOf(
      inverstor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sweepFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferDebt(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
