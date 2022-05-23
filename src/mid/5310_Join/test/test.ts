/* _____________ Test Cases _____________ */
import { Join } from '../src'
import type { Equal, Expect } from '@type-challenges/utils'

type a = Join<['a', 'p', 'p', 'l', 'e'], '-'>

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
]
