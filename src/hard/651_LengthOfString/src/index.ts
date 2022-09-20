/*
  651 - Length of String 2
  -------
  by null (@uid11) #hard #template-literal
  
  ### Question
  
  Implement a type `LengthOfString<S>` that calculates the length of the template string (as in [298 - Length of String](https://tsch.js.org/298)):
  
  ```ts
  type T0 = LengthOfString<"foo"> // 3
  ```
  
  The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
  
  > View on GitHub: https://tsch.js.org/651
*/


/* _____________ Your Code Here _____________ */

export type LengthOfString<S extends string> = number






