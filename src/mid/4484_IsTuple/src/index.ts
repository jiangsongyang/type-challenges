/*
  4484 - IsTuple
  -------
  by jiangshan (@jiangshanmeta) #medium #tuple
  
  ### Question
  
  Implement a type ```IsTuple```, which takes an input type ```T``` and returns whether ```T``` is tuple type.
  
  For example:
  
  ```typescript
  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false
  ```
  
  > View on GitHub: https://tsch.js.org/4484
*/

/* _____________ Your Code Here _____________ */

export type IsTuple<T extends { length: number }> = T extends readonly [
  infer _F,
  ...infer _R
]
  ? true
  : T['length'] extends 0
  ? true
  : false
