/*
  3243 - FlattenDepth
  -------
  by jiangshan (@jiangshanmeta) #medium #array
  
  ### Question
  
  Recursively flatten array up to depth times.
  
  For example:
  
  ```typescript
  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
  ```
  
  If the depth is provided, it's guaranteed to be positive integer.
  
  > View on GitHub: https://tsch.js.org/3243
*/

/* _____________ Your Code Here _____________ */

export type FlattenDepth<
  T,
  D extends number = 1,
  H extends any[] = []
> = T extends [infer F, ...infer L]
  ? H["length"] extends D
    ? T
    : F extends any[]
    ? [...FlattenDepth<F, D, [...H, 1]>, ...FlattenDepth<L, D, [...H]>]
    : [F, ...FlattenDepth<L, D, [...H]>]
  : [];
