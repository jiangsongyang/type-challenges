/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #medium #object
  
  ### Question
  
  Get an `Object` that is the difference between `O` & `O1`
  
  > View on GitHub: https://tsch.js.org/645
*/

/* _____________ Your Code Here _____________ */

export type Diff<A, B> = {
  [K in Exclude<keyof A, keyof B> | Exclude<keyof B, keyof A>]: (A & B)[K]
}
