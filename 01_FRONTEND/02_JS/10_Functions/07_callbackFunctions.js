//Callback Functions: Functions that accept another function as parameter are called Higher order Functions.
const product = (a, b) => a * b;
console.log(product(2, 3));

const sum = (cb, a, b) => cb(a, b);

//Using one function inside another function.
console.log(sum(product, 4, 5));
