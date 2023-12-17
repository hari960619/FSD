// If a key inside an object does not have a value and the key name matches with a variable in the global scope then
// object key takes the value from the global until the value of key is defined again.
// The same does not occur in other scopes.
// Just in case if a similar key is not present in the global scope,
// then when we access the key from the object then it logs undefined.

let age = 100;
let married = true;

let person = {
  name: "Harish S",
  age,
  married,
};

console.log(person.name);
console.log(person.age);
console.log(person.married);

console.log(person.valueNotPresent);
