// For Each
// Does not return a new array, also does not alter the old array.

const arr = [1, 2, 3, 4, 5];
const odd = [];
const even = [];

arr.forEach((e) => {
  if (e % 2 === 0) {
    // console.log("even");
    even.push(e);
  } else {
    // console.log("odd");
    odd.push(e);
  }
});

console.log(odd);
console.log(even);

// Nested Array

const nestedArray = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

const m3 = [];
const not3 = [];

nestedArray.forEach((eO) => {
  eO.forEach((eI) => {
    if (eI % 3 === 0) {
      //   console.log("Multiple of 3");
      m3.push(eI);
    } else {
      //   console.log("Not a Multiple of 3");
      not3.push(eI);
    }
  });
});

console.log(m3);
console.log(not3);

// forEach taking 3 arguments

const array3 = [1, 2, 3];
array3.forEach((element, index, entireArray) => {
  console.log(element);
  console.log(index);
  console.log(entireArray);
  entireArray.forEach((e) => {
    console.log(e);
  });
});
