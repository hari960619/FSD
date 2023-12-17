// Swap variable values using array.

// Swapping 2 variables
let a = 123;
let b = true;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

// Swapping 3 variables
let a2 = 123;
let b2 = true;
let c2 = "a";
console.log("a", a2);
console.log("b", b2);
console.log("c", c2);
[a2, c2, b2] = [c2, b2, a2];
console.log("a", a2);
console.log("b", b2);
console.log("c", c2);
