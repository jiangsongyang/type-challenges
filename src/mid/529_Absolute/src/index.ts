/*
  529 - Absolute
  -------
  by Andrey Krasovsky (@bre30kra69cs) #medium #math #template-literal
  
  ### Question
  
  Implement the `Absolute` type. A type that take string, number or bigint. The output should be a positive number string
  
  For example
  
  ```ts
  type Test = -100;
  type Result = Absolute<Test>; // expected to be "100"
  ```
  
  > View on GitHub: https://tsch.js.org/529
*/

/* _____________ Your Code Here _____________ */

type Zero = 0 | -0 | '0' | '-0'

export type Absolute<T extends number | string | bigint> = T extends Zero
  ? '0'
  : `${T}` extends `-${infer Rest}`
  ? `${Rest}`
  : `${T}`
