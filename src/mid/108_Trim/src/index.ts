/*
  108 - Trim
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.
  
  For example
  
  ```ts
  type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
  ```
  
  > View on GitHub: https://tsch.js.org/108
*/

/* _____________ Your Code Here _____________ */

type Space = ' ' | '\n' | '\t'

export type Trim<S extends string> = S extends
  | `${Space}${infer R}`
  | `${infer R}${Space}`
  ? Trim<R>
  : S
