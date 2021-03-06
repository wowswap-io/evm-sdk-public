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

interface MockParamGovernanceInterface extends ethers.utils.Interface {
  functions: {
    "getAddress(bytes32)": FunctionFragment;
    "getParam(bytes32)": FunctionFragment;
    "setAddress(bytes32,address)": FunctionFragment;
    "setParam(bytes32,uint256)": FunctionFragment;
    "setXWOW(address)": FunctionFragment;
    "xWOW()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getParam", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setParam",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setXWOW", values: [string]): string;
  encodeFunctionData(functionFragment: "xWOW", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getParam", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setParam", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setXWOW", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "xWOW", data: BytesLike): Result;

  events: {};
}

export class MockParamGovernance extends BaseContract {
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

  interface: MockParamGovernanceInterface;

  functions: {
    getAddress(name: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getParam(name: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    setAddress(
      name: BytesLike,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setParam(
      name: BytesLike,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setXWOW(
      xWOW: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    xWOW(overrides?: CallOverrides): Promise<[string]>;
  };

  getAddress(name: BytesLike, overrides?: CallOverrides): Promise<string>;

  getParam(name: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  setAddress(
    name: BytesLike,
    value: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setParam(
    name: BytesLike,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setXWOW(
    xWOW: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  xWOW(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getAddress(name: BytesLike, overrides?: CallOverrides): Promise<string>;

    getParam(name: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    setAddress(
      name: BytesLike,
      value: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setParam(
      name: BytesLike,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setXWOW(xWOW: string, overrides?: CallOverrides): Promise<void>;

    xWOW(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getAddress(name: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getParam(name: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    setAddress(
      name: BytesLike,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setParam(
      name: BytesLike,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setXWOW(
      xWOW: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    xWOW(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAddress(
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getParam(
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAddress(
      name: BytesLike,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setParam(
      name: BytesLike,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setXWOW(
      xWOW: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    xWOW(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
