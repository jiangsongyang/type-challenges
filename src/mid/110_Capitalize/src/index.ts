/*
  110 - Capitalize
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Capitalize<T>` which converts the first letter of a string to uppercase and leave the rest as-is.
  
  For example
  
  ```ts
  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
  ```
  
  > View on GitHub: https://tsch.js.org/110
*/

/* _____________ Your Code Here _____________ */

export type MyCapitalize<S extends string> = S extends `${infer S}${infer R}`
  ? `${Uppercase<S>}${R}`
  : S
