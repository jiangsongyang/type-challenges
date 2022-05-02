/*
  4179 - Flip
  -------
  by Farhan Kathawala (@kathawala) #medium #object
  
  ### Question
  
  Implement the type of `just-flip-object`. Examples:
  
  ```typescript
  Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
  Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
  flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
  ```
  
  No need to support nested objects and values which cannot be object keys such as arrays
  
  > View on GitHub: https://tsch.js.org/4179
*/

/* _____________ Your Code Here _____________ */

export type Flip<T extends { [K: string]: any }> = {
  [K in keyof T as K extends keyof T ? `${T[K]}` : never]: K;
};
