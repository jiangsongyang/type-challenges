/*
  4803 - Trim Right
  -------
  by Yugang Cao (@Talljack) #medium 
  
  ### Question
  
  Implement `TrimRight<T>` which takes an exact string type and returns a new string with the whitespace ending removed.
  
  For example:
  
  ```ts
  type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'
  ```
  
  > View on GitHub: https://tsch.js.org/4803
*/

/* _____________ Your Code Here _____________ */

export type TrimRight<S extends string> = S extends `${infer R}${
  | " "
  | "\n"
  | "\t"}`
  ? TrimRight<R>
  : S;
