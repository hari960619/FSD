console.clear(); // Clears the Console

console.log("Just LOGGING the info in the console.");

console.error("Logs the value as ERROR !!!");

console.warn("Logs the value as WARNING !!!");

console.time("Calculate My Time");
setTimeout(() => {
  console.log("Just Creating a Delay");
  console.timeEnd("Calculate My Time");
}, 5000);

// console.timeEnd("Calculate My Time");
// Putting this line outside will not find the time since setTimeout is async.
