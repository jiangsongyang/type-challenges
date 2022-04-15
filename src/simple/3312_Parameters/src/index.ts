/*
   3312 - Parameters
  -------
  by midorizemi (@midorizemi) #easy #infer #tuple #built-in
  
  ### Question
  
  Implement the built-in Parameters<T> generic without using it.
  
  > View on GitHub: https://tsch.js.org/3312
*/

/* _____________ Your Code Here _____________ */

export type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...arg: infer Args
) => any
  ? Args
  : never;
