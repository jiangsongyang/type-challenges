/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in
  
  ### Question
  
  Implement the built-in Exclude<T, U>
  > Exclude from T those types that are assignable to U
  
  > View on GitHub: https://tsch.js.org/43
*/


/* _____________ Your Code Here _____________ */

export type MyExclude<T, U> = T extends U ? never : T;






