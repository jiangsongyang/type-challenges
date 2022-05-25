/*
  8640 - Number Range
  -------
  by AaronGuo (@HongxuanG) #medium 
  
  ### Question
  
  Sometimes we want to limit the range of numbers...
  For examples.
  ```
  type result = NumberRange<2 , 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
  ```
  
  > View on GitHub: https://tsch.js.org/8640
*/

/* _____________ Your Code Here _____________ */

export type NumberRange<
  L extends number,
  H extends number,
  Out extends number[] = [],
  Flag extends boolean = false
> = Out['length'] extends L
  ? NumberRange<L, H, [...Out, L], true>
  : Flag extends true
  ? Out['length'] extends H
    ? [...Out, Out['length']][number]
    : NumberRange<L, H, [...Out, Out['length']], Flag>
  : NumberRange<L, H, [...Out, never], Flag>
