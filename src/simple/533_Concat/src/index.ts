/*
  533 - Concat
  -------
  by Andrey Krasovsky (@bre30kra69cs) #easy #array
  
  ### Question
  
  Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order
  
  For example
  
  ```ts
  type Result = Concat<[1], [2]> // expected to be [1, 2]
  ```
  
  > View on GitHub: https://tsch.js.org/533
*/


/* _____________ Your Code Here _____________ */

export type Concat<T extends unknown[], U extends unknown[]> = [...T , ...U]






