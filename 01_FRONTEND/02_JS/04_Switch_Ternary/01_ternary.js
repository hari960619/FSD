// Ternary Value
// The comparison value can be number, string, boolean, array, object.method or a combo or Truthy or Falsy value
let value = [1, 2];
value.length === 2 ? console.log("Correct") : console.log("Incorrect");
const len = value.length === 3 ? "Correct" : "Incorrect";
console.log(len);
