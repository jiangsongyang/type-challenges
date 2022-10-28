/*
  9155 - ValidDate
  -------
  by ch3cknull (@ch3cknull) #hard 
  
  ### Question
  
  Implement a type `ValidDate`, which takes an input type T and returns whether T is a valid date.
  
  **Leap year is not considered**
  
  Good Luck!
  
  ```ts
  ValidDate<'0102'> // true
  ValidDate<'0131'> // true
  ValidDate<'1231'> // true
  ValidDate<'0229'> // false
  ValidDate<'0100'> // false
  ValidDate<'0132'> // false
  ValidDate<'1301'> // false
  ```
  
  > View on GitHub: https://tsch.js.org/9155
*/

/* _____________ Your Code Here _____________ */

type one2nine = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type zero2nine = "0" | one2nine;

type thirty = `0${one2nine}` | `1${zero2nine}` | `2${zero2nine}` | "30";
type thirtyone = thirty | "31";
type twentyeight = Exclude<thirty, "30" | "29">;

type DateMap = {
  "01": thirtyone;
  "02": twentyeight;
  "03": thirtyone;
  "04": thirty;
  "05": thirtyone;
  "06": thirty;
  "07": thirtyone;
  "08": thirtyone;
  "09": thirty;
  "10": thirtyone;
  "11": thirty;
  "12": thirtyone;
};

export type ValidDate<T extends string> = T extends ""
  ? false
  : T extends `${infer F}${infer S}${infer D}`
  ? `${F}${S}` extends keyof DateMap
    ? D extends DateMap[`${F}${S}`]
      ? true
      : false
    : false
  : never;
