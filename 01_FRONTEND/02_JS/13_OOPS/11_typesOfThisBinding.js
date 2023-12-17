// Types of binding of "this" keyword.

// new keyword binding = Factory Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const personA = new Person("Harish S", 27);
console.log(personA);

// implicit binding = Inside an Object
const person2 = {
  name: "Harish S",
  age: 27,
  intro() {
    console.log(`${this.name} is of age ${this.age}.`);
  },
};

person2.intro();

// explicit Binding = connecting a method externally using bind.

const person3 = {
  name: "Harish S",
  age: 27,
  // Use function expression Only
  description: function () {
    console.log("Hi" + this.setTimeout);
  }.bind(window),
};

person3.description();

// arrow binding
const person4 = {
  name: "Harish S",
  age: 27,
  description: function () {
    return () => {
      console.log("Hi" + this.name);
    };
  },
};

person4.description();
