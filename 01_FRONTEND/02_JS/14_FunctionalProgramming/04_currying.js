const multiply = (a, b) => a * b;

const curryMultiply = (a) => (b) => a * b;

const mulBy2 = curryMultiply(2);
const mulBy5 = curryMultiply(5);

console.log(mulBy2(2));
console.log(mulBy5(2));
