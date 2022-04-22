/*
  116 - Replace
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`
  
  For example
  
  ```ts
  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
  ```
  
  > View on GitHub: https://tsch.js.org/116
*/

/* _____________ Your Code Here _____________ */

export type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer X}${From}${infer Y}`
  ? `${X}${To}${Y}`
  : S
