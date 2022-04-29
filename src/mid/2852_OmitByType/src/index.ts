/*
  2852 - OmitByType
  -------
  by jiangshan (@jiangshanmeta) #medium #object
  
  ### Question
  
  From ```T```, pick a set of properties whose type are not assignable to ```U```.
  
  For Example
  
  ```typescript
  type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { name: string; count: number }
  ```
  
  > View on GitHub: https://tsch.js.org/2852
*/

/* _____________ Your Code Here _____________ */

export type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K]
}
