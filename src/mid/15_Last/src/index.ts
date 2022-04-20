/*
  15 - Last of Array
  -------
  by Anthony Fu (@antfu) #medium #array
  
  ### Question
  
  > TypeScript 4.0 is recommended in this challenge
  
  Implement a generic `Last<T>` that takes an Array `T` and returns its last element.
  
  For example
  
  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]
  
  type tail1 = Last<arr1> // expected to be 'c'
  type tail2 = Last<arr2> // expected to be 1
  ```
  
  > View on GitHub: https://tsch.js.org/15
*/

/* _____________ Your Code Here _____________ */

export type Last<T extends any[]> = T extends [...infer R, infer Last]
  ? Last
  : never;
