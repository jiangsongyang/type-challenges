/*
  5140 - Trunc
  -------
  by jiangshan (@jiangshanmeta) #medium #template-literal
  
  ### Question
  
  Implement the type version of ```Math.trunc```, which takes string or number and returns the integer part of a number by removing any fractional digits.
  
  For example:
  
  ```typescript
  type A = Trunc<12.34> // 12
  ```
  
  > View on GitHub: https://tsch.js.org/5140
*/

/* _____________ Your Code Here _____________ */

export type Trunc<T extends number | string> = T extends number
  ? Trunc<`${T}`>
  : `${T}` extends `${infer F}.${string}`
  ? F
  : T
