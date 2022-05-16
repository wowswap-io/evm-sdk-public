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

interface IPairV1Interface extends ethers.utils.Interface {
  functions: {
    "calculateBalance(address,uint256)": FunctionFragment;
    "calculateOpenPosition(uint256,uint256)": FunctionFragment;
    "closePosition(address,uint256)": FunctionFragment;
    "getPosition(address)": FunctionFragment;
    "liquidatePosition(address,address)": FunctionFragment;
    "openPosition(address,uint256,uint256)": FunctionFragment;
    "positionCosts(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateBalance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateOpenPosition",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getPosition", values: [string]): string;
  encodeFunctionData(
    functionFragment: "liquidatePosition",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "openPosition",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "positionCosts",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateOpenPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidatePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "positionCosts",
    data: BytesLike
  ): Result;

  events: {
    "ChangedPosition(address,uint256,uint256,uint256,uint256)": EventFragment;
    "Liquidated(address,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedPosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Liquidated"): EventFragment;
}

export class IPairV1 extends BaseContract {
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

  interface: IPairV1Interface;

  functions: {
    calculateBalance(
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        profit: BigNumber;
        debtPayable: BigNumber;
        protocolFee: BigNumber;
      }
    >;

    calculateOpenPosition(
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        maxAmountIn: BigNumber;
        borrowAmount: BigNumber;
        borrowRate: BigNumber;
        liquidationCost: BigNumber;
      }
    >;

    closePosition(
      trader: string,
      amountOutMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPosition(
      trader: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          amount: BigNumber;
          value: BigNumber;
          selfValue: BigNumber;
          principalDebt: BigNumber;
          currentDebt: BigNumber;
          rate: BigNumber;
          currentCost: BigNumber;
          liquidationCost: BigNumber;
        }
      ] & {
        position: [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          amount: BigNumber;
          value: BigNumber;
          selfValue: BigNumber;
          principalDebt: BigNumber;
          currentDebt: BigNumber;
          rate: BigNumber;
          currentCost: BigNumber;
          liquidationCost: BigNumber;
        };
      }
    >;

    liquidatePosition(
      trader: string,
      liquidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openPosition(
      trader: string,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
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
  };

  calculateBalance(
    trader: string,
    amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      profit: BigNumber;
      debtPayable: BigNumber;
      protocolFee: BigNumber;
    }
  >;

  calculateOpenPosition(
    amount: BigNumberish,
    leverageFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      maxAmountIn: BigNumber;
      borrowAmount: BigNumber;
      borrowRate: BigNumber;
      liquidationCost: BigNumber;
    }
  >;

  closePosition(
    trader: string,
    amountOutMin: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPosition(
    trader: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      amount: BigNumber;
      value: BigNumber;
      selfValue: BigNumber;
      principalDebt: BigNumber;
      currentDebt: BigNumber;
      rate: BigNumber;
      currentCost: BigNumber;
      liquidationCost: BigNumber;
    }
  >;

  liquidatePosition(
    trader: string,
    liquidator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openPosition(
    trader: string,
    leverageFactor: BigNumberish,
    amountOutMin: BigNumberish,
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

  callStatic: {
    calculateBalance(
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        profit: BigNumber;
        debtPayable: BigNumber;
        protocolFee: BigNumber;
      }
    >;

    calculateOpenPosition(
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        maxAmountIn: BigNumber;
        borrowAmount: BigNumber;
        borrowRate: BigNumber;
        liquidationCost: BigNumber;
      }
    >;

    closePosition(
      trader: string,
      amountOutMin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPosition(
      trader: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        amount: BigNumber;
        value: BigNumber;
        selfValue: BigNumber;
        principalDebt: BigNumber;
        currentDebt: BigNumber;
        rate: BigNumber;
        currentCost: BigNumber;
        liquidationCost: BigNumber;
      }
    >;

    liquidatePosition(
      trader: string,
      liquidator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    openPosition(
      trader: string,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    positionCosts(
      trader: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        currentCost: BigNumber;
        liquidationCost: BigNumber;
      }
    >;
  };

  filters: {
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
  };

  estimateGas: {
    calculateBalance(
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateOpenPosition(
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closePosition(
      trader: string,
      amountOutMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPosition(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    liquidatePosition(
      trader: string,
      liquidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openPosition(
      trader: string,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    positionCosts(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateBalance(
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateOpenPosition(
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closePosition(
      trader: string,
      amountOutMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPosition(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidatePosition(
      trader: string,
      liquidator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openPosition(
      trader: string,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    positionCosts(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}