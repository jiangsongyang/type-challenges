/*
   399 - Tuple Filter
  -------
  by Ryo Hanafusa (@softoika) #hard #tuple #infer
  
  ### Question
  
  Implement a type `FilterOut<T, F>` that filters out items of the given type `F` from the tuple `T`.
  
  For example,
  ```ts
  type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]
  ```
  
  > View on GitHub: https://tsch.js.org/399
*/

/* _____________ Your Code Here _____________ */

export type FilterOut<T extends any[], Filter> = T extends [
  infer V,
  ...infer Rest
]
  ? [V] extends [Filter]
    ? [...FilterOut<Rest, Filter>]
    : [V, ...FilterOut<Rest, Filter>]
  : []
