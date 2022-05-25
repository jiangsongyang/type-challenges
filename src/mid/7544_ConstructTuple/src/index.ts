/*
 7544 - Construct Tuple
  -------
  by Lo (@LoTwT) #medium #tuple
  
  ### Question
  
  Construct a tuple with a given length.
  
  For example
  
  ```ts
  type result = ConstructTuple<2> // expect to be [unknown, unkonwn]
  ```
  
  > View on GitHub: https://tsch.js.org/7544
*/

/* _____________ Your Code Here _____________ */

export type ConstructTuple<
  L extends number = 0,
  Arr extends unknown[] = []
> = L extends Arr['length'] ? Arr : ConstructTuple<L, [...Arr, unknown]>
