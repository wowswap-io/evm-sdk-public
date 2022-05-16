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

interface ParamProviderFactoryInterface extends ethers.utils.Interface {
  functions: {
    "REVISION()": FunctionFragment;
    "createPairParamProvider(address[])": FunctionFragment;
    "createReserveParamProvider(address)": FunctionFragment;
    "createShortingPairParamProvider(address[])": FunctionFragment;
    "getPairParamProvider(address,address)": FunctionFragment;
    "getReserveParamProvider(address)": FunctionFragment;
    "getRoutablePairParamProvider(address,address,address)": FunctionFragment;
    "getRoutableShortingPairParamProvider(address,address,address)": FunctionFragment;
    "getShortingPairParamProvider(address,address)": FunctionFragment;
    "initialize(address,address,address[],tuple[])": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setParamGovernance(address)": FunctionFragment;
    "setSwapRouter(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgrade()": FunctionFragment;
    "upgradePairParamProvider(address[])": FunctionFragment;
    "upgradeReserveParamProvider(address)": FunctionFragment;
    "upgradeShortingPairParamProvider(address[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createPairParamProvider",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createReserveParamProvider",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "createShortingPairParamProvider",
    values: [string[]]
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
    functionFragment: "getRoutablePairParamProvider",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoutableShortingPairParamProvider",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getShortingPairParamProvider",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      string[],
      { maxLiquidationReward: BigNumberish; minPositionDeposit: BigNumberish }[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setParamGovernance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapRouter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "upgradePairParamProvider",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeReserveParamProvider",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeShortingPairParamProvider",
    values: [string[]]
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
    functionFragment: "createShortingPairParamProvider",
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
  decodeFunctionResult(
    functionFragment: "getRoutablePairParamProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoutableShortingPairParamProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShortingPairParamProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setParamGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSwapRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradePairParamProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeReserveParamProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeShortingPairParamProvider",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class ParamProviderFactory extends BaseContract {
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

  interface: ParamProviderFactoryInterface;

  functions: {
    REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    createPairParamProvider(
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createReserveParamProvider(
      lendable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createShortingPairParamProvider(
      path: string[],
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

    getRoutablePairParamProvider(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoutableShortingPairParamProvider(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getShortingPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      reserveFactory: string,
      pairFactory: string,
      lendables: string[],
      lendableParameters: {
        maxLiquidationReward: BigNumberish;
        minPositionDeposit: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setParamGovernance(
      paramGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSwapRouter(
      swapRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradePairParamProvider(
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeReserveParamProvider(
      lendable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeShortingPairParamProvider(
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  createPairParamProvider(
    path: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createReserveParamProvider(
    lendable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createShortingPairParamProvider(
    path: string[],
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

  getRoutablePairParamProvider(
    lendable: string,
    proxyLendable: string,
    tradable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoutableShortingPairParamProvider(
    lendable: string,
    proxyLendable: string,
    tradable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getShortingPairParamProvider(
    lendable: string,
    tradable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    reserveFactory: string,
    pairFactory: string,
    lendables: string[],
    lendableParameters: {
      maxLiquidationReward: BigNumberish;
      minPositionDeposit: BigNumberish;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setParamGovernance(
    paramGovernance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSwapRouter(
    swapRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgrade(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradePairParamProvider(
    path: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeReserveParamProvider(
    lendable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeShortingPairParamProvider(
    path: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    createPairParamProvider(
      path: string[],
      overrides?: CallOverrides
    ): Promise<string>;

    createReserveParamProvider(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createShortingPairParamProvider(
      path: string[],
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

    getRoutablePairParamProvider(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoutableShortingPairParamProvider(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getShortingPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      reserveFactory: string,
      pairFactory: string,
      lendables: string[],
      lendableParameters: {
        maxLiquidationReward: BigNumberish;
        minPositionDeposit: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setParamGovernance(
      paramGovernance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSwapRouter(swapRouter: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgrade(overrides?: CallOverrides): Promise<void>;

    upgradePairParamProvider(
      path: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeReserveParamProvider(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeShortingPairParamProvider(
      path: string[],
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
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createReserveParamProvider(
      lendable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createShortingPairParamProvider(
      path: string[],
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

    getRoutablePairParamProvider(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoutableShortingPairParamProvider(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getShortingPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      reserveFactory: string,
      pairFactory: string,
      lendables: string[],
      lendableParameters: {
        maxLiquidationReward: BigNumberish;
        minPositionDeposit: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setParamGovernance(
      paramGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSwapRouter(
      swapRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradePairParamProvider(
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeReserveParamProvider(
      lendable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeShortingPairParamProvider(
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createPairParamProvider(
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createReserveParamProvider(
      lendable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createShortingPairParamProvider(
      path: string[],
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

    getRoutablePairParamProvider(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoutableShortingPairParamProvider(
      lendable: string,
      proxyLendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getShortingPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      reserveFactory: string,
      pairFactory: string,
      lendables: string[],
      lendableParameters: {
        maxLiquidationReward: BigNumberish;
        minPositionDeposit: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setParamGovernance(
      paramGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSwapRouter(
      swapRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradePairParamProvider(
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeReserveParamProvider(
      lendable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeShortingPairParamProvider(
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}