/*
  17 - Currying 1
  -------
  by Anthony Fu (@antfu) #hard #array
  
  ### Question
  
  > TypeScript 4.0 is recommended in this challenge
  
  [Currying](https://en.wikipedia.org/wiki/Currying) is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument. 
  
  For example:
  
  ```ts
  const add = (a: number, b: number) => a + b
  const three = add(1, 2)
  
  const curriedAdd = Currying(add)
  const five = curriedAdd(2)(3)
  ```
  
  The function passed to `Currying` may have multiple arguments, you need to correctly type it.
  
  In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.
  
  > View on GitHub: https://tsch.js.org/17
*/

/* _____________ Your Code Here _____________ */
type CurriedFn<Fn> = Fn extends (...args: infer Args) => infer R
  ? Args extends [infer F, ...infer Rest]
    ? (arg: F) => CurriedFn<(...rest: Rest) => R>
    : R
  : never

export declare function Currying<Fn>(fn: Fn): CurriedFn<Fn>
