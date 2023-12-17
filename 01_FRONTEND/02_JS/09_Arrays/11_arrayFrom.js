// Array from returns an array object from any object with a length property or an iterable object.
// Basically it works on "string" and "array".

// Number : Length property does not exist
const num = 123;
console.log(num.length); //undefined
console.log(Array.from(num)); //[]

// Boolean : Length property does not exist
const boo = true;
console.log(boo.length); //undefined
console.log(Array.from(boo)); //[]

// Object : Length property does not exist
const obj = { name: "abc", age: 12 };
console.log(obj.length); //undefined
console.log(Array.from(boo)); //[]

// String : Length exists
const str = "Hello";
console.log(str.length); //5
console.log(Array.from(str)); //['H', 'e', 'l', 'l', 'o']

// Array : Length exists
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); //5
console.log(Array.from(arr)); // [1, 2, 3, 4, 5]
// It works well with nested arrays.
const nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(Array.from(nestedArr)); //[Array(3), Array(3), Array(3)]
console.log(Array.from(nestedArr[0])); //  [1, 2, 3]
console.log(Array.from(nestedArr[1])); //  [4, 5, 6]
console.log(Array.from(nestedArr[2])); //  [7, 8, 9]
