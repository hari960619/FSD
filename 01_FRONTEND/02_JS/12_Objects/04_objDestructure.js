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

let { string, number, boolean, array, object, functionName } = obj;
console.log(string);
console.log(number);
console.log(boolean);
console.log(array);
console.log(object);
console.log(functionName);

// We can give our own names to these object keys i.e.,
let {
  string: str,
  number: num,
  boolean: boo,
  array: arr,
  object: objt,
  functionName: funName,
} = obj;
console.log(str);
console.log(num);
console.log(boo);
console.log(arr);
console.log(objt);
console.log(funName);
