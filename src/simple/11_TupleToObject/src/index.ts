/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #easy 
  
  ### Question
  
  Give an array, transform into an object type and the key/value must in the given array.
  
  For example
  
  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  
  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
  
  > View on GitHub: https://tsch.js.org/11
*/

/* _____________ Your Code Here _____________  */

/**
 * 
 *  对于 tuple
 *  可以用 number 作为索引
 *  拿出每一项
 * 
 */

export type TupleToObject<T extends readonly any[]> = {
  [k in T[number]]: k;
};
