/*
  5360 - Unique
  -------
  by Pineapple (@Pineapple0919) #medium #array
  
  ### Question
  
  Implement the type version of Lodash.uniq, Unique<T> takes an Array T, returns the Array T without repeated values.
  
  ```ts
  type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
  type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
  type Res2 = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
  type Res3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
  type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]
  ```
  
  > View on GitHub: https://tsch.js.org/5360
*/

/* _____________ Your Code Here _____________ */
import type { Equal } from '@type-challenges/utils'

type Includes<T extends unknown[], V> = T extends [infer First, ...infer Rest]
  ? Equal<First, V> extends true
    ? true
    : Includes<Rest, V>
  : false

export type Unique<
  T extends unknown[],
  Res extends unknown[] = []
> = T extends [infer First, ...infer Rest]
  ? Includes<Res, First> extends true
    ? Unique<Rest, Res>
    : Unique<Rest, [...Res, First]>
  : Res
