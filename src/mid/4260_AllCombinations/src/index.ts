/*
  4260 - AllCombinations
  -------
  by 蛭子屋双六 (@sugoroku-y) #medium 
  
  ### Question
  
  Implement type ```AllCombinations<S>``` that return all combinations of strings which use characters from ```S``` at most once.
  
  For example:
  
  ```ts
  type AllCombinations_ABC = AllCombinations<'ABC'>;
  // should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
  ```
  
  > View on GitHub: https://tsch.js.org/4260
*/

/* _____________ Your Code Here _____________ */

export type AllCombinations<
  S extends string,
  PRE extends string = ""
> = S extends `${infer L}${infer POST}`
  ?
      | `${L}${AllCombinations<`${POST}${PRE}`>}`
      | AllCombinations<POST, `${PRE}${L}`>
  : "";
