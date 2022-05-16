import { AddressZero } from '@ethersproject/constants';
import {
  Pair,
  PairFactory__factory,
  Pair__factory,
  ShortingPair,
  ShortingPair__factory
} from '../dependencies/protocol';
import { IGNORED_TRADABLES } from '../helpers/constants';
import { byteToAddress, mapAll } from '../helpers/utils';
import { BlockTag } from '../types';
import { InferContext } from './abstract';
import { CoreRelevant } from './core';
import { Reserves } from './reserves';

export class Pairs extends CoreRelevant<
  {
    contracts: Record<typeof Pairs.REQUIRED_ADDRESSES[number], string>;
  },
  {
    reserves: Reserves;
  }
> {
  public static REQUIRED_ADDRESSES = ['pairFactory', 'treasurer'] as const;

  constructor(context: InferContext<Pairs>) {
    super(context);
  }

  get reserves() {
    return this.context.reserves;
  }

  usePairFactory() {
    return this.core.useContract(
      PairFactory__factory,
      this.params.contracts.pairFactory
    );
  }

  private _useAllCached(
    _: number,
    selector: 'getAllTradables' | 'getAllShortables' | 'getAllProxyLendables'
  ) {
    return this.core
      .useCall(this.usePairFactory(), selector)
      .then(mapAll(byteToAddress));
  }

  private _useLongPairCached(
    lendable: string,
    tradable: string,
    proxy?: string
  ): Promise<string> {
    const factory = this.usePairFactory();
    return proxy
      ? this.core.useCall(factory, 'getRoutablePair', lendable, proxy, tradable)
      : this.core.useCall(factory, 'getPair', lendable, tradable);
  }

  private _useShortPairCached(
    lendable: string,
    shortable: string,
    proxy?: string
  ): Promise<string> {
    const factory = this.usePairFactory();
    return proxy
      ? this.core.useCall(factory, 'getRoutableShortingPair', lendable, proxy, shortable)
      : this.core.useCall(factory, 'getShortingPair', lendable, shortable);
  }

  async useAllTradables(blockTag?: BlockTag) {
    // TODO: More clever update cache
    const block = typeof blockTag === 'number' ? blockTag : Math.random();
    const [tradables, { chainId }] = await Promise.all([
      this._useAllCached(block, 'getAllTradables'),
      this.core.useNetwork()
    ])
    return tradables.filter((item) => !this._getIgnoredTradables(chainId).includes(item))
  }

  _getIgnoredTradables(chainId: number) {
    return IGNORED_TRADABLES[chainId] || []
  }

  useAllShotables(blockTag?: BlockTag) {
    // TODO: More clever update cache
    const block = typeof blockTag === 'number' ? blockTag : Math.random();
    return this._useAllCached(block, 'getAllShortables');
  }
  useAllProxies(blockTag?: BlockTag) {
    // TODO: More clever update cache
    const block = typeof blockTag === 'number' ? blockTag : Math.random();
    return this._useAllCached(block, 'getAllProxyLendables');
  }

  useLongPair(
    lendable: string,
    tradable: string,
    proxy?: string
  ): Promise<Pair | undefined> {
    return this._useLongPairCached(lendable, tradable, proxy).then((address) =>
      address === AddressZero
        ? undefined
        : this.core.useContract(Pair__factory, address)
    );
  }

  useShortPair(
    lendable: string,
    shortable: string,
    proxy?: string
  ): Promise<ShortingPair | undefined> {
    return this._useShortPairCached(
      lendable,
      shortable,
      proxy
    ).then((address) =>
      address === AddressZero
        ? undefined
        : this.core.useContract(ShortingPair__factory, address)
    );
  }
}
