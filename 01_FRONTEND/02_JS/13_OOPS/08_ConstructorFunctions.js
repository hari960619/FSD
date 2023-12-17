// Constructor Function
// Using Object.create is true prototypal inheritance, the code is cleaner and easier to read.
// However, you will not see this being used in most programs.
// Before Object.create came around, we had the ability to use constructor functions.
// Constructor functions are exactly like the function constructor we talked about above.
// The number and string functions were constructed and invoked with the new keyword and they were capitalized.
// The new keyword actually changes the meaning of this for the constructor unction.
// Without new, this will point to the window object instead of the object that we just created.
// It is best practice to capitalize constructor functions to help us identify them and know to use the new keyword.
// Properties added to a constructor function can only be done using this keyword, regular variables do not get added to the object.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const harish = new Person("Harish S", 27);
console.log(harish.name);
console.log(harish.age);

// Object.create got a better shortcut here
// DO NOT USE ARROW FUNCTION SINCE THEY ARE LEXICALLY SCOPED.
// USE REGULAR FUNCTION WHICH IS DYNAMICALLY SCOPED.

Person.prototype.description = function () {
  console.log(`Hi I'm {this.name} and my age is ${this.age}`);
};

Person.prototype.langs = function (lang) {
  console.log(`I'm good in ${lang}.`);
};

harish.description();
harish.langs("Kannada");

// And the "new" keyword automatically returns an Person object for us and it creates this Person constructor.
// We've created a new object, and because this function is called a new execution context is created.
// because this is a function that we're running in a new execution context is created,
// that means we automatically get the "this" variable attached to it.
// The interesting thing, though, is that when we use the "new" keyword.
// Instead of this pointing to the window object like it usually does,
// the new keyword changes, what "this" is pointing to when a new execution context is created.
// Instead, the new keyword will say, Hey, I want you to point this to the object that we just created.
// So that this now becomes harish.
// And if we remove new and run we cannot read property name since the this points to window Object.
// So it is very important that we use the new keyword, which is why we want to use the capital letters.
// It is to indicate to other programmers, Hey, we need to use the new keyword, otherwise it's not going to work.
// Why this is so powerful is that because this is a function.
// Remember, every function in JavaScript gets automatically a prototype property.
// Functions are special type of objects in JavaScript.
// Prototypes are useless when it comes to regular function but in case of Constructor function they play a big role.

// LITTLE UNDERSTANDING OF HOW EVERYTHING IN JS IS AN OBJECT.

const a = new Number(5);
console.log(typeof a);
const b = 5;
console.log(typeof b);
console.log(a === b);
console.log(a == b);

// Now b is a number which we notice.
// We want to convert this number to String.
console.log(b.toString());
// How could we do it, it is not a Object to apply any . methods ?
// Answer is JS understands we want to use Object methods.
// Hence it creates a object just like in line 55 using the "new" keyword.
// The same works in the new Date() object also.
