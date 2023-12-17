console.log(typeof 37);
console.log(typeof 3.14);

console.log(Math.LN2);
console.log(Math.LN10);
console.log(typeof Math.LN2);

console.log(typeof Infinity);
console.log(typeof NaN); // Despite not being a Number

// Converting into Numbers
console.log(typeof Number("1"));

console.log(Number("shoe"));
console.log(typeof Number("shoe"));

console.log(typeof 42n);

console.log(5 + undefined);
console.log(5 + null);
console.log(typeof (5 + undefined));
console.log(typeof (5 + null));

// Converting String to Number using an "+" and "-" Operator. But prefer "+" only.
let num = "10";
console.log(typeof +num);
console.log(typeof -num);

// CANNOT CONVERT ARRAY AND OBJECT TO NUMBER
console.log(Number([1, 2, 3]));
console.log(Number({ a: 1, b: 2 }));
