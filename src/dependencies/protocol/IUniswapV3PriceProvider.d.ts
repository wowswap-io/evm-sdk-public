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

interface IUniswapV3PriceProviderInterface extends ethers.utils.Interface {
  functions: {
    "amountIn(uint256,address[])": FunctionFragment;
    "amountOut(uint256,address[])": FunctionFragment;
    "getSwapFee(address,address)": FunctionFragment;
    "toSwapPath(address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "amountIn",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "amountOut",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapFee",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "toSwapPath",
    values: [string[]]
  ): string;

  decodeFunctionResult(functionFragment: "amountIn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "amountOut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSwapFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toSwapPath", data: BytesLike): Result;

  events: {};
}

export class IUniswapV3PriceProvider extends BaseContract {
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

  interface: IUniswapV3PriceProviderInterface;

  functions: {
    amountIn(
      amountOut: BigNumberish,
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    amountOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getSwapFee(
      from: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    toSwapPath(path: string[], overrides?: CallOverrides): Promise<[string]>;
  };

  amountIn(
    amountOut: BigNumberish,
    path: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  amountOut(
    amountIn: BigNumberish,
    path: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getSwapFee(
    from: string,
    to: string,
    overrides?: CallOverrides
  ): Promise<number>;

  toSwapPath(path: string[], overrides?: CallOverrides): Promise<string>;

  callStatic: {
    amountIn(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    amountOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapFee(
      from: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<number>;

    toSwapPath(path: string[], overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    amountIn(
      amountOut: BigNumberish,
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    amountOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getSwapFee(
      from: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toSwapPath(path: string[], overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    amountIn(
      amountOut: BigNumberish,
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    amountOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getSwapFee(
      from: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toSwapPath(
      path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
