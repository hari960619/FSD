/* 
Apply: Apply is almost identical to call, except that instead of a comma separated list of arguments, it takes an array of arguments.
*/

const alpha2 = {
  name: "Alpha",
  health: 30,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

console.log(alpha.heal(25, 25));

// Now we want this heal method to be used by another object.

const beta2 = {
  name: "Beta",
  age: 100,
  health: 50,
};

console.log(alpha2.heal.apply(beta2, [10, 10]));

/* Use of Call or Apply should depends at the ease of passing the parameters. 
If the parameters are individual arguments, 
then we can use call or else if the arguments are array then use Apply.  */
