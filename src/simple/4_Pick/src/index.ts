/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #easy #union #built-in
  
  ### Question
  
  Implement the built-in `Pick<T, K>` generic without using it.
  
  Constructs a type by picking the set of properties `K` from `T`
  
  For example
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```
  
  > View on GitHub: https://tsch.js.org/4
*/

/* _____________ 你的代码 _____________ */

export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
