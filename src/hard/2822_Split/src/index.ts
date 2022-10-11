/*
  2822 - Split
  -------
  by Andrea Simone Costa (@jfet97) #hard #string #split #array #tuple
  
  ### Question
  
  The well known `split()` method splits a string into an array of substrings by looking for a separator, and returns the new array. The goal of this challenge is to split a string, by using a separator, but in the type system!
  
  For example:
  
  ```ts
  type result = Split<'Hi! How are you?', ' '>  // should be ['Hi!', 'How', 'are', 'you?']
  ```
  
  > View on GitHub: https://tsch.js.org/2822
*/


/* _____________ Your Code Here _____________ */

import { Equal } from '@type-challenges/utils'

export type Split<S extends string, SEP extends string, Res extends string[] = []> = Equal<string, S> extends true
  ? string[]
  : S extends `${infer P}${SEP}${infer R}`
  ? Split<R, SEP, [...Res, P]>
  : SEP extends ''
  ? [...Res]
  : [...Res, S]






