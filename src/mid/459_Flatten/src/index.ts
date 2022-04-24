/*
  459 - Flatten
  -------
  by zhouyiming (@chbro) #medium #array
  
  ### Question
  
  In this challenge, you would need to write a type that takes an array and emitted the flatten array type.
  
  For example:
  
  ```ts
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
  ```
  
  > View on GitHub: https://tsch.js.org/459
*/

/* _____________ Your Code Here _____________ */

export type Flatten<T extends any[], Res extends any[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends any[]
    ? Flatten<[...First, ...Rest], [...Res]>
    : Flatten<Rest, [...Res, First]>
  : [...Res]
