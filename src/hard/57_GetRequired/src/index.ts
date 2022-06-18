/*
   57 - Get Required
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer
  
  ### Question
  
  Implement the advanced util type `GetRequired<T>`, which remains all the required fields
  
  For example
  
  ```ts
  type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
  ```
  
  > View on GitHub: https://tsch.js.org/57
*/


/* _____________ Your Code Here _____________ */

export type GetRequired<T extends Record<string, any>> = {
 [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K];
};






