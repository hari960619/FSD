let val1 = 10;
// +=
console.log((val1 += 10));
// -=
console.log((val1 -= 10));
// *=
console.log((val1 *= 10));
// /=
console.log((val1 /= 10));

// Postincrement & Postdecrement: Logging the value immediately is not helpful.
// From the next line we get the increment or decremented value.
let val2 = 20;

console.log(val2++);
console.log(val2);

console.log(val2--);
console.log(val2);

// Preincrement & Predecrement: Logging the value immediately gives the increment or decremented value.
// From the next line we get the increment value.
let val3 = 30;

console.log(++val3);
console.log(val3);

console.log(--val3);
console.log(val3);

// Modules Operator

console.log(51 % 100);
