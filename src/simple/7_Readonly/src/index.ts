/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #easy 
  
  ### Question
  
  Give an array, transform into an object type and the key/value must in the given array.
  
  For example
  
  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  
  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
  
  > View on GitHub: https://tsch.js.org/11
*/

/* _____________ 你的代码 _____________ */

export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}






