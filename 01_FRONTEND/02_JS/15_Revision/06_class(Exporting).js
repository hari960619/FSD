// Class
// Classes come in handy when you want to use properties of a constructor function,
// extend it and use it as another whole together function with prototype reference as the previous function.
// Constructor function and prototype written together is called Classes.
// The class is very similar to that of the class in JAVA.
// The static methods just like java here too does not depend on the instance but on the class.

// We can create a class in another file and import it.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.work = function (company) {
      console.log(`I work @ ${company}.`);
    };
  }
  gang(friendA, friendB) {
    console.log(`My friends are ${friendA} and ${friendB}.`);
  }
  static add(a, b) {
    return a + b;
  }
}

// Class can also accept prototype
Person.prototype.status = (status) => {
  return `I not married which is ${status}.`;
};

export default Person;
