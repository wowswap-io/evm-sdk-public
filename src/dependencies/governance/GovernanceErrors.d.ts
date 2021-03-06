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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface GovernanceErrorsInterface extends ethers.utils.Interface {
  functions: {
    "G_INCONSISTENT_FEE_DISTRIBUTION_DATA()": FunctionFragment;
    "G_INSUFFICIENT_XWOW_BALANCE()": FunctionFragment;
    "G_INVALID_ADDRESS_PARAMETER()": FunctionFragment;
    "G_INVALID_PARAMETER()": FunctionFragment;
    "G_ONLY_XWOW_ALLOWED()": FunctionFragment;
    "G_VALUE_OUT_OF_BOUNDS()": FunctionFragment;
    "G_VOTING_IS_NOT_APPROVED()": FunctionFragment;
    "INCONSISTENT_DATA()": FunctionFragment;
    "INCONSISTENT_INITIALIZATION_DATA()": FunctionFragment;
    "MATH_ADDITION_OVERFLOW()": FunctionFragment;
    "MATH_DIVISION_BY_ZERO()": FunctionFragment;
    "MATH_MULTIPLICATION_OVERFLOW()": FunctionFragment;
    "T_FEE_DISTRIBUTION_EXCEEDS_LIMITS()": FunctionFragment;
    "T_ONLY_XWOW_ALLOWED()": FunctionFragment;
    "T_UNABLE_TO_DISTRIBUTE_UNREGISTERED_TOKEN()": FunctionFragment;
    "T_UNABLE_TO_DISTRIBUTE_WOW()": FunctionFragment;
    "T_UNEXPECTED_TOKEN_BALANCE()": FunctionFragment;
    "T_UNKNOWN_TOKEN()": FunctionFragment;
    "X_ACTIVE_STAKE_PERIOD()": FunctionFragment;
    "X_INVALID_STAKING_PERIOD()": FunctionFragment;
    "X_INVALID_XWOW_AMOUNT()": FunctionFragment;
    "X_NOT_STAKEABLE_TOKEN()": FunctionFragment;
    "X_NOT_TRANSFERABLE()": FunctionFragment;
    "X_STAKING_PERIOD_DECREASE()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "G_INCONSISTENT_FEE_DISTRIBUTION_DATA",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "G_INSUFFICIENT_XWOW_BALANCE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "G_INVALID_ADDRESS_PARAMETER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "G_INVALID_PARAMETER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "G_ONLY_XWOW_ALLOWED",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "G_VALUE_OUT_OF_BOUNDS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "G_VOTING_IS_NOT_APPROVED",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INCONSISTENT_DATA",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INCONSISTENT_INITIALIZATION_DATA",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MATH_ADDITION_OVERFLOW",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MATH_DIVISION_BY_ZERO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MATH_MULTIPLICATION_OVERFLOW",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "T_FEE_DISTRIBUTION_EXCEEDS_LIMITS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "T_ONLY_XWOW_ALLOWED",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "T_UNABLE_TO_DISTRIBUTE_UNREGISTERED_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "T_UNABLE_TO_DISTRIBUTE_WOW",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "T_UNEXPECTED_TOKEN_BALANCE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "T_UNKNOWN_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "X_ACTIVE_STAKE_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "X_INVALID_STAKING_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "X_INVALID_XWOW_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "X_NOT_STAKEABLE_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "X_NOT_TRANSFERABLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "X_STAKING_PERIOD_DECREASE",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "G_INCONSISTENT_FEE_DISTRIBUTION_DATA",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "G_INSUFFICIENT_XWOW_BALANCE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "G_INVALID_ADDRESS_PARAMETER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "G_INVALID_PARAMETER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "G_ONLY_XWOW_ALLOWED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "G_VALUE_OUT_OF_BOUNDS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "G_VOTING_IS_NOT_APPROVED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INCONSISTENT_DATA",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INCONSISTENT_INITIALIZATION_DATA",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MATH_ADDITION_OVERFLOW",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MATH_DIVISION_BY_ZERO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MATH_MULTIPLICATION_OVERFLOW",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "T_FEE_DISTRIBUTION_EXCEEDS_LIMITS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "T_ONLY_XWOW_ALLOWED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "T_UNABLE_TO_DISTRIBUTE_UNREGISTERED_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "T_UNABLE_TO_DISTRIBUTE_WOW",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "T_UNEXPECTED_TOKEN_BALANCE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "T_UNKNOWN_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "X_ACTIVE_STAKE_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "X_INVALID_STAKING_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "X_INVALID_XWOW_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "X_NOT_STAKEABLE_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "X_NOT_TRANSFERABLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "X_STAKING_PERIOD_DECREASE",
    data: BytesLike
  ): Result;

  events: {};
}

export class GovernanceErrors extends BaseContract {
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

  interface: GovernanceErrorsInterface;

