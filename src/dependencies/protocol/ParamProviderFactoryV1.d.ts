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

interface ParamProviderFactoryV1Interface extends ethers.utils.Interface {
  functions: {
    "REVISION()": FunctionFragment;
    "createPairParamProvider(address,address)": FunctionFragment;
    "createReserveParamProvider(address)": FunctionFragment;
    "getPairParamProvider(address,address)": FunctionFragment;
    "getReserveParamProvider(address)": FunctionFragment;
    "initialize(address,address,tuple,address[],tuple[],tuple[])": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createPairParamProvider",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createReserveParamProvider",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPairParamProvider",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveParamProvider",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      {
        baseBorrowRate: BigNumberish;
        optimalSlope: BigNumberish;
        excessSlope: BigNumberish;
        optimalUtilization: BigNumberish;
        treasureFactor: BigNumberish;
        poolUtilizationAllowance: BigNumberish;
        traderProfitFee: BigNumberish;
        liquidationMargin: BigNumberish;
        liquidationReward: BigNumberish;
        maxLeverageFactor: BigNumberish;
        maxRateMultiplier: BigNumberish;
      },
      string[],
      {
        maxLiquidationReward: BigNumberish;
        minPositionDeposit: BigNumberish;
      }[],
      { leverageFactor: BigNumberish; minWOWBalance: BigNumberish }[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "REVISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createPairParamProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createReserveParamProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPairParamProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveParamProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class ParamProviderFactoryV1 extends BaseContract {
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

  interface: ParamProviderFactoryV1Interface;

  functions: {
    REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    createPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createReserveParamProvider(
      lendable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getReserveParamProvider(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      reserveFactory: string,
      pairFactory: string,
      defaultParameters: {
        baseBorrowRate: BigNumberish;
        optimalSlope: BigNumberish;
        excessSlope: BigNumberish;
        optimalUtilization: BigNumberish;
        treasureFactor: BigNumberish;
        poolUtilizationAllowance: BigNumberish;
        traderProfitFee: BigNumberish;
        liquidationMargin: BigNumberish;
        liquidationReward: BigNumberish;
        maxLeverageFactor: BigNumberish;
        maxRateMultiplier: BigNumberish;
      },
      lendables: string[],
      lendableParameters: {
        maxLiquidationReward: BigNumberish;
        minPositionDeposit: BigNumberish;
      }[],
      minWOWBalances: {
        leverageFactor: BigNumberish;
        minWOWBalance: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  createPairParamProvider(
    lendable: string,
    tradable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createReserveParamProvider(
    lendable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPairParamProvider(
    lendable: string,
    tradable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getReserveParamProvider(
    lendable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    reserveFactory: string,
    pairFactory: string,
    defaultParameters: {
      baseBorrowRate: BigNumberish;
      optimalSlope: BigNumberish;
      excessSlope: BigNumberish;
      optimalUtilization: BigNumberish;
      treasureFactor: BigNumberish;
      poolUtilizationAllowance: BigNumberish;
      traderProfitFee: BigNumberish;
      liquidationMargin: BigNumberish;
      liquidationReward: BigNumberish;
      maxLeverageFactor: BigNumberish;
      maxRateMultiplier: BigNumberish;
    },
    lendables: string[],
    lendableParameters: {
      maxLiquidationReward: BigNumberish;
      minPositionDeposit: BigNumberish;
    }[],
    minWOWBalances: {
      leverageFactor: BigNumberish;
      minWOWBalance: BigNumberish;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    createPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createReserveParamProvider(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getReserveParamProvider(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      reserveFactory: string,
      pairFactory: string,
      defaultParameters: {
        baseBorrowRate: BigNumberish;
        optimalSlope: BigNumberish;
        excessSlope: BigNumberish;
        optimalUtilization: BigNumberish;
        treasureFactor: BigNumberish;
        poolUtilizationAllowance: BigNumberish;
        traderProfitFee: BigNumberish;
        liquidationMargin: BigNumberish;
        liquidationReward: BigNumberish;
        maxLeverageFactor: BigNumberish;
        maxRateMultiplier: BigNumberish;
      },
      lendables: string[],
      lendableParameters: {
        maxLiquidationReward: BigNumberish;
        minPositionDeposit: BigNumberish;
      }[],
      minWOWBalances: {
        leverageFactor: BigNumberish;
        minWOWBalance: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    createPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createReserveParamProvider(
      lendable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveParamProvider(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      reserveFactory: string,
      pairFactory: string,
      defaultParameters: {
        baseBorrowRate: BigNumberish;
        optimalSlope: BigNumberish;
        excessSlope: BigNumberish;
        optimalUtilization: BigNumberish;
        treasureFactor: BigNumberish;
        poolUtilizationAllowance: BigNumberish;
        traderProfitFee: BigNumberish;
        liquidationMargin: BigNumberish;
        liquidationReward: BigNumberish;
        maxLeverageFactor: BigNumberish;
        maxRateMultiplier: BigNumberish;
      },
      lendables: string[],
      lendableParameters: {
        maxLiquidationReward: BigNumberish;
        minPositionDeposit: BigNumberish;
      }[],
      minWOWBalances: {
        leverageFactor: BigNumberish;
        minWOWBalance: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createReserveParamProvider(
      lendable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveParamProvider(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      reserveFactory: string,
      pairFactory: string,
      defaultParameters: {
        baseBorrowRate: BigNumberish;
        optimalSlope: BigNumberish;
        excessSlope: BigNumberish;
        optimalUtilization: BigNumberish;
        treasureFactor: BigNumberish;
        poolUtilizationAllowance: BigNumberish;
        traderProfitFee: BigNumberish;
        liquidationMargin: BigNumberish;
        liquidationReward: BigNumberish;
        maxLeverageFactor: BigNumberish;
        maxRateMultiplier: BigNumberish;
      },
      lendables: string[],
      lendableParameters: {
        maxLiquidationReward: BigNumberish;
        minPositionDeposit: BigNumberish;
      }[],
      minWOWBalances: {
        leverageFactor: BigNumberish;
        minWOWBalance: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
