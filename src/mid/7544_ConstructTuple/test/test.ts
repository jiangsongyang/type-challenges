/* _____________ Test Cases _____________ */
import { ConstructTuple } from '../src'
import type { Equal, Expect } from '@type-challenges/utils'

type a = ConstructTuple<0>

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]
