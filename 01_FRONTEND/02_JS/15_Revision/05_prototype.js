// Prototype
// Each Object in JS has a prototype in it and prototype itself is an object in itself.
// All objects inherit their properties from their prototype.
// While creating a constructor function, if it consists of function and it remains constant throughout all the object built using that function then that can be defined in the prototype.

// THE BELOW FUNCTION CANNOT BE ARROW FUNCTION.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.intro = (company) => {
  console.log(
    `Hi I''m ${this.name} of age ${this.age} and I work is ${company}.`
  );
};

const harish = new Person("Harish S", 27);
harish.intro("Amazon");

console.log(harish.constructor);

// Important Note: If you check for properties inside the constructor function it returns true, but a prototype property it returns false.

console.log(harish.hasOwnProperty("name"));
console.log(harish.hasOwnProperty("age"));

console.log(harish.hasOwnProperty("intro"));

// The reason we call everything in JS as object is because of the properties they get access which is hidden in the prototype.
// The above is known  as prototype chain and ends up to null.
// Not just methods anything can be added in prototype i.e,

Person.prototype.college = "GAT";
console.log(harish.hasOwnProperty("college"));

// If the above property is in constructor function then that value given priority and if it is provided in the arguments then arguments will be given the highest priority.
// Also when a property is called and that property exists in both prototype and constructor then constructor is given priority.
