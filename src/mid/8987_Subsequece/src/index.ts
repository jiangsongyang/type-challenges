/*
  8987 - Subsequence
  -------
  by jiangshan (@jiangshanmeta) #medium #union
  
  ### Question
  
  Given an array of unique elements, return all possible subsequences.
  
  A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.
  
  For example: 
  
  ```typescript
  type A = Subsequence<[1, 2] // [] | [1] | [2] | [1, 2]
  ```
  
  > View on GitHub: https://tsch.js.org/8987
*/

/* _____________ Your Code Here _____________ */

export type Subsequence<T extends any[], Res extends any[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? Subsequence<Rest, Res | [...Res, F]>
  : Res