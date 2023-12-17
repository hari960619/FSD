const human = {
  mortal: true,
};

const alpha = Object.create(human);
console.log(alpha);
console.log(alpha.mortal);
console.log(human);
console.log(human.mortal);
alpha.kills = 100;
console.log(alpha);

console.log(human.isPrototypeOf(alpha));

// Only Functions have prototype
function fun() {
  return 100;
}

console.log(fun.prototype); //{constructor: ƒ}

// Object
console.log(human.prototype); // undefined

// Array
console.log([1, 2, 4].prototype); // undefined
