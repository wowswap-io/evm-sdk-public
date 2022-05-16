import { JsonRpcProvider } from '@ethersproject/providers';
import {
  Core,
  Guards,
  Pairs,
  PriceFeeds,
  Reserves,
  Swap,
  Tokens,
  Router,
} from './components';
import { InferParams } from './components/abstract';

export * from './helpers/utils';

import * as governance from './dependencies/governance';
import * as priceFeed from './dependencies/price-feed';
import * as protocol from './dependencies/protocol';

export { governance, priceFeed, protocol };

export class Context {
  readonly tokens: Tokens;
  readonly core: Core;
  readonly feeds: PriceFeeds;
  readonly guards: Guards;
  readonly pairs: Pairs;
  readonly reserves: Reserves;
  readonly swap: Swap;
  readonly router: Router;

  constructor(
    public readonly provider: JsonRpcProvider,
    public readonly params: InferParams<Core> &
      InferParams<Tokens> &
      InferParams<PriceFeeds> &
      InferParams<Guards> &
      InferParams<Pairs> &
      InferParams<Reserves> &
      InferParams<Swap> &
      InferParams<Router>
  ) {
    this.core = new Core(this);
    this.tokens = new Tokens(this);
    this.feeds = new PriceFeeds(this);
    this.guards = new Guards(this);
    this.pairs = new Pairs(this);
    this.reserves = new Reserves(this);
    this.swap = new Swap(this);
    this.router = new Router(this);
  }
}
