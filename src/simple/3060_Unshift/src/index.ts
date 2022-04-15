/*
   3060 - Unshift
  -------
  by jiangshan (@jiangshanmeta) #easy #array
  
  ### Question
  
  Implement the type version of ```Array.unshift```
  
  For example
  
  ```typescript
  type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
  ```
  
  > View on GitHub: https://tsch.js.org/3060
*/


/* _____________ Your Code Here _____________ */

export type Unshift<T extends any[], U> = [U , ...T]






