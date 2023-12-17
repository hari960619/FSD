// MATH METHODS
// PI VALUE
// SQUARE ROOT
// Minimum Number
// Maximum Number
// Random Number: Gives a value from 0 to 1
// Absolute Value
// Rounding the value to lower value: floor
// Rounding the value to higher value: ceil

// PI VALUE
console.log(Math.PI);

const number = 7.5;
// SQUARE ROOT
console.log(Math.sqrt(number));

// Minimum Number
console.log(Math.min(1, 50, 11, 47));

// Maximum Number
console.log(Math.max(1, 50, 11, 47));

// Random Number: Gives a value from 0 to 1
console.log(Math.random());
// The output value will be less than 5.
console.log(Math.random() * 5);
// We can fix the decimal digits
console.log(Math.random().toFixed(1));
console.log(Math.random().toFixed(3));

// Absolute Value
console.log(Math.abs(-1));
console.log(Math.abs(10));
console.log(Math.abs(7 * -1));

// Rounding the value to lower value.
console.log(Math.floor(5.7));
console.log(Math.floor(Math.random() * 9) + 1);

// Rounding the value to higher value.
console.log(Math.ceil(5.7));
console.log(Math.ceil(Math.random() * 9) + 1);
