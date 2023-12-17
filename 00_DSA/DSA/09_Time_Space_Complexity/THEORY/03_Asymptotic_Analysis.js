// Asymptotic Analysis
// The idea is to measure order of growth.
// Does not depend upon machine, programming, language or test cases.
// No need to implement, we can analyze algorithm.

// SOLUTION 1 = BEST CODE
// function sumOfN(n) {
//   console.log(n * ((n + 1) / 2));
// }

// Time Taken: O(1)
// WHEN IT COMES ARITHMETIC OPERATIONS, WHATEVER THE VALUE OF 'n' be it takes the same time.
// 'n' can be 100,10000 or more than that but the time taken remains the same.

// SOLUTION 2
// function sumOfN(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }
// Time Taken: O(n)

// SOLUTION 3
// function sumOfN(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       sum++;
//     }
//   }
//   console.log(sum);
// }
// Time Taken: O(n2)

sumOfN(3);
sumOfN(5);
