// Memoized

// let globalCache = {};

// const memoizedBy10 = (n) => {
//   if (n in globalCache) {
//     console.log("Already multiplied");
//     console.log(globalCache);
//     return globalCache[n];
//   } else {
//     console.log("Newly Calculating...");
//     console.log(globalCache);
//     globalCache[n] = 10 * n;
//     return globalCache[n];
//   }
// };

// console.log(memoizedBy10(1));
// console.log(memoizedBy10(1));
// console.log(memoizedBy10(2));
// console.log(memoizedBy10(3));
// console.log(memoizedBy10(4));
// console.log(memoizedBy10(5));
// console.log(memoizedBy10(6));
// console.log(memoizedBy10(7));
// console.log(memoizedBy10(8));
// console.log(memoizedBy10(9));
// console.log(memoizedBy10(10));

// However having a cache valued in the global scope is not recommended.
// let us with closure see how we will be able to tackle this problem.

const memoizedBy10 = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Already multiplied");
      console.log(cache);
      return cache[n];
    } else {
      console.log("Newly Calculating...");
      console.log(cache);
      cache[n] = 10 * n;
      return cache[n];
    }
  };
};

const memoized = memoizedBy10();
console.log(memoized(5));
console.log(memoized(6));
console.log(memoized(5));
