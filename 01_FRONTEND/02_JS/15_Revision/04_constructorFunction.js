// We did not use "this" in neither closure nor Factory Function.
// But in Constructor we will.

// In Javascript a constructor function is used to create an object.
// To create a new object from a constructor function, we use the new keyword.
// It is considered a good practice to capitalize the first letter of your constructor function.

// “this” does not create binding with the object but with the function and due to which we get object and window at times.

const circle = function (radius) {
  this.radius = radius;
  this.area = () => {
    console.log(2 * Math.PI * this.radius);
  };
};

const c1 = new circle(5);
console.log(c1.radius);
c1.area();
