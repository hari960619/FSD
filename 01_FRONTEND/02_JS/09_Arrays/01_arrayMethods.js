// REMEMBER STRING IS A "REFERENCE DATA TYPE".
// ANY METHOD GETTING APPLIED WITH TREATED AS "PASS BY REFERENCE", HENCE THE ORIGINAL ARRAY DOES GET "AFFECTED".
// length
// push(value) & pop()
// unshift(value) & shift()
// splice(index) || splice (indexStart,indexEnd) || Add an element
// concat([second array])
// reverse()
// Array.isArray([array])
// indexOf(value)
// sort(a,b)
// includes(value)
// flat(number of iterations)
// Creating a array from str.

const arr1 = [1, 2, 3, 4];
const arr2 = [10, 20, 30];

// ADDING OR REMOVING FROM BOTH START AND END ALTERS THE ARRAY.
// IN ORDER TO SEE IT WE HAVE CONSOLE IT SEPARATELY.
// THE LOG VALUE FOR "ADDING" METHOD BE IT ON EITHER AT THE START OR END IS THE "length" value;
// THE LOG VALUE FOR "REMOVING" METHOD BE IT ON EITHER AT THE START OR END IS THE "Value of the element removed";

// PUSH(+) & POP(-)
//ADDING AND REMOVING ELEMENT FROM THE END.
console.log(arr1.length);
console.log(arr1.push("element @ index 5"));
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

// UNSHIFT(+) & SHIFT(-)
//ADDING AND REMOVING ELEMENT AT THE START.
console.log(arr2.length);
console.log(arr2.unshift("element @ index 5"));
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);

//SPLICE : ALTERS THE ORIGINAL ARRAY.
// IT IS A REFERENCE DATA TYPE.
// PASS BY REFERENCE THINGY.
// IF ONE INDEX IS PROVIDED THEN IT ALTERS THE ORIGINAL ARRAY BY CREATING A NEW FROM "THAT INDEX PROVIDED" TILL THE "LAST INDEX".
console.log(arr1.splice(1));
console.log(arr1);
// IF TWO INDEX IS PROVIDED THEN IT ALTERS THE ORIGINAL ARRAY BY CREATING A NEW FROM "THAT INDEX PROVIDED" TILL THE "SECOND INDEX VALUE".
console.log(arr2.splice(1, 2));
console.log(arr2);
// WE CAN ADD AN ELEMENT USING SPLICE, THE ELEMENT TO BE ADDED SHOULD BE GIVEN AS 3RD ELEMENT.
console.log(arr2.splice(0, 1, "Newly added"));
console.log(arr2);

// CONCAT
console.log(arr1.concat(arr2));

//REVERSE
console.log(arr1.reverse());

// FINDING AN ARRAY
// The below method just helps us understand that using an object method still we can create a Array.
// However in JS since everything is an object, we cannot confirm it is a proper array or not.
// Hence we resort to "Array.isArray()" method which helps us to confirm whether it is an array or not with a boolean value.
const arrayA = [1, 2, 3];
const arrayB = {
  0: "a",
  1: "b",
  2: "c",
};

console.log(typeof arrayA);
console.log(typeof arrayB);

console.log(Array.isArray(arrayA));
console.log(Array.isArray(arrayB));

// indexOf(value)
const array = [1, 2, 4, 5, 100];
console.log(array.indexOf(100));
console.log(array.indexOf(1000));

// Sorting of array having strings
const strArr = ["b", "d", "e", "z", "a"];
console.log(strArr.sort());
console.log(strArr.sort().reverse());
console.log(strArr);

// Sorting of array having boolean
const booArr = [false, true, false, true];
console.log(booArr.sort());
console.log(booArr.sort().reverse());
console.log(booArr);

// Sorting of array having number
const numArr = [100, 200, 21, 7, 40];
console.log(numArr.sort((a, b) => a - b));
console.log(numArr.sort((a, b) => b - a));
console.log(numArr);

// Sorting of array having arrays
const arrsArr = [
  [10, 20],
  [30, 40],
  [1, 2],
  [4, 5],
];
// console.log(arrsArr.sort((a, b) => b - a));
// The above is not ideal.

// When we are sorting an array of objects, when need to have an id value.
// Using name sorting technique will not work.
// As sort will not be sort a string which is a key value.
const arrOfObjs = [
  { id: 3, name: "z" },
  { id: 1, name: "b" },
  { id: 2, name: "a" },
];
console.log(arrOfObjs.sort((a, b) => a.id - b.id));

// includes(value)
const arrNew = [1, 2, 4, 100];
console.log(arrNew.includes(1));
console.log(arrNew.includes(1000));

// flat(number of iterations)
const arrFlat = [
  [1],
  [
    [2, 3],
    [4, 5],
  ],
  [[[6, 7, 8]]],
];

console.log(arrFlat.flat());
console.log(arrFlat.flat(1));
console.log(arrFlat.flat(2));
console.log(arrFlat.flat(3));

// Creating a array from str.
const str = "abc";
console.log([...str]);
