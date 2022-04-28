/* _____________ Test Cases _____________ */
import { EndsWith } from '../src'
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
]
