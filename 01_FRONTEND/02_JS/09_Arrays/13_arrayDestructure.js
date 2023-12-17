const arrDestructure = [1, "a", true, ["abc", "def"], { name: "Abc", age: 27 }];

const [number, string, boolean, array, object] = arrDestructure;
console.log(number);
console.log(string);
console.log(boolean);
console.log(array);
console.log(object);
