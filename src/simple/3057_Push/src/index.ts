/*
   3057 - Push
  -------
  by jiangshan (@jiangshanmeta) #easy #array
  
  ### Question
  
  Implement the generic version of ```Array.push```
  
  For example
  
  ```typescript
  type Result = Push<[1, 2], '3'> // [1, 2, '3']
  ```
  
  > View on GitHub: https://tsch.js.org/3057
*/


/* _____________ Your Code Here _____________ */

export type Push<T extends any[], U> = [...T, U]






