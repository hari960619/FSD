// map
// Map does return a new array. It does not alter the original array.
// Returning a new array means creating a new array.

const arr = [1, 2, 3, 4, 5];
console.log(arr.map((e) => e * 1000));

// Nested Array

const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const output = nestedArray.map((eO) => eO.map((eI) => eI * 1000));
// The output is also an nested Array.
console.log(output);

// Map helps us extract array from an array of objects.

const arrObjs = [
  { name: "Alpha", age: 25 },
  { name: "Beta", age: 35 },
  { name: "Gama", age: 45 },
  { name: "Charlie", age: 55 },
];

const nameArray = arrObjs.map((obj) => obj.name);
const ageArray = arrObjs.map((obj) => obj.age);

console.log(nameArray);
console.log(ageArray);
