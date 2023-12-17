// Reduce reduces the values in the array to a single value, the value can be number, array, object.
// In the callback function instead of 1 parameter it expects two parameters i.e.,
// Accumulator (total of all calculation) and current iterator.
// The final value gets returned.

// We can a accumulator with a default value as a number, string, array, object.

// Default as number
const num = [10, 20, 30, 40, 50];
console.log(
  num.reduce((accumulator, iterator) => {
    accumulator += iterator * 100;
    return accumulator;
  }, 0)
);

// Default as string
const str = ["a", "b", "c"];
console.log(
  str.reduce((a, i) => {
    a += ` ${i} `;
    return a;
  }, "My friends are ")
);

// Default as array
const num2 = [10, 20, 30, 40, 50];
const newArray = num2.reduce((accumulator, iterator) => {
  accumulator.push(iterator * 100);
  return accumulator;
}, []);
console.log(newArray);

// Default array with some values
const expArray = [99, 98, 97];
const newArray2 = num2.reduce((accumulator, iterator) => {
  accumulator.push(iterator * 100);
  return accumulator;
}, expArray);

console.log(newArray2);

// Default as an object

const arrObjs = [
  { name: "Alpha", age: 25 },
  { name: "Beta", age: 35 },
  { name: "Gama", age: 45 },
  { name: "Charlie", age: 55 },
];
// Only the final name gets retained.
// replacing all the other names.
console.log(
  arrObjs.reduce((acc, i) => {
    acc.name = i.name;
    return acc;
  }, {})
);
