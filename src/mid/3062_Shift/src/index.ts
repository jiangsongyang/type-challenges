/*
  3062 - Shift
  -------
  by jiangshan (@jiangshanmeta) #medium #array
  
  ### Question
  
  Implement the type version of ```Array.shift```
  
  For example
  
  ```typescript
  type Result = Shift<[3, 2, 1]> // [2, 1]
  ```
  
  > View on GitHub: https://tsch.js.org/3062
*/

/* _____________ Your Code Here _____________ */

export type Shift<T extends any[]> = T extends [infer F, ...infer Rest]
  ? Rest
  : never;
