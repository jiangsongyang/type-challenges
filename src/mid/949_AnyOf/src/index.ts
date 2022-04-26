/*
   949 - AnyOf
  -------
  by null (@kynefuk) #medium #array
  
  ### Question
  
  Implement Python liked `any` function in the type system. A type takes the Array and returns `true` if any element of the Array is true. If the Array is empty, return `false`.
  
  For example:
  
  ```ts
  type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
  type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.
  ```
  
  > View on GitHub: https://tsch.js.org/949
*/

/* _____________ Your Code Here _____________ */

type ErrorToken = false | "" | 0 | [] | Record<string, never>;

export type AnyOf<T extends readonly any[]> = T[number] extends ErrorToken
  ? false
  : true;
