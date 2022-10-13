/*
  2857 - IsRequiredKey
  -------
  by jiangshan (@jiangshanmeta) #hard #utils
  
  ### Question
  
  Implement a generic ```IsRequiredKey<T, K>```  that return whether ```K``` are required keys of ```T``` .
  
  For example
  
  ```typescript
  type A = IsRequiredKey<{ a: number, b?: string },'a'> // true
  type B = IsRequiredKey<{ a: number, b?: string },'b'> // false
  type C = IsRequiredKey<{ a: number, b?: string },'b' | 'a'> // false
  ```
  
  > View on GitHub: https://tsch.js.org/2857
*/


/* _____________ Your Code Here _____________ */

export type IsRequiredKey<T, K extends keyof T, R = Pick<T, K>> =  R extends Required<R> ? true : false;






