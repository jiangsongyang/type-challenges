/*
  2693 - EndsWith
  -------
  by jiangshan (@jiangshanmeta) #medium #template-literal
  
  ### Question
  
  Implement `EndsWith<T, U>` which takes two exact string types and returns whether `T` ends with `U`
  
  > View on GitHub: https://tsch.js.org/2693
*/

/* _____________ Your Code Here _____________ */

export type EndsWith<
  T extends string,
  U extends string
> = T extends `${string}${U}` ? true : false
