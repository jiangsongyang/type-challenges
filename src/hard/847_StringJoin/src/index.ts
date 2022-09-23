/*
  847 - String Join
  -------
  by Matt Davis (@tl-matt-davis) #hard 
  
  ### Question
  
  Create a type-safe string join utility which can be used like so:
  
  ```ts
  const hyphenJoiner = join('-')
  const result = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
  ```
  
  Or alternatively:
  ```ts
  join('#')('a', 'b', 'c') // = 'a#b#c'
  ```
  
  When we pass an empty delimiter (i.e '') to join, we should concat the strings as they are, i.e: 
  ```ts
  join('')('a', 'b', 'c') // = 'abc'
  ```
  
  When only one item is passed, we should get back the original item (without any delimiter added):
  ```ts
  join('-')('a') // = 'a'
  ```
  
  > View on GitHub: https://tsch.js.org/847
*/


/* _____________ Your Code Here _____________ */

type JoinString<
  A extends string[],
  T extends string,
  Result extends string = ''
> = A extends [infer F extends string, ...infer R extends string[]]
  ? Result extends ''
    ? JoinString<R, T, F>
    : JoinString<R, T, `${Result}${T}${F}`>
  : Result

export declare function join<T extends string>(delimiter: T): <A extends string[] = []>(...parts: A) => JoinString<A, T>






