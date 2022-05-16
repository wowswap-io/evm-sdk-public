import { BigNumberish } from '@ethersproject/bignumber';
import { BytesLike } from '@ethersproject/bytes';
import { ethers, Wallet } from 'ethers';
import { CoreRelevant, Pairs, Reserves } from '.';
import { Pair__factory, Router__factory } from '../dependencies/protocol';

type OpenPositionRequest = {
  amountIn: BigNumberish;
  leverageFactor: BigNumberish;
  amountOutMin: BigNumberish;
  lendable: string;
  proxy: string;
  tradable: string;
  trader: string;
  deadline: BigNumberish;
  referrer: string;
  guardedPrice: {
    minDeposit: BigNumberish;
    minPrice: BigNumberish;
    maxPrice: BigNumberish;
    deadline: BigNumberish;
    signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
  };
  terminationConditions: {
    stopLossPercentage: BigNumberish;
    takeProfitPercentage: BigNumberish;
    deadline: BigNumberish;
    signature: { v: BigNumberish; r: BytesLike; s: BytesLike };
  };
  terminationReward: BigNumberish;
  convertFromNative: boolean;
};

type ClosePositionRequest = {
  short: boolean;
  amountIn: BigNumberish;
  amountOutMin: BigNumberish;
  lendable: string;
  proxy: string;
  tradable: string;
  trader: string;
  deadline: BigNumberish;
  referrer: string;
  permit: { v: BigNumberish; r: BytesLike; s: BytesLike };
  convertToNative: boolean;
};

const NAME = 'WOWswap';
const VERSION = '1';

const EIP712Domain = [
  { name: 'name', type: 'string' },
  { name: 'version', type: 'string' },
  { name: 'chainId', type: 'uint256' },
  { name: 'verifyingContract', type: 'address' },
];

const Permit = [
  { name: 'owner', type: 'address' },
  { name: 'spender', type: 'address' },
  { name: 'value', type: 'uint256' },
  { name: 'nonce', type: 'uint256' },
  { name: 'deadline', type: 'uint256' },
];

export class Router extends CoreRelevant<
  {
    contracts: Record<typeof Router.REQUIRED_ADDRESSES[number], string>;
    signerApi: string;
    signer?: Wallet;
  },
  {
    reserves: Reserves;
    pairs: Pairs;
  }
> {
  public static REQUIRED_ADDRESSES = ['router'] as const;

  get pairs() {
    return this.context.pairs;
  }

  get reserves() {
    return this.context.reserves;
  }

  get router() {
    return this.core.useContract(Router__factory, this.params.contracts.router);
  }

  get signer() {
    return this.params.signer;
  }

  useGuardedPrice(pair: string) {
    return fetch(this.params.signerApi, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pair }),
    }).then(
      (res) => res.json() as Promise<OpenPositionRequest['guardedPrice'] | null>
    );
  }

  useLongGuardedPriceByTokens(
    lendable: string,
    tradable: string,
    proxy?: string
  ) {
    return this.pairs
      .useLongPair(lendable, tradable, proxy)
      .then((pair) => (pair ? this.useGuardedPrice(pair.address) : null));
  }
  useShortGuardedPriceByTokens(
    lendable: string,
    tradable: string,
    proxy?: string
  ) {
    return this.pairs
      .useShortPair(lendable, tradable, proxy)
      .then((pair) => (pair ? this.useGuardedPrice(pair.address) : null));
  }

  async useOpenPosition(params: OpenPositionRequest) {
    if (!this.params.signer) {
      throw new Error(
        'Signer is required! Ensure signer configuration in Context params'
      );
    }

    return this.router.connect(this.params.signer).openPosition(params);
  }

  async useClosePermit(pair: string) {
    if (!this.signer) {
      throw new Error(
        'Signer is required! Ensure signer configuration in Context params'
      );
    }

    const nonce = await this.core
      .useContract(Pair__factory, pair)
      .nonces(this.signer.address);
    const deadline = await this.context.provider
      .getBlock('latest')
      .then((b) => b.timestamp + 60 * 60); // 1 hour deadline

    const { chainId } = await this.core.useNetwork();

    const message = {
      owner: this.signer.address,
      spender: this.params.contracts.router,
      value: ethers.constants.MaxUint256,
      nonce: nonce,
      deadline: deadline,
    };

    const permitDomain = {
      name: NAME,
      version: VERSION,
      chainId: chainId,
      verifyingContract: pair,
    };
    const permitTypes = { EIP712Domain, Permit };

    this.signer._signTypedData(permitDomain, permitTypes, message);
  }

  async useClosePosition(params: ClosePositionRequest) {
    if (!this.params.signer) {
      throw new Error(
        'Signer is required! Ensure signer configuration in Context params'
      );
    }

    return this.router.connect(this.params.signer).closePosition(params);
  }

  async useDeposit(lendable: string, amount: BigNumberish) {
    if (!this.params.signer) {
      throw new Error(
        'Signer is required! Ensure signer configuration in Context params'
      );
    }
    return this.router
      .connect(this.params.signer)
      .deposit(lendable, amount, this.params.signer.address);
  }
  async useDepositShortable(shortable: string, amount: BigNumberish) {
    if (!this.params.signer) {
      throw new Error(
        'Signer is required! Ensure signer configuration in Context params'
      );
    }
    return this.router
      .connect(this.params.signer)
      .depositShortable(shortable, amount, this.params.signer.address);
  }

  async useDepositNative(amount: BigNumberish) {
    if (!this.params.signer) {
      throw new Error(
        'Signer is required! Ensure signer configuration in Context params'
      );
    }
    return this.router
      .connect(this.params.signer)
      .depositETH(this.params.signer.address, { value: amount });
  }

  // async useWithdraw(lendable: string, amount: BigNumberish) {
  //   if (!this.params.signer) {
  //     throw new Error(
  //       'Signer is required! Ensure signer configuration in Context params'
  //     );
  //   }
  //   return this.router
  //     .connect(this.params.signer)
  //     .withdraw(lendable, amount, this.params.signer.address);
  // }
  //
  // async useWithdrawShortable(shortable: string, amount: BigNumberish) {
  //   if (!this.params.signer) {
  //     throw new Error(
  //       'Signer is required! Ensure signer configuration in Context params'
  //     );
  //   }
  //   return this.router
  //     .connect(this.params.signer)
  //     .withdrawShortable(shortable, amount, this.params.signer.address);
  // }
  //
  // async useWithdrawNative(amount: BigNumberish) {
  //   if (!this.params.signer) {
  //     throw new Error(
  //       'Signer is required! Ensure signer configuration in Context params'
  //     );
  //   }
  //   return this.router
  //     .connect(this.params.signer)
  //     .withdrawETH(amount, this.params.signer.address);
  // }
}
