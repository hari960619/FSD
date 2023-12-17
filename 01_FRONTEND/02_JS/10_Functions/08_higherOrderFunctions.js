// function multiply(num1) {
//   return function (num2) {
//     return num1 * num2;
//   };
// }
const multiply = (num1) => (num2) => num1 * num2;
console.log(multiply(2)(4));

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(1));
console.log(multiplyBy2(2));
console.log(multiplyBy2(3));
console.log(multiplyBy2(4));
console.log(multiplyBy2(5));

const multiplyBy5 = multiply(5);
console.log(multiplyBy5(1));
console.log(multiplyBy5(2));
console.log(multiplyBy5(3));
console.log(multiplyBy5(4));
console.log(multiplyBy5(5));
