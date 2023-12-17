// Understanding the difference between __proto__ and prototype can be quite a confusing concept for JavaScript developers.
// Every function in JavaScript automatically gets a prototype property when it is created that gives it the call, apply, and bind methods.
// It doesn't really do anything with regular functions, but in constructor functions the prototype property allows us to add our own methods to the objects we create.
// The __proto__ property is what creates the link between prototype objects, "the child inherits properties from the parent through the prototype chain".
// Each time a new object is created in JavaScript, it uses the __proto__ getter function to use a built-in constructor function based on what is being created.
// This could be an Array, Boolean, Date, Number, Object, String, Function, or RegExp. Each one has their own separate properties and methods that they inherit from the constructor.

// AN IMAGE IS COPIED IN THE FOLDER WITH NAME: IMG1

// Using __proto__ we are not copying the properties of one object to into another.

const dragon = {
  name: "Alpha",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    console.log(`My name is ${this.name} and i'm a breather of fire !!!`);
  },
};

const lizard = {
  name: "Beta",
  fight() {
    return 1;
  },
};

lizard.__proto__ = dragon;

for (properties in dragon) {
  console.log(properties);
}

for (properties in lizard) {
  if (lizard.hasOwnProperty(properties)) {
    console.log(properties);
  }
}

// Notice very clearly we are not copying the property
// Ideally We should do should not be doing this.
// But it is useful because the object will pointing to the same reference.
