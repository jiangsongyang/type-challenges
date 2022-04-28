/*
  2595 - PickByType
  -------
  by jiangshan (@jiangshanmeta) #medium #object
  
  ### Question
  
  From `T`, pick a set of properties whose type are assignable to `U`.
  
  For Example
  
  ```typescript
  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }
  ```
  
  > View on GitHub: https://tsch.js.org/2595
*/

/* _____________ Your Code Here _____________ */

export type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K]
}
