/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #medium #template-literal
  
  ### Question
  
  Compute the length of a string literal, which behaves like `String#length`.
  
  > View on GitHub: https://tsch.js.org/298
*/

/* _____________ Your Code Here _____________ */

export type LengthOfString<
  S extends string,
  Arr extends string[] = []
> = S extends ''
  ? 0
  : S extends `${infer First}${infer Rest}`
  ? Rest extends ''
    ? [...Arr, First]['length']
    : LengthOfString<Rest, [...Arr, First]>
  : []
