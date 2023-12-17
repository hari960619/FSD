// NOT SOLVED
// Given a quadratic equation in the form ax2 + bx + c. Find its roots.
// formula : (-b + Math.sqrt(b**2 - 4ac))/2 & (-b - Math.sqrt(b**2 - 4ac))/2
/* function quadraticRoots(a, b, c) {
  let value1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2;
  let value2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2;
  if (value2 > value1) console.log(value2, value1);
  console.log(value1, value2);
}
quadraticRoots(1, -2, 1);
quadraticRoots(1, -7, 12); */

// SOLVED
// You are given an integer I, find the absolute value of the integer I.
/* function absValue(I) {
  if (I > 0) {
    return I;
  } else return -1 * I;
}
console.log(absValue(-1));
console.log(absValue(17)); */

// Given a temperature in celsius C. You need to convert the given temperature to Fahrenheit.
/* function fahrenheit(C) {
  let f = C * 1.8 + 32;
  return f;
}
console.log(fahrenheit(48));
console.log(fahrenheit(50)); */

// Given an integer N. Find the number of digits that appear in its factorial. Factorial is defined as, factorial(n) = 1*2*3*4……..*N and factorial(0) = 1.
/* function digitsInFactorial(N) {
  if (N < 0) return 0;
  if (N === 0 || N === 1) return 1;
  let value = 0;
  for (let i = N; i >= 1; i--) {
    // console.log(value);
    value += Math.log10(i);
  }
  return Math.ceil(value);
}
console.log(digitsInFactorial(-7));
console.log(digitsInFactorial(0));
console.log(digitsInFactorial(5));
console.log(digitsInFactorial(100));
console.log(digitsInFactorial(8468)); */
