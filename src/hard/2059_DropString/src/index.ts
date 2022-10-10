/*
  2059 - Drop String
  -------
  by CaptainOfPhB (@CaptainOfPhB) #hard #template-literal #infer
  
  ### Question
  
  Drop the specified chars from a string.
  
  For example:
  
  ```ts
  type Butterfly = DropString<'foobar!', 'fb'> // 'ooar!'
  ```
  
  > View on GitHub: https://tsch.js.org/2059
*/


/* _____________ Your Code Here _____________ */

type ExcludeString<S extends string, F extends String> = F extends `${infer First}${infer Rest}`
  ? First extends S
  ? S extends First
  ? true
  : ExcludeString<S, Rest>
  : ExcludeString<S, Rest>
  : false

export type DropString<S extends string, F extends string, R extends string = ''> = S extends `${infer First}${infer Rest}`
  ? ExcludeString<First, F> extends true
  ? DropString<Rest, F, R>
  : DropString<Rest, F, `${R}${First}`>
  : R






