/* Almost "everything" is an object in JS. 
1.	Booleans can be objects (if defined with the new keyword)
2.	Numbers can be objects (if defined with the new keyword)
3.	Strings can be objects (if defined with the new keyword)
4.	Dates are always objects
5.	Maths are always objects
6.	Regular expressions are always objects
7.	Arrays are always objects
8.	Functions are always objects
9.	Objects are always objects */

// Boolean
console.log(typeof false);

const boo = new Boolean(false);
console.log(typeof boo);
console.log(typeof new Boolean(true));

// Number
console.log(typeof 1);

const num = new Number(1);
console.log(typeof num);
console.log(typeof new Boolean(2));

// String
console.log(typeof "a");

const str = new String("A");
console.log(typeof str);
console.log(typeof new String("B"));

// Function
function a() {
  return "abc";
}
a.harish = 123;
console.log(a.harish);
console.log(a());
