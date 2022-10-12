/*
  2828 - ClassPublicKeys
  -------
  by jiangshan (@jiangshanmeta) #hard #utils
  
  ### Question
  
  Implement the generic `ClassPublicKeys<T>` which returns all public keys of a class.
  
  For example:
  
  ```ts
  class A {
    public str: string
    protected num: number
    private bool: boolean
    getNum() {
      return Math.random()
    }
  }
  
  type publicKyes = ClassPublicKeys<A> // 'str' | 'getNum'
  ```
  
  > View on GitHub: https://tsch.js.org/2828
*/


/* _____________ Your Code Here _____________ */

export type ClassPublicKeys<T> = keyof T






