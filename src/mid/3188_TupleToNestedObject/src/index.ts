/*
  3188 - Tuple to Nested Object
  -------
  by jiangshan (@jiangshanmeta) #medium #object
  
  ### Question
  
  Given a tuple type ```T``` that only contains string type, and a type ```U```, build an object recursively.
  
  ```typescript
  type a = TupleToNestedObject<['a'], string> // {a: string}
  type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
  type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
  ```
  
  > View on GitHub: https://tsch.js.org/3188
*/

/* _____________ Your Code Here _____________ */

export type TupleToNestedObject<T extends unknown[], U, R = U> = T extends [
  ...infer Rest,
  infer Last
]
  ? TupleToNestedObject<Rest, U, Record<Last & string, R>>
  : R;
