/*
  3192 - Reverse
  -------
  by jiangshan (@jiangshanmeta) #medium #tuple
  
  ### Question
  
  Implement the type version of ```Array.reverse```
  
  For example:
  
  ```typescript
  type a = Reverse<['a', 'b']> // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
  ```
  
  > View on GitHub: https://tsch.js.org/3192
*/

/* _____________ Your Code Here _____________ */

export type Reverse<T extends any[], R extends any[] = []> = T extends [
  ...infer F,
  infer Last
]
  ? Reverse<F, [...R, Last]>
  : R;
