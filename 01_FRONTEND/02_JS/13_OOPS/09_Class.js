// Prototype is a little weird and hard to read unless you really understand your prototypal inheritance.
// No one really liked using the prototype way of adding methods, so in ES6 JavaScript gave us the class keyword.
// However, classes in JavaScript are not true classes, they are syntactic sugar.
// Under the hood, it is still using the old prototype method.
// They are in fact just "special functions" with one big difference, functions are hoisted and classes are not.
// You need to declare your class before it can be used in your codebase.
// Classes also comes with a new method, the constructor that creates and instantiates an object created with class.
// Classes are able to be extended upon using the extends keyword, allowing subclasses to be created.
// If there is a constructor present in the extended class, the super keyword is needed to link the constructor to the base class.
// You can check if something is inherited from a class by using the keyword instanceof to compare the new object to the class.

class Person {
  constructor(name, age, maritalStatus) {
    this.name = name;
    this.age = age;
    this.maritalStatus = maritalStatus;
  }
  description() {
    return `Hi, My name is ${this.name} and my age is ${this.age}.`;
  }
}

const harish = new Person("Harish S", 27, false);
console.log(harish.description());

console.log(harish instanceof Person);
console.log(Person instanceof harish); // Uncaught TypeError: Right-hand side of 'instanceof' is not callable.

// The most important point as to why we did "not add description" to the constructor.
// Every time we create an object using new keyword name and age gets memory.
// When we use the new keyword and create or instants of the class,
// The constructor function will start running since each person has an unique name and age.
// But attack is shared by all instances of the class.
// If we moved attack to the constructor.
// That's going to take up memory space, right?
// Instead of creating an attack function from each object, which is what we would do if we added to the constructor.
// we just have one one function in one location that all these instances can access.

// GETTERS AND SETTER
class Triangle {
  constructor(a, b, c) {
    this._sideA = a;
    this._sideB = b;
    this._sideC = c;
  }

  set sideA(value) {
    this._sideA = value;
  }
  set sideC(value) {
    this._sideC = value;
  }
  get sideA() {
    return this._sideA;
  }
  get sideB() {
    return this._sideB;
  }
  get sideC() {
    return this._sideC;
  }
  get type() {
    if (this._sideA === this._sideB && this._sideB === this._sideC) {
      return "equilateral";
    } else if (
      this._sideA === this._sideB ||
      this._sideB === this._sideC ||
      this._sideA === this._sideC
    ) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}
const triOne = new Triangle(3, 3, 3);

// Getting all the sides
console.log(triOne.sideA);
console.log(triOne.sideB);
console.log(triOne.sideC);

console.log(triOne.type);

// Setting sideA and sideC
triOne.sideA = 10;
triOne.sideC = 23;
console.log(triOne.sideA);
console.log(triOne.sideB);
console.log(triOne.sideC);

console.log(triOne.type);

// Trying to set sideB which does not have the set function.
triOne.sideB = 999;
console.log(triOne.sideB);
console.log(triOne.type);

// The above setting does not throw an error but does not work either.
// The value remains the same.
