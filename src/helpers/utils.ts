import { getAddress } from '@ethersproject/address';
import { Provider } from '@ethersproject/abstract-provider';
import { IERC20Detailed__factory } from '../dependencies/protocol';

export const addressToERC20 = (provider: Provider) => (address: string) =>
  IERC20Detailed__factory.connect(address, provider);

export const filterDefined = <T>(collection: Array<T | undefined>) =>
  collection.filter((some): some is T => typeof some !== 'undefined');

export const defined = <T>(something: T | undefined): something is T =>
  typeof something !== 'undefined';

export const byteToAddress = (bytes: string) =>
  getAddress('0x' + bytes.slice(26));

export const logError = (msg: string) => <TError>(e: TError) => {
  console.error(msg, '\n', e);
  throw e;
};

export const doWith = <TIn, TOut = any>(
  collection: TIn[],
  func: (
    tasks: Array<Promise<TOut>>,
    el: TIn,
    index: number,
    collection: TIn[]
  ) => void
) =>
  Promise.all(
    collection.reduce((tasks, el, index, all) => {
      func(tasks, el, index, all);
      return tasks;
    }, [] as Array<Promise<TOut>>)
  );

export const toDictionaryValue = <
  TKey extends string | number | symbol,
  TElement,
  TValue
>(
  collection: TElement[],
  getKey: (el: TElement) => TKey,
  getValue: (el: TElement) => TValue
): Record<TKey, TValue> =>
  collection.reduce(
    (dict, el) => ((dict[getKey(el)] = getValue(el)), dict),
    {} as Record<TKey, TValue>
  );

export const toDictionary = <TKey extends string | number | symbol, TValue>(
  collection: TValue[],
  getKey: (el: TValue) => TKey
): Record<TKey, TValue> =>
  collection.reduce(
    (dict, el) => ((dict[getKey(el)] = el), dict),
    {} as Record<TKey, TValue>
  );

export const flatten = <TElement>(collection: Array<Array<TElement>>) =>
  collection.reduce(flat, []);

export const flat = <T>(accumulator: T[], value: T[]) =>
  accumulator.concat(value);

export const filterAll = <TIn>(func: (el: TIn) => boolean) => (
  collection: TIn[]
) => collection.filter(func);

export const mapAll = <TIn, TOut>(func: (el: TIn) => TOut) => (
  collection: TIn[]
) => collection.map(func);

export const sleep = (n: number) =>
  new Promise((resolve) => setTimeout(resolve, n));
