/* _____________ Test Cases _____________ */
import { LengthOfString } from '../src'
import type { Equal, Expect } from '@type-challenges/utils'

type a = LengthOfString<'reina'>

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
