/*
  5181 - Mutable Keys
  -------
  by Yugang Cao (@Talljack) #hard #utils
  
  ### Question
  
  Implement the advanced util type MutableKeys<T>, which picks all the mutable (not readonly) keys into a union.
  
  For example:
  
  ```ts
  type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
  // expected to be “bar”
  ```
  
  > View on GitHub: https://tsch.js.org/5181
*/


/* _____________ Your Code Here _____________ */

import { Equal } from '@type-challenges/utils'

export type MutableKeys<T> = keyof {
  [P in keyof T as Equal<{ [K in P]: T[K] }, Readonly<{ [K in P]: T[K] }>> extends false ? P : never]: T[P]
}






