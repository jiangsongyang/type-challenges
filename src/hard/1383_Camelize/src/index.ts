/*
  1383 - Camelize
  -------
  by Denis (@denchiklut) #hard #union #recursion
  
  ### Question
  
  Implement Camelize which converts object from snake_case to to camelCase
  
  ```ts
  Camelize<{
    some_prop: string, 
    prop: { another_prop: string },
    array: [{ snake_case: string }]
  }>
  
  // expected to be
  // {
  //   someProp: string, 
  //   prop: { anotherProp: string },
  //   array: [{ snakeCase: string }]
  // }
  ```
  
  > View on GitHub: https://tsch.js.org/1383
*/


/* _____________ Your Code Here _____________ */
type Transform<K extends string> = K extends `${infer A}_${infer B}`
  ? `${Capitalize<A>}${Transform<B>}`
  : Capitalize<K>;

type CamelizeArr<T> = T extends [infer First, ...infer Rest]
  ? [Camelize<First>, ...CamelizeArr<Rest>]
  : [];

export type Camelize<T> = T extends object
  ? {
    [K in keyof T as K extends `${infer A}_${infer B}`
    ? `${A}${Transform<B>}`
    : K]: T[K] extends unknown[] ? CamelizeArr<T[K]> : Camelize<T[K]>;
  }
  : T;







