const arr = [1, 2, 3, 4, 5];
const [fE, sE, ...rOA] = arr;
// The below 2 values gives individual Item
console.log(fE);
console.log(sE);
// The value of the remaining values will be in the form of an array.
console.log(rOA);
