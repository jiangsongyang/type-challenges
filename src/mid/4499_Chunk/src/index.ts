/*
  4499 - Chunk
  -------
  by キリサメ qianxi (@qianxi0410) #medium #tuple
  
  ### Question
  
  Do you know `lodash`? `Chunk` is a very useful function in it, now let's implement it.
  `Chunk<T, N>` accepts two required type parameters, the `T` must be a `tuple`, and the `N` must be an `integer >=1`
  
  ```ts
  type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
  type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
  type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
  ```
  
  > View on GitHub: https://tsch.js.org/4499
*/

/* _____________ Your Code Here _____________ */

export type Chunk<
  T extends any[],
  N extends number,
  Part extends any[] = []
> = T extends [infer F, ...infer R]
  ? Part['length'] extends N
    ? [Part, ...Chunk<T, N>]
    : Chunk<R, N, [...Part, F]>
  : Part extends []
  ? Part
  : [Part]
