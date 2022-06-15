/* _____________ Test Cases _____________ */
import { UnionToIntersection } from '../src'
import type { Equal, Expect } from '@type-challenges/utils'

type a = UnionToIntersection<'foo' | 42 | true>

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]