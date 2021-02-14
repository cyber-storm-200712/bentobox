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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface OracleMockInterface extends ethers.utils.Interface {
  functions: {
    "get(bytes)": FunctionFragment;
    "getDataParameter()": FunctionFragment;
    "name(bytes)": FunctionFragment;
    "peek(bytes)": FunctionFragment;
    "rate()": FunctionFragment;
    "set(uint256)": FunctionFragment;
    "setSuccess(bool)": FunctionFragment;
    "success()": FunctionFragment;
    "symbol(bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "get", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getDataParameter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "peek", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(functionFragment: "set", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "setSuccess", values: [boolean]): string;
  encodeFunctionData(functionFragment: "success", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDataParameter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peek", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSuccess", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "success", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;

  events: {};
}

export class OracleMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: OracleMockInterface;

  functions: {
    get(arg0: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

    "get(bytes)"(
      arg0: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getDataParameter(overrides?: CallOverrides): Promise<[string]>;

    "getDataParameter()"(overrides?: CallOverrides): Promise<[string]>;

    name(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "name(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    peek(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    "peek(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    "rate()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    set(
      rate_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "set(uint256)"(
      rate_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setSuccess(
      val: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setSuccess(bool)"(
      val: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    success(overrides?: CallOverrides): Promise<[boolean]>;

    "success()"(overrides?: CallOverrides): Promise<[boolean]>;

    symbol(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "symbol(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  get(arg0: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

  "get(bytes)"(
    arg0: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getDataParameter(overrides?: CallOverrides): Promise<string>;

  "getDataParameter()"(overrides?: CallOverrides): Promise<string>;

  name(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "name(bytes)"(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  peek(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  "peek(bytes)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  rate(overrides?: CallOverrides): Promise<BigNumber>;

  "rate()"(overrides?: CallOverrides): Promise<BigNumber>;

  set(rate_: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "set(uint256)"(
    rate_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setSuccess(val: boolean, overrides?: Overrides): Promise<ContractTransaction>;

  "setSuccess(bool)"(
    val: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  success(overrides?: CallOverrides): Promise<boolean>;

  "success()"(overrides?: CallOverrides): Promise<boolean>;

  symbol(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "symbol(bytes)"(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    get(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    "get(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    getDataParameter(overrides?: CallOverrides): Promise<string>;

    "getDataParameter()"(overrides?: CallOverrides): Promise<string>;

    name(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "name(bytes)"(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    peek(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    "peek(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    "rate()"(overrides?: CallOverrides): Promise<BigNumber>;

    set(rate_: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "set(uint256)"(
      rate_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSuccess(val: boolean, overrides?: CallOverrides): Promise<void>;

    "setSuccess(bool)"(val: boolean, overrides?: CallOverrides): Promise<void>;

    success(overrides?: CallOverrides): Promise<boolean>;

    "success()"(overrides?: CallOverrides): Promise<boolean>;

    symbol(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "symbol(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    get(arg0: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "get(bytes)"(arg0: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    getDataParameter(overrides?: CallOverrides): Promise<BigNumber>;

    "getDataParameter()"(overrides?: CallOverrides): Promise<BigNumber>;

    name(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "name(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    peek(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "peek(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    "rate()"(overrides?: CallOverrides): Promise<BigNumber>;

    set(rate_: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "set(uint256)"(
      rate_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setSuccess(val: boolean, overrides?: Overrides): Promise<BigNumber>;

    "setSuccess(bool)"(val: boolean, overrides?: Overrides): Promise<BigNumber>;

    success(overrides?: CallOverrides): Promise<BigNumber>;

    "success()"(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "symbol(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    get(arg0: BytesLike, overrides?: Overrides): Promise<PopulatedTransaction>;

    "get(bytes)"(
      arg0: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getDataParameter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getDataParameter()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "name(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    peek(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "peek(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    set(
      rate_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "set(uint256)"(
      rate_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setSuccess(
      val: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setSuccess(bool)"(
      val: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    success(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "success()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "symbol(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}