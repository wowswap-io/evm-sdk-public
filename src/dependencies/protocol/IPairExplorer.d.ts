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

interface IPairExplorerInterface extends ethers.utils.Interface {
  functions: {
    "calculateBalance(address,address,address,uint256)": FunctionFragment;
    "calculateOpenPosition(address,address,uint256,uint256)": FunctionFragment;
    "calculateOpenProxyPosition(address,address,address,uint256,uint256)": FunctionFragment;
    "calculateOpenProxyShortPosition(address,address,address,uint256,uint256)": FunctionFragment;
    "calculateOpenShortPosition(address,address,uint256,uint256)": FunctionFragment;
    "calculateProxyBalance(address,address,address,address,uint256)": FunctionFragment;
    "calculateProxyShortBalance(address,address,address,address,uint256)": FunctionFragment;
    "calculateShortBalance(address,address,address,uint256)": FunctionFragment;
    "getPosition(address,address,address)": FunctionFragment;
    "getProxyPosition(address,address,address,address)": FunctionFragment;
    "getProxyShortPosition(address,address,address,address)": FunctionFragment;
    "getShortPosition(address,address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateBalance",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateOpenPosition",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateOpenProxyPosition",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateOpenProxyShortPosition",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateOpenShortPosition",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateProxyBalance",
    values: [string, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateProxyShortBalance",
    values: [string, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateShortBalance",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPosition",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProxyPosition",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProxyShortPosition",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getShortPosition",
    values: [string, string, string]
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
    functionFragment: "calculateOpenProxyPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateOpenProxyShortPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateOpenShortPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateProxyBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateProxyShortBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateShortBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProxyPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProxyShortPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShortPosition",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPairExplorer extends BaseContract {
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

  interface: IPairExplorerInterface;

  functions: {
    calculateBalance(
      lendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateOpenPosition(
      lendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateOpenProxyPosition(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateOpenProxyShortPosition(
      lendable: string,
      proxyLendable: string,
      shortable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateOpenShortPosition(
      lendable: string,
      shortable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateProxyBalance(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateProxyShortBalance(
      lendable: string,
      proxyLendable: string,
      shortable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateShortBalance(
      lendable: string,
      shortable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPosition(
      trader: string,
      lendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getProxyPosition(
      trader: string,
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getProxyShortPosition(
      trader: string,
      lendable: string,
      proxyLendable: string,
      shortable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getShortPosition(
      trader: string,
      lendable: string,
      shortable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calculateBalance(
    lendable: string,
    tradable: string,
    trader: string,
    amountIn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateOpenPosition(
    lendable: string,
    tradable: string,
    amount: BigNumberish,
    leverageFactor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateOpenProxyPosition(
    lendable: string,
    proxyLendable: string,
    tradable: string,
    amount: BigNumberish,
    leverageFactor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateOpenProxyShortPosition(
    lendable: string,
    proxyLendable: string,
    shortable: string,
    amount: BigNumberish,
    leverageFactor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateOpenShortPosition(
    lendable: string,
    shortable: string,
    amount: BigNumberish,
    leverageFactor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateProxyBalance(
    lendable: string,
    proxyLendable: string,
    tradable: string,
    trader: string,
    amountIn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateProxyShortBalance(
    lendable: string,
    proxyLendable: string,
    shortable: string,
    trader: string,
    amountIn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateShortBalance(
    lendable: string,
    shortable: string,
    trader: string,
    amountIn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPosition(
    trader: string,
    lendable: string,
    tradable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getProxyPosition(
    trader: string,
    lendable: string,
    proxyLendable: string,
    tradable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getProxyShortPosition(
    trader: string,
    lendable: string,
    proxyLendable: string,
    shortable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getShortPosition(
    trader: string,
    lendable: string,
    shortable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateBalance(
      lendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        amountOut: BigNumber;
        profit: BigNumber;
        debtPayable: BigNumber;
        protocolFee: BigNumber;
      }
    >;

    calculateOpenPosition(
      lendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        }
      ] & {
        maxAmountIn: BigNumber;
        borrowAmount: BigNumber;
        borrowRate: BigNumber;
        liquidationCost: BigNumber;
        terminationConditions: [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        };
      }
    >;

    calculateOpenProxyPosition(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        }
      ] & {
        maxAmountIn: BigNumber;
        borrowAmount: BigNumber;
        borrowRate: BigNumber;
        liquidationCost: BigNumber;
        terminationConditions: [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        };
      }
    >;

    calculateOpenProxyShortPosition(
      lendable: string,
      proxyLendable: string,
      shortable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        }
      ] & {
        maxAmountIn: BigNumber;
        borrowAmount: BigNumber;
        borrowRate: BigNumber;
        liquidationCost: BigNumber;
        terminationConditions: [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        };
      }
    >;

    calculateOpenShortPosition(
      lendable: string,
      shortable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        }
      ] & {
        maxAmountIn: BigNumber;
        borrowAmount: BigNumber;
        borrowRate: BigNumber;
        liquidationCost: BigNumber;
        terminationConditions: [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        };
      }
    >;

    calculateProxyBalance(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        amountOut: BigNumber;
        profit: BigNumber;
        debtPayable: BigNumber;
        protocolFee: BigNumber;
      }
    >;

    calculateProxyShortBalance(
      lendable: string,
      proxyLendable: string,
      shortable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        amountOut: BigNumber;
        profit: BigNumber;
        debtPayable: BigNumber;
        protocolFee: BigNumber;
      }
    >;

    calculateShortBalance(
      lendable: string,
      shortable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        amountOut: BigNumber;
        profit: BigNumber;
        debtPayable: BigNumber;
        protocolFee: BigNumber;
      }
    >;

    getPosition(
      trader: string,
      lendable: string,
      tradable: string,
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
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        }
      ] & {
        amount: BigNumber;
        value: BigNumber;
        selfValue: BigNumber;
        principalDebt: BigNumber;
        currentDebt: BigNumber;
        rate: BigNumber;
        currentCost: BigNumber;
        liquidationCost: BigNumber;
        terminationConditions: [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        };
      }
    >;

    getProxyPosition(
      trader: string,
      lendable: string,
      proxyLendable: string,
      tradable: string,
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
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        }
      ] & {
        amount: BigNumber;
        value: BigNumber;
        selfValue: BigNumber;
        principalDebt: BigNumber;
        currentDebt: BigNumber;
        rate: BigNumber;
        currentCost: BigNumber;
        liquidationCost: BigNumber;
        terminationConditions: [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        };
      }
    >;

    getProxyShortPosition(
      trader: string,
      lendable: string,
      proxyLendable: string,
      shortable: string,
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
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        }
      ] & {
        amount: BigNumber;
        value: BigNumber;
        selfValue: BigNumber;
        principalDebt: BigNumber;
        currentDebt: BigNumber;
        rate: BigNumber;
        currentCost: BigNumber;
        liquidationCost: BigNumber;
        terminationConditions: [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        };
      }
    >;

    getShortPosition(
      trader: string,
      lendable: string,
      shortable: string,
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
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        }
      ] & {
        amount: BigNumber;
        value: BigNumber;
        selfValue: BigNumber;
        principalDebt: BigNumber;
        currentDebt: BigNumber;
        rate: BigNumber;
        currentCost: BigNumber;
        liquidationCost: BigNumber;
        terminationConditions: [BigNumber, BigNumber, BigNumber, BigNumber] & {
          expirationDate: BigNumber;
          stopLossPercentage: BigNumber;
          takeProfitPercentage: BigNumber;
          terminationReward: BigNumber;
        };
      }
    >;
  };

  filters: {};

  estimateGas: {
    calculateBalance(
      lendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateOpenPosition(
      lendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateOpenProxyPosition(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateOpenProxyShortPosition(
      lendable: string,
      proxyLendable: string,
      shortable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateOpenShortPosition(
      lendable: string,
      shortable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateProxyBalance(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateProxyShortBalance(
      lendable: string,
      proxyLendable: string,
      shortable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateShortBalance(
      lendable: string,
      shortable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPosition(
      trader: string,
      lendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getProxyPosition(
      trader: string,
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getProxyShortPosition(
      trader: string,
      lendable: string,
      proxyLendable: string,
      shortable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getShortPosition(
      trader: string,
      lendable: string,
      shortable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateBalance(
      lendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateOpenPosition(
      lendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateOpenProxyPosition(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateOpenProxyShortPosition(
      lendable: string,
      proxyLendable: string,
      shortable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateOpenShortPosition(
      lendable: string,
      shortable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateProxyBalance(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateProxyShortBalance(
      lendable: string,
      proxyLendable: string,
      shortable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateShortBalance(
      lendable: string,
      shortable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPosition(
      trader: string,
      lendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getProxyPosition(
      trader: string,
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getProxyShortPosition(
      trader: string,
      lendable: string,
      proxyLendable: string,
      shortable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getShortPosition(
      trader: string,
      lendable: string,
      shortable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
