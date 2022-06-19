/*
   59 - Get Optional
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer
  
  ### Question
  
  Implement the advanced util type `GetOptional<T>`, which remains all the optional fields
  
  For example
  
  ```ts
  type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
  ```
  
  > View on GitHub: https://tsch.js.org/59
*/

/* _____________ Your Code Here _____________ */

export type GetOptional<T extends Record<string, any>> = {
  [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];
};
