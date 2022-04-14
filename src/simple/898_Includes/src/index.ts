/*
  898 - Includes
  -------
  by null (@kynefuk) #easy #array
  
  ### Question
  
  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.
  
  For example
  
  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```
  
  > View on GitHub: https://tsch.js.org/898
*/

/* _____________ Your Code Here _____________ */

type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false

export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? MyEqual<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false
