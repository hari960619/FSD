// Types of Operator
const str1 = "a";
const str2 = "b";
const num1 = 1;
const num2 = 23;

// "+" operator can add two numbers and also concat two string values.
console.log(str1 + str2);
console.log(num1 + num2);
// The priority level or "+" is towards concatenation.
// i.e., a "number"+"string" = "string"
console.log(1000 + "str");
// Also two numbers in string type can be added but still they get concatenated.
console.log("2" + "5"); // Output type String

// However the other operator work the opposite.
// The priority is given to mathematical operation.
console.log(str1 - str2);
console.log(num1 - num2);
console.log(1000 - "str");
// Even two numbers subtracted gives the difference
console.log("2" - "5"); // Output type Number

console.log(str1 * str2);
console.log(num1 * num2);
console.log(1000 * "str");
console.log("2" * "5"); // Output type Number

console.log(str1 / str2);
console.log(num1 / num2);
console.log(1000 / "str");
console.log("2" / "5"); // Output type Number

// We can also convert a number in string format into a number using the 3 operators.
console.log(1000 + "1000"); // Output type String (Concatenation)

console.log(100 - "1000"); // Output type Number
console.log(1 * "1000"); // Output type Number
console.log(1000 / "1000"); // Output type Number
