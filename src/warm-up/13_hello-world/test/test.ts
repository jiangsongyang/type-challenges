/* _____________ 测试用例 _____________ */
import { Expect, Equal } from '@type-challenges/utils'
import { HelloWorld } from '../src'

type test = Expect<Equal<HelloWorld, string>>
