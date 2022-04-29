/* _____________ Test Cases _____________ */
import { OmitByType } from '../src'
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type A = OmitByType<Model, boolean>

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<Equal<OmitByType<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>>,
]

