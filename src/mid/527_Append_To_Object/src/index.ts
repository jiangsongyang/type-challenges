/*
  527 - Append to object
  -------
  by Andrey Krasovsky (@bre30kra69cs) #medium #object-keys
  
  ### Question
  
  Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.
  
  For example
  
  ```ts
  type Test = { id: '1' }
  type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
  ```
  
  > View on GitHub: https://tsch.js.org/527
*/

/* _____________ Your Code Here _____________ */

export type AppendToObject<T extends {}, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}
