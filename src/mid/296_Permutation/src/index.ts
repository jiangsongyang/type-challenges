/*
  296 - Permutation
  -------
  by Naoto Ikuno (@pandanoir) #medium #union
  
  ### Question
  
  Implement permutation type that transforms union types into the array that includes permutations of unions.
  
  ```typescript
  type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
  ```
  
  > View on GitHub: https://tsch.js.org/296
*/

/* _____________ Your Code Here _____________ */

export type Permutation<T, K = T> = [T] extends [never]
  ? []
  : T extends T
  ? [T, ...Permutation<Exclude<K, T>>]
  : never;
