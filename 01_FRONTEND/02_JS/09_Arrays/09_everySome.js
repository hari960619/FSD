/* 
Every and Some: A methods which iterates on every value of the array and returns "true" or "false" if it matches the condition.
Similar to Every, some gives "true" if any one of the value is true.
*/

const arr = [1, 2, 3, 4, 5];
console.log(arr.every((e) => e < 10)); // true

const arr2 = [17, 20, 13, 42, 500];
console.log(arr2.some((e) => e < 15)); // true
