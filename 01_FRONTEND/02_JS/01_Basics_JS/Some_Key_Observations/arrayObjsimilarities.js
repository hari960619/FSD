// Both array and Object are reference types data types.
// They have the same behaviour.
// The Copy property works the same with Array and Object.
// Spread operator does a shallow copy of the array i.e., it still refers to the same memory location for nested arrays adn objs.

// Array methods alter the original array.
// String methods does not alter the original string, since it is primitive type.

// Compare an array and an obj with similar values and see the results.

const arr1 = [1];
const arr2 = [1];

console.log(arr1 == arr2);
console.log(arr1 === arr2);

const obj1 = { a: "1" };
const obj2 = { a: "1" };

console.log(obj1 == obj2);
console.log(obj1 === obj2);

// Even though the values are same the memory location are being pointed to different places.
// Hence it is false.

// In case of primitive types, JS looks at values.      ==> Pass by Value
// In case of reference types, JS looks at reference.   ==> Pass by Reference

// But how do compare this reference objects to understand they are the same.
console.log(JSON.stringify(arr1) == JSON.stringify(arr2));
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));

console.log(JSON.stringify(obj1) == JSON.stringify(obj2));
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
