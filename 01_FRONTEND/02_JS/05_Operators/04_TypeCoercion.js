/* 
Type Coercion:
Type coercion is the process of converting one type of value into another. There are 3 types of conversion in JavaScript. 
• to string
• to boolean 
• to number
*/

const num = 1;
const str = '1';

console.log(num == str);
console.log(num === str);

console.log(typeof (num==str));
console.log(typeof (num===str))

// The biggest catch is that in "==" part either one of them converted into another type temporarily.