/*
  5821 - MapTypes
  -------
  by Krzysztof "Wokay" Łokaj (@wokayme) #medium #map #object #utils
  
  ### Question
  
  Implement `MapTypes<T, R>` which will transform types in object T to different types defined by type R which has the following structure
  
  ```ts
  type StringToNumber = {
    mapFrom: string; // value of key which value is string
    mapTo: number; // will be transformed for number
  }
  ```
  
  ## Examples:
  
  ```ts
  type StringToNumber = { mapFrom: string; mapTo: number;}
  MapTypes<{iWillBeANumberOneDay: string}, StringToNumber> // gives { iWillBeANumberOneDay: number; }
  ```
  
  Be aware that user can provide a union of types:
  ```ts
  type StringToNumber = { mapFrom: string; mapTo: number;}
  type StringToDate = { mapFrom: string; mapTo: Date;}
  MapTypes<{iWillBeNumberOrDate: string}, StringToDate | StringToNumber> // gives { iWillBeNumberOrDate: number | Date; }
  ```
  
  If the type doesn't exist in our map, leave it as it was:
  ```ts
  type StringToNumber = { mapFrom: string; mapTo: number;}
  MapTypes<{iWillBeANumberOneDay: string, iWillStayTheSame: Function}, StringToNumber> // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }
  ```
  
  > View on GitHub: https://tsch.js.org/5821
*/

/* _____________ Your Code Here _____________ */

export type MapTypes<T, R extends { mapFrom: unknown; mapTo: unknown }> = {
  [K in keyof T]: T[K] extends R['mapFrom']
    ? R extends { mapFrom: T[K] }
      ? R['mapTo']
      : never
    : T[K]
}
