/*
  62 - Type Lookup
  -------
  by Anthony Fu (@antfu) #medium #union #map
  
  ### Question
  
  Sometimes, you may want to lookup for a type in a union to by their attributes. 
  
  In this challenge, we would like to get the corresponding type by searching for the common `type` field in the union `Cat | Dog`. In other words, we will expect to get `Dog` for `LookUp<Dog | Cat, 'dog'>` and `Cat` for `LookUp<Dog | Cat, 'cat'>` in the following example.
  
  ```ts
  interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
  }
  
  interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
  }
  
  type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
  ```
  
  > View on GitHub: https://tsch.js.org/62
*/

/* _____________ Your Code Here _____________ */

export type LookUp<U, T extends string> = U extends Record<string, any>
  ? U['type'] extends T
    ? U
    : never
  : never
