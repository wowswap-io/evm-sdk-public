import { NewPriceGuardFactory__factory } from '../dependencies/protocol';
import { InferContext } from './abstract';
import { CoreRelevant } from './core';
import { PriceFeeds } from './feeds';

export class Guards extends CoreRelevant<
  {
    contracts: Record<typeof Guards.REQUIRED_ADDRESSES[number], string>;
  },
  {
    feeds: PriceFeeds;
  }
> {
  public static REQUIRED_ADDRESSES = ['guardsFactory'] as const;

  get feeds() {
    return this.context.feeds;
  }

  constructor(context: InferContext<Guards>) {
    super(context);
  }

  useFactory() {
    return this.core.useContract(
      NewPriceGuardFactory__factory,
      this.params.contracts.guardsFactory
    );
  }
}
