import {
  IERC20Detailed,
  IERC20Detailed__factory
} from '../dependencies/protocol';
import { InferContext } from './abstract';
import { CoreRelevant } from './core';

type TokensAddresses = typeof Tokens.REQUIRED_ADDRESSES[number];

export type TokenDetails = {
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  contract: IERC20Detailed;
};

export class Tokens extends CoreRelevant<{
  contracts: Record<TokensAddresses, string>;
}> {
  public static REQUIRED_ADDRESSES = ['native', 'usd'] as const;
  
  constructor(context: InferContext<Tokens>) {
    super(context);
  }

  useDetails(address: string) {
    const erc20 = this.core.useContract(IERC20Detailed__factory, address);

    return Promise.all([
      this.core.useCall(erc20, 'name'),
      this.core.useCall(erc20, 'symbol').then((symbol) => symbol.toUpperCase()),
      this.core.useCall(erc20, 'decimals'),
    ]).then(
      ([name, symbol, decimals]) =>
        ({
          name,
          symbol,
          decimals,
          address,
          contract: erc20,
        } as TokenDetails)
    );
  }
}
