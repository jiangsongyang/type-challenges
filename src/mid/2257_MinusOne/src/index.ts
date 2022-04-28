/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math
  
  ### Question
  
  Given a number (always positive) as a type. Your type should return the number decreased by one.
  
  For example:
  
  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```
  
  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */

type Pop<Arr extends any[]> = Arr extends [infer F, ...infer R] ? R : never

type CreateArr<
  T extends number,
  Arr extends any[] = []
> = Arr['length'] extends T ? Arr : CreateArr<T, [...Arr, 0]>

type a = []

export type MinusOne<T extends number> = [...Pop<CreateArr<T>>]['length']
