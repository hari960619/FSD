//Variables declared through var and also function can be accessed before them being "initialized".
// However we cannot access values defined by "var" before initializing.
// var, let and const:

console.log(varVariable); //undefined
functionCall(); // "Function Called before Initialized"

// console.log(letVariable); // Uncaught ReferenceError: Cannot access 'letVariable' before initialization.
// console.log(constVariable); // Uncaught ReferenceError: Cannot access 'constVariable' before initialization.

var varVariable = "Hello";

function functionCall() {
  console.log("Function Called before Initialized");
}

let letVariable = 1;
const constVariable = "a";

// REMEMBER ARROW FUNCTION DOES NOT GET HOISTED.
// THEY THROW UNDEFINED.
