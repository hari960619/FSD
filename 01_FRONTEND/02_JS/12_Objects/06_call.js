/* 
Call is a method of an object that can substitute a different object than the one it is written on. 
All functions when created, have this property called call that allows us to call the function.
a() => a.call()
*/

const alpha = {
  name: "Alpha",
  health: 30,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

console.log(alpha.heal(25, 25));

// Now we want this heal method to be used by another object.

const beta = {
  name: "Beta",
  age: 100,
  health: 50,
};

console.log(alpha.heal.call(beta, 10, 10));
