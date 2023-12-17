// Functional programming has the same goals in mind as object-oriented programming,
// to keep your code understandable, easy to extend, easy to maintain, memory efficient, and DRY.
// Instead of objects, it uses reusable functions to create and act on data.
// Functional program is based on a separation of concerns similar to object-oriented programming.
// However, in functional programming there is a complete separation between the data and the behaviour of a program.
// There is also an idea that once something is created, it should not be changed, being immutable.
// Unlike OOP, shared state is avoided functional programming works on the idea of pure functions.

// Let us take an example of Array.
// As we know array is a reference type.
// Any changes to the array we will modify the original array.

const array1 = [1, 2, 3, 4, 5];
function removeOneElement() {
  return array1.pop();
}

removeOneElement();
console.log(array1);

function addOneElement(ele) {
  return array1.push(ele);
}

addOneElement(1000);
console.log(array1);

// Now the above is not the desired way of FP since it modify the original array.

function removeOneElementFP() {
  const newArray = [].concat(array1);
  console.log(newArray);
  console.log(newArray.pop());
  return newArray;
}

console.log(removeOneElementFP());
console.log(array1);

function addOneElementFP(ele) {
  const newArray = [].concat(array1);
  console.log(newArray);
  console.log(newArray.push(ele));
  return newArray;
}

console.log(addOneElementFP(9999));
console.log(array1);

// Notice in the above the original array did not get modified.
