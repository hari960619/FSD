// Filter
// It Does return a new array.
// The new array created can differ from the size of the original array.
// It does not modify the values inside the arrays.

const arr = [1, -3, 7, 9, 5];
console.log(arr.filter((e) => e >= 5));

const arr2 = [
  [1, 4],
  [6, 8, 10],
  [9, 5, 7, 3],
];
// You can't apply to the elements but you can apply filter to the lengths of the Array.

console.log(arr2.filter((e) => e.length === 4));

const arrObjs = [
  { name: "Alpha", age: 25 },
  { name: "Beta", age: 35 },
  { name: "Gama", age: 45 },
  { name: "Charlie", age: 55 },
];

console.log(arrObjs.filter((p) => p.age >= 45));
