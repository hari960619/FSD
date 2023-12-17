// Sum of N natural numbers.

// SOLUTION 1 = BEST CODE
function sumOfN(n) {
  console.log(n * ((n + 1) / 2));
}

// SOLUTION 2
// function sumOfN(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }

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

sumOfN(3);
sumOfN(5);
