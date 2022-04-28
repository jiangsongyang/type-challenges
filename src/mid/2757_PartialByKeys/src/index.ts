/*
  2757 - PartialByKeys
  -------
  by jiangshan (@jiangshanmeta) #medium #object
  
  ### Question
  
  Implement a generic `PartialByKeys<T, K>` which takes two type argument `T` and `K`.
  
  `K` specify the set of properties of `T` that should set to be optional. When `K` is not provided, it should make all properties optional just like the normal `Partial<T>`.
  
  For example
  
  ```typescript
  interface User {
    name: string
    age: number
    address: string
  }
  
  type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
  ```
  
  > View on GitHub: https://tsch.js.org/2757
*/

/* _____________ Your Code Here _____________ */

type Merge<O extends {}> = {
  [K in keyof O]: O[K]
}

export type PartialByKeys<T, K = keyof T> = Merge<
  {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
  } & {
    [Key in keyof T as Key extends K ? Key : never]?: T[Key]
  }
>
