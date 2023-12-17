// For in: It is used on objects most of the time as it is suitable on objects much better than arrays.

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

for (property in obj) {
  // console.log(obj.property); // Throws undefined.
  // console.log(property); // Gives only the values.
  // console.log(obj[property]); // Gives only the values.
  // console.log(`${property}:${obj[property]}`);   // The array and the object does not get printed properly.
  console.log(property, obj[property]);
}
