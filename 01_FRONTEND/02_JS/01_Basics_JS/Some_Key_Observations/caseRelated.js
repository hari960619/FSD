// while checking the data type use "small_case":
const val3 = "123";
if (typeof val3 === "number") {
  console.log("number");
} else if (typeof val3 === "string") {
  console.log("string");
}

// While converting them into a different Data Type use "CAPITAL_CASE":
console.log(typeof String(1));
console.log(typeof Number("1"));
// After converting when type is checked you will get "small_case".
