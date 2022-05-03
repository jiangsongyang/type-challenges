/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #medium 
  
  ### Question
  
  Implement a generic Fibonacci\<T\> takes an number T and returns it's corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).
  
  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  
  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```
  
  > View on GitHub: https://tsch.js.org/4182
*/

/* _____________ Your Code Here _____________ */

export type Fibonacci<
  T extends number,
  U extends unknown[] = [unknown],
  V extends unknown[] = [unknown],
  I extends unknown[] = [unknown, unknown]
> = T extends I["length"]
  ? V["length"]
  : Fibonacci<T, V, [...U, ...V], [unknown, ...I]>;
