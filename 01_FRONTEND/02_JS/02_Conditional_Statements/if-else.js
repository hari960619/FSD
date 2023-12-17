const val1 = true;

if (val1) {
  console.log("True");
}

const val2 = true;
if (val2) {
  console.log("True");
} else {
  console.log("false");
}

const val3 = "123";

if (typeof val3 === "number") {
  console.log("number");
} else if (typeof val3 === "string") {
  console.log("string");
}

const val4 = [];

if (val4.length === 0) {
  console.log("Empty Array");
} else if (val4.length % 2 !== 0) {
  console.log("Odd Length Array");
} else {
  console.log("Even Length Array");
}
