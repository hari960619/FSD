// In JavaScript it is best for speed and efficiency to keep functions small and reusable.
// Function composition is the idea that you lay out your functions like a factory assembly line.
// The actual functions pipe () and compose () don't actually exist in JavaScript yet, but there are many libraries that use them.
// You can however create your own versions of them. The compose () function reads the functions from right to left and the pipe () function will read from left to right.

let composePipe = (fun1, fun2, fun3) => (value) => fun1(fun2(fun3(value)));

let operationSquare = (n) => n * n;
let operationCube = (n) => n * n * n;
let absValue = (n) => Math.abs(n);

let cubeOfSquaredNegativeNumber = compose(
  operationCube,
  operationSquare,
  absValue
);

console.log(cubeOfSquaredNegativeNumber(-2));

let squareOfCubedNegativeNumber = compose(
  operationCube,
  operationSquare,
  absValue
);

console.log(squareOfCubedNegativeNumber(-2));

/* 
Composition is what we just did with FP, creating small reusable functions to make code modular. 
Inheritance is what we did with OOP, creating a class and extending it to subclasses that inherit the properties. 
In OOP we create few operations on common data that is stateful with side effects. 
In FP we create many operations on fixed data with pure functions that don't mutate state. 
There is a big debate over which one is better and most people believe that composition is better.

Inheritance: Person example with extends keyword
Composition: Amazon Cart Example.

*/
