/*
  2793 - Mutable
  -------
  by jiangshan (@jiangshanmeta) #medium #readonly #object-keys
  
  ### Question
  
  Implement the generic ```Mutable<T>``` which makes all properties in ```T``` mutable (not readonly).
  
  For example
  
  ```typescript
  interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
  }
  
  type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
  
  ```
  
  > View on GitHub: https://tsch.js.org/2793
*/


/* _____________ Your Code Here _____________ */

export type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
}





