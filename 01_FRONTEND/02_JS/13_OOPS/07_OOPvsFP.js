// OOP
// Object Oriented Programming, or OOP, is the idea that all code should be grouped into "boxes" (objects) to make your program easier to read and understand.
// Keeping the data encapsulated helps to keep the program organized.
// Each object has a state that defines what it does and methods(functions on an object) that can use or modify the state.
// Considering almost everything in JavaScript is an object, you would think this would be easy to do.
// Say we want to create a game that has lots of characters that all have different abilities.How would we go about this ?

const oopA = {
  name: "Alpha",
  age: 27,
  description() {
    console.log(`Hi I'm {this.name} and my age is ${this.age}`);
  },
  langs(lang) {
    console.log(`I'm good in ${lang}.`);
  },
};

const oopB = {
  name: "Beta",
  age: 37,
  description() {},
  langs(lang) {
    console.log(`I'm good in ${lang}.`);
  },
};

oopA.langs("Kannada");
oopB.langs("Telugu");

// FP
// As you can see, this code is already getting very repetitive and is not maintainable with only 1 character type.
// Imagine adding more characters, things would get out of control quickly.
// So, another way to create objects was introduced, factory functions.
// Factory functions return a new object every time they are ran. This could improve the code somewhat.
// Factory Function: A function that return an object.

function factoryFun(name, age) {
  return {
    name,
    age,
    description() {
      console.log(`Hi I'm {this.name} and my age is ${this.age}`);
    },
    langs(lang) {
      console.log(`I'm good in ${lang}.`);
    },
  };
}

const harish = factoryFun("Harish S", 27);
harish.langs("Kannada");

const balu = factoryFun("Balu", 37);
harish.langs("Telugu");

// Let us understand the problem with the above code.
// Just in case if we create 1000 people.
// We will have 1000 name, 1000 age,   recorded in the memory which is OK!!!.
// But the 1000 description function and 1000 langs function is getting repeated 1000 times too. This is a dent in the memory space.

// This can be achieved using Object.create method.
// firstly separate the function code that is getting repeated.
// Create a new Object using these functions.
const functionStore = {
  description() {
    console.log(`Hi I'm {this.name} and my age is ${this.age}`);
  },
  langs(lang) {
    console.log(`I'm good in ${lang}.`);
  },
};

const createPerson = function (name, age) {
  const newPerson = Object.create(functionStore);
  newPerson.name = name;
  newPerson.age = age;
  return newPerson;
};

// Can we do the above addition of function manually
// We can but it is too much work.

// Inside of line 75 we can do:
// newPerson.description = functionStore.description;
// newPerson.langs = functionStore.langs;

const lokesh = createPerson("Lokesh K", 35);
console.log(lokesh);
lokesh.description();
lokesh.langs("Tamil");