  functions: {
    G_INCONSISTENT_FEE_DISTRIBUTION_DATA(
      overrides?: CallOverrides
    ): Promise<[string]>;

    G_INSUFFICIENT_XWOW_BALANCE(overrides?: CallOverrides): Promise<[string]>;

    G_INVALID_ADDRESS_PARAMETER(overrides?: CallOverrides): Promise<[string]>;

    G_INVALID_PARAMETER(overrides?: CallOverrides): Promise<[string]>;

    G_ONLY_XWOW_ALLOWED(overrides?: CallOverrides): Promise<[string]>;

    G_VALUE_OUT_OF_BOUNDS(overrides?: CallOverrides): Promise<[string]>;

    G_VOTING_IS_NOT_APPROVED(overrides?: CallOverrides): Promise<[string]>;

    INCONSISTENT_DATA(overrides?: CallOverrides): Promise<[string]>;

    INCONSISTENT_INITIALIZATION_DATA(
      overrides?: CallOverrides
    ): Promise<[string]>;

    MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<[string]>;

    MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<[string]>;

    MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<[string]>;

    T_FEE_DISTRIBUTION_EXCEEDS_LIMITS(
      overrides?: CallOverrides
    ): Promise<[string]>;

    T_ONLY_XWOW_ALLOWED(overrides?: CallOverrides): Promise<[string]>;

    T_UNABLE_TO_DISTRIBUTE_UNREGISTERED_TOKEN(
      overrides?: CallOverrides
    ): Promise<[string]>;

    T_UNABLE_TO_DISTRIBUTE_WOW(overrides?: CallOverrides): Promise<[string]>;

    T_UNEXPECTED_TOKEN_BALANCE(overrides?: CallOverrides): Promise<[string]>;

    T_UNKNOWN_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    X_ACTIVE_STAKE_PERIOD(overrides?: CallOverrides): Promise<[string]>;

    X_INVALID_STAKING_PERIOD(overrides?: CallOverrides): Promise<[string]>;

    X_INVALID_XWOW_AMOUNT(overrides?: CallOverrides): Promise<[string]>;

    X_NOT_STAKEABLE_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    X_NOT_TRANSFERABLE(overrides?: CallOverrides): Promise<[string]>;

    X_STAKING_PERIOD_DECREASE(overrides?: CallOverrides): Promise<[string]>;
  };

  G_INCONSISTENT_FEE_DISTRIBUTION_DATA(
    overrides?: CallOverrides
  ): Promise<string>;

  G_INSUFFICIENT_XWOW_BALANCE(overrides?: CallOverrides): Promise<string>;

  G_INVALID_ADDRESS_PARAMETER(overrides?: CallOverrides): Promise<string>;

  G_INVALID_PARAMETER(overrides?: CallOverrides): Promise<string>;

  G_ONLY_XWOW_ALLOWED(overrides?: CallOverrides): Promise<string>;

  G_VALUE_OUT_OF_BOUNDS(overrides?: CallOverrides): Promise<string>;

  G_VOTING_IS_NOT_APPROVED(overrides?: CallOverrides): Promise<string>;

  INCONSISTENT_DATA(overrides?: CallOverrides): Promise<string>;

  INCONSISTENT_INITIALIZATION_DATA(overrides?: CallOverrides): Promise<string>;

  MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<string>;

  MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<string>;

  MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<string>;

  T_FEE_DISTRIBUTION_EXCEEDS_LIMITS(overrides?: CallOverrides): Promise<string>;

  T_ONLY_XWOW_ALLOWED(overrides?: CallOverrides): Promise<string>;

  T_UNABLE_TO_DISTRIBUTE_UNREGISTERED_TOKEN(
    overrides?: CallOverrides
  ): Promise<string>;

  T_UNABLE_TO_DISTRIBUTE_WOW(overrides?: CallOverrides): Promise<string>;

  T_UNEXPECTED_TOKEN_BALANCE(overrides?: CallOverrides): Promise<string>;

  T_UNKNOWN_TOKEN(overrides?: CallOverrides): Promise<string>;

  X_ACTIVE_STAKE_PERIOD(overrides?: CallOverrides): Promise<string>;

  X_INVALID_STAKING_PERIOD(overrides?: CallOverrides): Promise<string>;

  X_INVALID_XWOW_AMOUNT(overrides?: CallOverrides): Promise<string>;

  X_NOT_STAKEABLE_TOKEN(overrides?: CallOverrides): Promise<string>;

  X_NOT_TRANSFERABLE(overrides?: CallOverrides): Promise<string>;

