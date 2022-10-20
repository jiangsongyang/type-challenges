/*
  6141 - Binary to Decimal
  -------
  by wotsushi (@wotsushi) #hard #math
  
  ### Question
  
  Implement `BinaryToDecimal<S>` which takes an exact string type `S` consisting 0 and 1 and returns an exact number type corresponding with `S` when `S` is regarded as a binary.
  You can assume that the length of `S` is equal to or less than 8 and `S` is not empty.
  
  ```ts
  type Res1 = BinaryToDecimal<'10'>; // expected to be 2
  type Res2 = BinaryToDecimal<'0011'>; // expected to be 3
  ```
  
  > View on GitHub: https://tsch.js.org/6141
*/


/* _____________ Your Code Here _____________ */

type Double<T extends any[], Inc> = Inc extends '0' ? [...T, ...T] : [...T, ...T, any];

export type BinaryToDecimal<S extends string, Count extends any[] = []> =
  S extends `${infer F}${infer R}`
  ? BinaryToDecimal<R, Double<Count, F>>
  : Count['length'];






