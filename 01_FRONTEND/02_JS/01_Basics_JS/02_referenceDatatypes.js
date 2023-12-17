/* 
Reference Data Types:
1)	Accessed by reference.
2)	Objects are stored in the heap.
3)	A pointer is pointed to location in the memory. 
*/

const arr = [1, 2, 3];
const obj = {
  name: "Harish S",
  age: 25,
  married: false,
  friends: ["a", "b", "c"],
  edu: {
    scl: "CHS",
  },
};
const fun = () => "Functions are also Objects in JS";

console.log(arr);
console.log(obj);
console.log(fun());
