/*
  4037 - IsPalindrome
  -------
  by jiangshan (@jiangshanmeta) #hard #string
  
  ### Question
  
  Implement type ```IsPalindrome<T>``` to check whether  a string or number is palindrome.
  
  For example:
  
  ```typescript
  IsPalindrome<'abc'> // false
  IsPalindrome<121> // true
  ```
  
  > View on GitHub: https://tsch.js.org/4037
*/


/* _____________ Your Code Here _____________ */

type Reverse<T extends string> = T extends `${infer First}${infer Rest}`
  ? `${Reverse<Rest>}${First}`
  : T

export type IsPalindrome<T extends string | number> = `${T}` extends Reverse<`${T}`>
  ? true
  : false






