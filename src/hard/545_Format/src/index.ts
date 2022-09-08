/*
  545 - printf
  -------
  by null (@Bestmain-YS) #hard #template-literal
  
  ### Question
  
  Implement `Format<T extends string>` generic.
  
  For example,
  
  ```ts
  type FormatCase1 = Format<"%sabc"> // FormatCase1 : string => string
  type FormatCase2 = Format<"%s%dabc"> // FormatCase2 : string => number => string
  type FormatCase3 = Format<"sdabc"> // FormatCase3 :  string
  type FormatCase4 = Format<"sd%abc"> // FormatCase4 :  string
  ```
  
  > View on GitHub: https://tsch.js.org/545
*/

/* _____________ Your Code Here _____________ */

type MapDict = {
  s: string
  d: number
}

export type Format<T extends string> =
  T extends `${string}%${infer M}${infer R}`
    ? M extends keyof MapDict
      ? (x: MapDict[M]) => Format<R>
      : Format<R>
    : string
