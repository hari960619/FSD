// Find
// Returns only one and first instance that matches the condition.
// If no match found it returns undefined.
// Great for getting uniques values.
// The returned elements must be the same element, we cannot find existence of an object using find.

const findNum = [1, 2, 40, 6];
const value = ["abc", "defgh", "defg"];

console.log(findNum.find((e) => e > 20));
console.log(value.find((e) => e.includes("defg")));

// Just like filter with find we can;t work with nested arrays.

const arr2 = [
  [1, 4],
  [6, 8, 10],
  [9, 5, 7, 3],
];
// You can't apply to the elements but you can apply filter to the lengths of the Array.

console.log(arr2.find((e) => e.length === 4));

const arrObjs = [
  { name: "Alpha", age: 25 },
  { name: "Beta", age: 35 },
  { name: "Gama", age: 45 },
  { name: "Charlie", age: 55 },
];

console.log(arrObjs.find((p) => p.age >= 45));
