// Prototypal Inheritance
// Almost all objects in Javascript pass down properties through a prototype chain.
// We call this chain, prototypal inheritance.
// The child of the object "inherits" properties from its parent.
// All objects in JavaScript are descended from the Object constructor unless deliberately created or altered to not do so.
// The objects inherit methods and properties from Object.prototype.
// The prototype property also has an accessor property called __proto__,
// that creates a link between the current object and points to the object it was created from, the "prototype".

let array = [1, 2, 3];
console.log(array.__proto__); // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(array.__proto__.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

function a() {
  console.log("Hello");
}
console.log(a.__proto__); //ƒ () { [native code] }
console.log(a.__proto__.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

const obj = {};
console.log(obj.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// Now let us use these proto feature and copy features into another object.
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

// Now let use the __proto__ feature and replicate the properties from one object into another.
// Notice we cannot "over write" the properties present in the object.

lizard.__proto__ = dragon;
console.log(lizard.fire);
console.log(lizard.fight());
lizard.sing();

console.log(dragon);
console.log(lizard);

console.log(dragon.isPrototypeOf(lizard));
console.log(lizard.isPrototypeOf(dragon));
