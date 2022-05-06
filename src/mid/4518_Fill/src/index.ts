/*
  4518 - Fill
  -------
  by キリサメ qianxi (@qianxi0410) #medium #tuple
  
  ### Question
  
  `Fill`, a common JavaScript function, now let us implement it with types.
  `Fill<T, N, Start?, End?>`, as you can see,`Fill` accepts four types of parameters, of which `T` and `N` are required parameters, and `Start` and `End` are optional parameters.
  The requirements for these parameters are: `T` must be a `tuple`, `N` can be any type of value, `Start` and `End` must be integers greater than or equal to 0.
  
  ```ts
  type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
  ```
  In order to simulate the real function, the test may contain some boundary conditions, I hope you can enjoy it :)
  
  > View on GitHub: https://tsch.js.org/4518
*/

/* _____________ Your Code Here _____________ */

export type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Res extends any[] = [],
  Change = false
> = T extends [infer F, ...infer R]
  ? Res['length'] extends End
    ? Fill<R, N, Start, End, [...Res, F], false>
    : Res['length'] extends Start
    ? Fill<R, N, Start, End, [...Res, N], true>
    : Change extends true
    ? Fill<R, N, Start, End, [...Res, N], Change>
    : Fill<R, N, Start, End, [...Res, F], Change>
  : Res
