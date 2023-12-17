/* 
    indexOf(value)
const array = [1, 2, 4, 5, 100];
console.log(array.indexOf(100));
console.log(array.indexOf(1000));
*/

// he major difference between indexOf and findIndex is that is
// indexOf returns only if the exact value is present
// findIndex gives us the condition matched element.

const array = [1, 2, 4, 5, 100];
console.log(array.indexOf(100));
console.log(array.indexOf(1000)); // -1 Since the value does not exists

console.log(array.findIndex((e) => e > 5));
console.log(array.findIndex((e) => e > 500)); // -1 Since the value does not exists
