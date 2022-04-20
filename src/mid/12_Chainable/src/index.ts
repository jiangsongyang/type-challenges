/*
   12 - Chainable Options
  -------
  by Anthony Fu (@antfu) #medium #application
  
  ### Question
  
  Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?
  
  In this challenge, you need to type an object or a class - whatever you like - to provide two function `option(key, value)` and `get()`. In `option`, you can extend the current config type by the given key and value. We should about to access the final result via `get`.
  
  For example
  
  ```ts
  declare const config: Chainable
  
  const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()
  
  // expect the type of result to be:
  interface Result {
    foo: number
    name: string
    bar: {
      value: string
    }
  }
  ```
  
  You don't need to write any js/ts logic to handle the problem - just in type level. 
  
  You can assume that `key` only accepts `string` and the `value` can be anything - just leave it as-is. Same `key` won't be passed twice.
  
  > View on GitHub: https://tsch.js.org/12
*/


/* _____________ Your Code Here _____________ */

export type Chainable<T extends Record<string, unknown> = {}> = {
    option<K extends string, V = unknown>(key: K, value: V): Chainable<T & Record<K, V>>
    get(): T
  }






