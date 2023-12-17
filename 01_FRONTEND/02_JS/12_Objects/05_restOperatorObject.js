let obj = {
  string: "ABC",
  number: 45,
  boolean: true,
  array: [1, 2, 3],
  object: {
    a: 1,
    b: "a",
  },
  functionName: () => {
    return "Function";
  },
};

const { string, number, ...rOO } = obj;
// The below 2 values gives individual Item
console.log(string);
console.log(number);
// The value of the remaining values will be in the form of an Object.
console.log(rOO);
