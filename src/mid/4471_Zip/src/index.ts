/*
  4471 - Zip
  -------
  by キリサメ qianxi (@qianxi0410) #medium #tuple
  
  ### Question
  
  In This Challenge, You should implement a type `Zip<T, U>`, T and U must be `Tuple`
  ```ts
  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
  ```
  
  > View on GitHub: https://tsch.js.org/4471
*/

/* _____________ Your Code Here _____________ */

export type Zip<T extends unknown[], P extends unknown[]> = T extends [
  infer L1,
  ...infer R1
]
  ? P extends [infer L2, ...infer R2]
    ? [[L1, L2], ...Zip<R1, R2>]
    : []
  : []
