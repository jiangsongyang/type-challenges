/*
  114 - CamelCase
  -------
  by Anthony Fu (@antfu) #hard #template-literal
  
  ### Question
  
  Implement `CamelCase<T>` which converts `snake_case` string to `camelCase`.
  
  For example
  
  ```ts
  type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
  type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one
  ```
  
  > View on GitHub: https://tsch.js.org/114
*/


/* _____________ Your Code Here _____________ */

type Help<S extends string> = S extends `${infer L}_${infer R}`
  ? `${L}${Help<Capitalize<R>>}`
  : S;

export type CamelCase<S extends string> = Help<Lowercase<S>>;