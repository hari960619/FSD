// Logical compares two or more conditions.
// You wont apply these logical operators in loops.
// You apply it only on if else, ternary.
const a = 1;
const b = "a";

if (a === 1 && b === 2) {
  console.log("Both Match the condition");
} else if (a === 1 || b === "z") {
  console.log("One is correct");
}

a === 1 && b === "a"
  ? console.log("Both Match")
  : console.log("Both Don't Match");
