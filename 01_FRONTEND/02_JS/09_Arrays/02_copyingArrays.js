// Not a "right" method to copy
const arr = [1, 2, 3, 4];
console.log(arr);
const badCopy = arr;
console.log(badCopy);
// Making changes in badCopy affects the original Object
badCopy[4] = "OH NOO!!!";
console.log(badCopy);
console.log(arr);

// Shallow Copy: Good Copy
const arr2 = [1, 2, 3, 4, [1, 2]];
const shallowCopy = [...arr2];
console.log(shallowCopy);
//Making Changes in good copy
shallowCopy[5] = "OH NOO!!!";
console.log(shallowCopy);
console.log(arr2);
//ADDING INSIDE A NESTED ARRAY
shallowCopy[4][2] = "OH NOO NESTED";
console.log(shallowCopy);
console.log(arr2);
// COPYING TWO ARRAYS INTO ONE, WITH ADDING EXTRA VALUES.
const arrA = [1, 2];
const arrB = [5, 6];
const finalArr = [...arrA, 3, 4, ...arrB];
console.log(finalArr);

// Deep Copy
const arr3 = [1, 2, 3, 4, [10, 20]];
console.log(JSON.stringify(arr3));
console.log(JSON.parse(JSON.stringify(arr3)));
const deepCopy = JSON.parse(JSON.stringify(arr3));
deepCopy[5] = "OH NOO!!!";
console.log(deepCopy);
console.log(arr3);
// ADDING INSIDE A NESTED ARRAY
deepCopy[4][2] = "OH NOO NESTED";
console.log(deepCopy);
console.log(arr3);
