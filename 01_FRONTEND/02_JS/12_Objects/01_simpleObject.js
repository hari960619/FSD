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

console.log(obj);
console.log(obj.string);
console.log(obj.number);
console.log(obj.boolean);
console.log(obj.array);
console.log(obj.object);
console.log(obj.functionName());

// We can obtain the keys, values and both using the Object feature.
// The Output we get will be in the form of array.
console.log(Object.keys(obj));
console.log(Object.values(obj));
// Entries nest each key:value pair in an array nested in one main array.
console.log(Object.entries(obj));

// Accessing a object key value using [].
console.log(obj["boolean"]);
console.log(obj["object"]);
console.log(obj["array"]);

// Applying forEach on Object keys.
Object.keys(obj).forEach((key) => {
  console.log(obj[key]);
});

//Entries give both key and value in the form of array
Object.entries(obj).forEach((property) => {
  console.log(property);
});

// Nullish Coalescing Operator
console.log(obj?.array ?? "Array not found");
console.log(obj?.array[1] ?? "Index 1 not found");
console.log(obj?.object?.a ?? "'a' value not found");
