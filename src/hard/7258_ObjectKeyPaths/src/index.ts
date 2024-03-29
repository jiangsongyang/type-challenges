/*
  7258 - Object Key Paths
  -------
  by CattChen (@ChenKS12138) #hard #object-keys
  
  ### Question
  
  Get all possible paths that could be called by [_.get](https://lodash.com/docs/4.17.15#get) (a lodash function) to get the value of an object
  
  ```typescript
  type T1 = ObjectKeyPaths<{ name: string; age: number }>; // expected to be 'name' | 'age'
  type T2 = ObjectKeyPaths<{
    refCount: number;
    person: { name: string; age: number };
  }>; // expected to be 'refCount' | 'person' | 'person.name' | 'person.age'
  type T3 = ObjectKeyPaths<{ books: [{ name: string; price: number }] }>; // expected to be the superset of 'books' | 'books.0' | 'books[0]' | 'books.[0]' | 'books.0.name' | 'books.0.price' | 'books.length' | 'books.find'
  ```
  
  > View on GitHub: https://tsch.js.org/7258
*/


/* _____________ Your Code Here _____________ */

type GetPath<K extends PropertyKey & (string | number), Prefix extends string = ''> = [Prefix] extends [never]
  ? `${K}`
  : K extends number
  ? `${Prefix}.${K}` | `${Prefix}[${K}]` | `${Prefix}.[${K}]`
  : `${Prefix}.${K}`

export type ObjectKeyPaths<T extends object, Result extends string = never> = Result | {
  [P in keyof T & (string | number)]: T[P] extends object
  ? ObjectKeyPaths<T[P], GetPath<P, Result>>
  : GetPath<P, Result>
}[keyof T & (string | number)]






