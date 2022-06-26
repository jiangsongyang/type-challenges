/*
   112 - Capitalize Words
  -------
  by Anthony Fu (@antfu) #hard #template-literal
  
  ### Question
  
  Implement `CapitalizeWords<T>` which converts the first letter of **each word of a string** to uppercase and leaves the rest as-is.
  
  For example
  
  ```ts
  type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
  ```
  
  > View on GitHub: https://tsch.js.org/112
*/

/* _____________ Your Code Here _____________ */

type MySeparators = "." | "," | " " | "|";
export type CapitalizeWords<
  T,
  Separator extends string = "."
> = T extends `${infer Head}${infer Tail}`
  ? Separator extends MySeparators
    ? `${Capitalize<Head>}${CapitalizeWords<Tail, Head>}`
    : `${Head}${CapitalizeWords<Tail, Head>}`
  : T;
