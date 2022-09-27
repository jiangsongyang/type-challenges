/*
  956 - DeepPick
  -------
  by hiroya iizuka (@hiroyaiizuka) #hard #deep
  
  ### Question
  
  Implement a type DeepPick, that extends Utility types `Pick`.
  A type takes two arguments.
  
  
  For example:
  
  ```
  
  type obj = {
    name: 'hoge', 
    age: 20,
    friend: {
      name: 'fuga',
      age: 30,
      family: {
        name: 'baz',  
        age: 1 
      }
    }
  }
  
  type T1 = DeepPick<obj, 'name'>   // { name : 'hoge' }
  type T2 = DeepPick<obj, 'name' | 'friend.name'>  // { name : 'hoge' } & { friend: { name: 'fuga' }}
  type T3 = DeepPick<obj, 'name' | 'friend.name' |  'friend.family.name'>  // { name : 'hoge' } &  { friend: { name: 'fuga' }} & { friend: { family: { name: 'baz' }}}
  
  ```
  
  > View on GitHub: https://tsch.js.org/956
*/


/* _____________ Your Code Here _____________ */

type UnionToIntersection<U> = (U extends U
  ? (args: U) => void
  : never) extends (args: infer R) => void
    ? R
    : never;

type DeepPickHelp<O extends Record<string, any>, K> = K extends K
  ? K extends `${infer FirstKey}.${infer RestKey}`
    ? FirstKey extends keyof O
      ? {
        [Key in keyof O as Key extends FirstKey ? Key : never]: DeepPickHelp<O[Key], RestKey>
      }
      : never
    : K extends keyof O 
      ? {
        [Key in keyof O as Key extends K ? Key : never]: O[Key]
      }
      : never
  : never


  export type DeepPick<O extends Record<string, any>, K, SK = K> = [K] extends [''] 
  ? unknown
  : '' extends K
    ? UnionToIntersection<DeepPickHelp<O, Exclude<SK, ''>>> & unknown
    : UnionToIntersection<DeepPickHelp<O, K>>