  X_STAKING_PERIOD_DECREASE(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    G_INCONSISTENT_FEE_DISTRIBUTION_DATA(
      overrides?: CallOverrides
    ): Promise<string>;

    G_INSUFFICIENT_XWOW_BALANCE(overrides?: CallOverrides): Promise<string>;

    G_INVALID_ADDRESS_PARAMETER(overrides?: CallOverrides): Promise<string>;

    G_INVALID_PARAMETER(overrides?: CallOverrides): Promise<string>;

    G_ONLY_XWOW_ALLOWED(overrides?: CallOverrides): Promise<string>;

    G_VALUE_OUT_OF_BOUNDS(overrides?: CallOverrides): Promise<string>;

    G_VOTING_IS_NOT_APPROVED(overrides?: CallOverrides): Promise<string>;

    INCONSISTENT_DATA(overrides?: CallOverrides): Promise<string>;

    INCONSISTENT_INITIALIZATION_DATA(
      overrides?: CallOverrides
    ): Promise<string>;

    MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<string>;

    MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<string>;

    MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<string>;

    T_FEE_DISTRIBUTION_EXCEEDS_LIMITS(
      overrides?: CallOverrides
    ): Promise<string>;

    T_ONLY_XWOW_ALLOWED(overrides?: CallOverrides): Promise<string>;

    T_UNABLE_TO_DISTRIBUTE_UNREGISTERED_TOKEN(
      overrides?: CallOverrides
    ): Promise<string>;

    T_UNABLE_TO_DISTRIBUTE_WOW(overrides?: CallOverrides): Promise<string>;

    T_UNEXPECTED_TOKEN_BALANCE(overrides?: CallOverrides): Promise<string>;

    T_UNKNOWN_TOKEN(overrides?: CallOverrides): Promise<string>;

    X_ACTIVE_STAKE_PERIOD(overrides?: CallOverrides): Promise<string>;

    X_INVALID_STAKING_PERIOD(overrides?: CallOverrides): Promise<string>;

    X_INVALID_XWOW_AMOUNT(overrides?: CallOverrides): Promise<string>;

    X_NOT_STAKEABLE_TOKEN(overrides?: CallOverrides): Promise<string>;

    X_NOT_TRANSFERABLE(overrides?: CallOverrides): Promise<string>;

    X_STAKING_PERIOD_DECREASE(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    G_INCONSISTENT_FEE_DISTRIBUTION_DATA(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    G_INSUFFICIENT_XWOW_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

    G_INVALID_ADDRESS_PARAMETER(overrides?: CallOverrides): Promise<BigNumber>;

    G_INVALID_PARAMETER(overrides?: CallOverrides): Promise<BigNumber>;

    G_ONLY_XWOW_ALLOWED(overrides?: CallOverrides): Promise<BigNumber>;

    G_VALUE_OUT_OF_BOUNDS(overrides?: CallOverrides): Promise<BigNumber>;

    G_VOTING_IS_NOT_APPROVED(overrides?: CallOverrides): Promise<BigNumber>;

    INCONSISTENT_DATA(overrides?: CallOverrides): Promise<BigNumber>;

    INCONSISTENT_INITIALIZATION_DATA(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<BigNumber>;

    MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<BigNumber>;

    MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<BigNumber>;

    T_FEE_DISTRIBUTION_EXCEEDS_LIMITS(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    T_ONLY_XWOW_ALLOWED(overrides?: CallOverrides): Promise<BigNumber>;

    T_UNABLE_TO_DISTRIBUTE_UNREGISTERED_TOKEN(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    T_UNABLE_TO_DISTRIBUTE_WOW(overrides?: CallOverrides): Promise<BigNumber>;

    T_UNEXPECTED_TOKEN_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

    T_UNKNOWN_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    X_ACTIVE_STAKE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    X_INVALID_STAKING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    X_INVALID_XWOW_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    X_NOT_STAKEABLE_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    X_NOT_TRANSFERABLE(overrides?: CallOverrides): Promise<BigNumber>;

    X_STAKING_PERIOD_DECREASE(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    G_INCONSISTENT_FEE_DISTRIBUTION_DATA(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    G_INSUFFICIENT_XWOW_BALANCE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    G_INVALID_ADDRESS_PARAMETER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    G_INVALID_PARAMETER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    G_ONLY_XWOW_ALLOWED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    G_VALUE_OUT_OF_BOUNDS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    G_VOTING_IS_NOT_APPROVED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INCONSISTENT_DATA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INCONSISTENT_INITIALIZATION_DATA(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MATH_ADDITION_OVERFLOW(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MATH_DIVISION_BY_ZERO(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MATH_MULTIPLICATION_OVERFLOW(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    T_FEE_DISTRIBUTION_EXCEEDS_LIMITS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    T_ONLY_XWOW_ALLOWED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    T_UNABLE_TO_DISTRIBUTE_UNREGISTERED_TOKEN(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    T_UNABLE_TO_DISTRIBUTE_WOW(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    T_UNEXPECTED_TOKEN_BALANCE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    T_UNKNOWN_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    X_ACTIVE_STAKE_PERIOD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    X_INVALID_STAKING_PERIOD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    X_INVALID_XWOW_AMOUNT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    X_NOT_STAKEABLE_TOKEN(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    X_NOT_TRANSFERABLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    X_STAKING_PERIOD_DECREASE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
