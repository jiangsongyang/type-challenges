/*
  191 - Append Argument
  -------
  by Maciej Sikora (@maciejsikora) #medium #arguments
  
  ### Question
  
  For given function type `Fn`, and any type `A` (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take `Fn` as the first argument, `A` as the second, and will produce function type `G` which will be the same as `Fn` but with appended argument `A` as a last one.
  
  For example,
  
  ```typescript
  type Fn = (a: number, b: string) => number
  
  type Result = AppendArgument<Fn, boolean> 
  // expected be (a: number, b: string, x: boolean) => number
  ```
  
  > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c) by [@maciejsikora](https://github.com/maciejsikora)
  
  > View on GitHub: https://tsch.js.org/191
*/

/* _____________ Your Code Here _____________ */

export type AppendArgument<Fn, A> = Fn extends (
  ...args: infer Args
) => infer Return
  ? (...args: [...Args, A]) => Return
  : never;
