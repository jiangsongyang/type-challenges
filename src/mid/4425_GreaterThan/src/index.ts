/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array
  
  ### Question
  
  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`
  
  Negative numbers do not need to be considered.
  
  For example
  
  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```
  
  Good Luck!
  
  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */

export type GreaterThan<
  T extends number,
  U extends number,
  R extends any[] = []
> = T extends R["length"]
  ? false
  : U extends R["length"]
  ? true
  : GreaterThan<T, U, [...R, 0]>;
