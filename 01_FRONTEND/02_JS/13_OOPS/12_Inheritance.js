// Inheritance

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  intro() {
    console.log(`Hi, My name is ${this.name} and my age is ${this.age}`);
  }
}

const harish = new Person("Harish S", 27);
harish.intro();

const copyHarish = { ...harish };
console.log(copyHarish);
copyHarish.name = "Alpha";
copyHarish.age = 1000;

// You can notice that we have the name and age getting changed.
console.log(copyHarish);
// But this changes does not effect the function which uses "this" to get it's value.
// Also it throws an error saying that the function "intro" does not exist.
// copyHarish.intro();

// The above is because:
console.log(harish.__proto__); // You get the Person class as the __proto__ value.

console.log(copyHarish.__proto__); // window object close to null

console.log(harish instanceof Person); //true
console.log(copyHarish instanceof Person); //false

// This above issue was resolved using the "extends" keyword which helps us work with inheritance.

// Remember
// Instance is created by using the "new" keyword.
// Inheritance is achieved by using the "extends" keyword.
// In Inheritance the properties don't get copied but gets linked up the chain.
