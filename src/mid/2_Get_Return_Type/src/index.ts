/*
   2 - Get Return Type
  -------
  by Anthony Fu (@antfu) #medium #infer #built-in
  
  ### Question
  
  Implement the built-in `ReturnType<T>` generic without using it.
  
  For example
  
  ```ts
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }
  
  type a = MyReturnType<typeof fn> // should be "1 | 2"
  ```
  
  > View on GitHub: https://tsch.js.org/2
*/

/* _____________ Your Code Here _____________ */

export type MyReturnType<T> = T extends (...arg: any[]) => infer R ? R : never;
