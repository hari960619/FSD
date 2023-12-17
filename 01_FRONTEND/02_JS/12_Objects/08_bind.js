// Unlike call and apply, bind does not run the method it is used on,
// but rather returns a new "function" that can then be called later.

const alpha3 = {
  name: "Alpha",
  health: 30,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

console.log(alpha.heal(25, 25));

// Now we want this heal method to be used by another object.

const beta3 = {
  name: "Beta",
  age: 100,
  health: 50,
};

const bindingHeal = alpha3.heal.bind(beta3, 10, 10);
console.log(bindingHeal());
