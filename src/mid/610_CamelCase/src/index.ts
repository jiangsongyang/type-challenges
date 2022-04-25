/*
  610 - CamelCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal
  
  ### Question
  
  `for-bar-baz` -> `forBarBaz`
  
  > View on GitHub: https://tsch.js.org/610
*/

/* _____________ Your Code Here _____________ */

export type CamelCase<S extends string> =
  S extends `${infer F}-${infer Capital}${infer Rest}`
    ? Capital extends '-'
      ? `${F}-${CamelCase<`-${Rest}`>}`
      : Capital extends Capitalize<Capital>
      ? `${F}-${Capital}${CamelCase<Rest>}`
      : `${F}${Capitalize<Capital>}${CamelCase<Rest>}`
    : S
