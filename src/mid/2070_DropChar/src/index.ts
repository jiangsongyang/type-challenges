/*
  2070 - Drop Char
  -------
  by CaptainOfPhB (@CaptainOfPhB) #medium #template-literal #infer
  
  ### Question
  
  Drop a specified char from a string.
  
  For example:
  
  ```ts
  type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
  ```
  
  > View on GitHub: https://tsch.js.org/2070
*/

/* _____________ Your Code Here _____________ */

export type DropChar<
  S,
  C,
  Res extends string = ''
> = S extends `${infer F}${infer R}`
  ? F extends C
    ? DropChar<`${R}`, C, Res>
    : DropChar<R, C, `${Res}${F}`>
  : Res
