/*
   300 - String to Number
  -------
  by Pig Fang (@g-plane) #hard #template-literal
  
  ### Question
  
  Convert a string literal to a number, which behaves like `Number.parseInt`.
  
  > View on GitHub: https://tsch.js.org/300
*/

/* _____________ Your Code Here _____________ */

type Nums = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type IsNum<N extends string> = N extends `${Nums}${infer B}`
  ? B extends ''
    ? true
    : IsNum<B>
  : false
  
export type ToNumber<
  S extends string,
  U extends any[] = []
> = IsNum<S> extends true
  ? `${U['length']}` extends `${S}`
    ? U['length']
    : ToNumber<S, [...U, 1]>
  : never
