/*
  89 - Required Keys
  -------
  by yituan (@yi-tuan) #hard #utils
  
  ### Question
  
  Implement the advanced util type `RequiredKeys<T>`, which picks all the required keys into a union.
  
  For example
  
  ```ts
  type Result = RequiredKeys<{ foo: number; bar?: string }>;
  // expected to be “foo”
  ```
  
  > View on GitHub: https://tsch.js.org/89
*/


/* _____________ Your Code Here _____________ */

export type RequiredKeys<T> = keyof {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};







