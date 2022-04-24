/*
  599 - Merge
  -------
  by ZYSzys (@ZYSzys) #medium #object
  
  ### Question
  
  Merge two types into a new type. Keys of the second type overrides keys of the first type.
  
  For example
  
  ```ts
  type foo = {
    name: string;
    age: string;
  }
  type coo = {
    age: number;
    sex: string
  }
  
  type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
  ```
  
  > View on GitHub: https://tsch.js.org/599
*/

/* _____________ Your Code Here _____________ */

export type Merge<F extends {}, S extends {}> = {
  [key in keyof (F & S)]: key extends keyof S ? S[key] : key extends keyof F ? F[key] : never;
};
