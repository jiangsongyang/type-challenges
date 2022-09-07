/*
  472 - Tuple to Enum Object
  -------
  by Ryo Hanafusa (@softoika) #hard #tuple #template-literal
  
  ### Question
  
  The enum is an original syntax of TypeScript (it does not exist in JavaScript). So it is converted to like the following form as a result of transpilation:
  ```js
  let OperatingSystem;
  (function (OperatingSystem) {
      OperatingSystem[OperatingSystem["MacOS"] = 0] = "MacOS";
      OperatingSystem[OperatingSystem["Windows"] = 1] = "Windows";
      OperatingSystem[OperatingSystem["Linux"] = 2] = "Linux";
  })(OperatingSystem || (OperatingSystem = {}));
  ```
  In this question, the type should convert a given string tuple to an object that behaves like an enum.
  Moreover, the property of an enum is preferably a pascal case.
  ```ts
  Enum<["macOS", "Windows", "Linux"]>
  // -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }
  ```
  If `true` is given in the second argument, the value should be a number literal.
  ```ts
  Enum<["macOS", "Windows", "Linux"], true>
  // -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
  ```
  
  > View on GitHub: https://tsch.js.org/472
*/

/* _____________ Your Code Here _____________ */

export type Enum<
  T extends readonly string[],
  N extends boolean = false,
  R extends object = {}
> = T extends readonly [
  ...infer Rest extends string[],
  infer Last extends string
]
  ? Enum<
      Rest,
      N,
      {
        readonly [key in keyof R | Last as key extends keyof R
          ? key
          : Capitalize<Last>]: key extends keyof R
          ? R[key]
          : N extends false
          ? Last
          : Rest['length']
      }
    >
  : R
