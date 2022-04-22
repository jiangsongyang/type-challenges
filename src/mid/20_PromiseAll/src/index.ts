/*
  20 - Promise.all
  -------
  by Anthony Fu (@antfu) #medium #array #built-in
  
  ### Question
  
  Type the function `PromiseAll` that accepts an array of PromiseLike objects, the returning value should be `Promise<T>` where `T` is the resolved result array.
  
  ```ts
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });
  
  // expected to be `Promise<[number, 42, string]>`
  const p = Promise.all([promise1, promise2, promise3] as const)
  ```
  
  > View on GitHub: https://tsch.js.org/20
*/


/* _____________ Your Code Here _____________ */

declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>





