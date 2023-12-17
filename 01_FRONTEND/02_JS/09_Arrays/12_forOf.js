// For of:  It is used on Arrays only and throws an error when tried on object.
const arr = [1, 2, 3, 4, 5];

for (ele of arr) {
  console.log(ele * 10);
}

const nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (i of nestedArr) {
  for (j of i) {
    console.log(j * 1000);
  }
}
