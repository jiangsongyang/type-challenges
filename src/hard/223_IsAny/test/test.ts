/* _____________ Test Cases _____________ */
import { IsAny } from '../src'
import type { Equal, Expect } from '@type-challenges/utils'

type a = IsAny<undefined>

type cases = [
  Expect<Equal<IsAny<any>, true>>,

  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
]

