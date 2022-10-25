/*
  8804 - Two Sum
  -------
  by PsiloLau (@Psilocine) #hard #array #math
  
  ### Question
  
  Given an array of integers `nums` and an integer `target`, return true if two numbers such that they add up to `target`.
  
  > View on GitHub: https://tsch.js.org/8804
*/


/* _____________ Your Code Here _____________ */

type NumberToArray<N extends number, Result extends 0[] = []> = Result['length'] extends N
  ? Result
  : NumberToArray<N, [0, ...Result]>

/**
 * Sum<1, 2> // 3
 */
type Sum<A extends number, B extends number> = [...NumberToArray<A>, ...NumberToArray<B>]['length']

/**
 * EachSum<[1, 2], 3> // [4, 5]
 */
type EachSum<T extends number[], N extends number, Result extends number[] = []> = T extends [infer F extends number, ...infer R extends number[]]
  ? EachSum<R, N, [...Result, Sum<F, N> & number]>
  : Result

/**
 * GetResult<[1, 2, 3]> // [3, 4, 5]
 */
type GetResult<T extends number[], Result extends number[] = []> = T extends [infer F extends number, ...infer R extends number[]]
  ? GetResult<R, [...Result, ...EachSum<R, F>]>
  : Result

export type TwoSum<T extends number[], U extends number> = U extends GetResult<T>[number] ? true : false