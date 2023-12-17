// Treating function as an Object.
// We are adding a value to the function.
// This is because even Functions are also Objects in JS.
const fun = () => "Functions are also Objects in JS";
console.log(fun());

function a() {
  return "abc";
}

a.harish = 123;

console.log(a.harish);
console.log(a());

console.log(typeof a);
console.log(typeof a.harish);
