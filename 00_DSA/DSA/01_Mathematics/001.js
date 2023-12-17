// a) Introduction to JavaScript
// Prime Number or Not ?
/* function checkPrime(num) {
  let isPrime = true;
  for (i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
console.log(checkPrime(2));
console.log(checkPrime(10));
console.log(checkPrime(7));
console.log(checkPrime(13)); */

// Fibonacci Series
/* function findFiboValue(num) {
  let a = 0,
    b = 1;
  for (i = 1; i < num; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  console.log(b);
}
findFiboValue(15);
findFiboValue(3); */

// Print all multiples of a num between 1 to 100
/* function printMultiples(num) {
  for (i = 1; i <= 100; i++) {
    if (i % num === 0) {
      console.log(i);
    }
  }
}
printMultiples(7);
printMultiples(100); */

// Print a new string which concatenate along with its length.
/* function printStr(str1, str2) {
  console.log(str1 + str2, (str1 + str2).length);
}
printStr("Hello", "World"); */

// b) Strings
// Find how many times a given char (both upper and lower) occur in the input string.
/* function findChar(str, char) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }
  console.log(count);
}
findChar("Hello, My name is Harish S.", "a");
findChar("Hello, My name is Harish S.", ",");
findChar("Hello, My name is Harish S.", " ");
findChar("Hello, My name is Harish S.", "."); */

// Toggle alphabets to Opposite Cases.
/* function toggleCase(str) {
  let emptyStr = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      emptyStr += str[i].toUpperCase();
    } else {
      emptyStr += str[i].toLowerCase();
    }
  }
  console.log(emptyStr);
}
toggleCase("aBcDeFgH"); */

// Check if a given string only contains digits.
/* function checkStr(str) {
  let isNumber;
  isNaN(Number(str)) ? (isNumber = false) : (isNumber = true);
  return isNumber;
}
console.log(checkStr("123"));
console.log(checkStr("Hello123"));
console.log(checkStr("Ola")); */

// Write a function to insert a string at the specified position (index) in another string.
// If the position exceeds the length of the string, append and the end.
/* function addStrValue(str, value, pos) {
  let emptyStr = "";
  if (pos >= str.length) return str + value;
  for (i = 0; i < str.length; i++) {
    if (i === pos) {
      emptyStr += value;
      emptyStr += str[i];
    } else {
      emptyStr += str[i];
    }
  }
  return emptyStr;
}
console.log(addStrValue("abce", "d", 3));
console.log(addStrValue("abce", "d", 30)); */

// c) Coding Questions
// Implement a function to validate an email address as per the following rules.
/* function validateEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    return true;
  } else {
    return false;
  }
}
console.log(validateEmail("abc@xyz.com"));
console.log(validateEmail("abc.com")); */

// Factorial of a number.
/* function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(3)); */

// Given two version numbers A and B, compare them and print 1 || 0 || -1.
/* function compareNumbers(verA, verB) {
  let num1 = verA.split("."),
    num2 = verB.split(".");
  let n = Math.max(verA.length, verB.length);
  for (i = 0; i < n; i++) {
    let value1 = parseInt(num1[i]) || 0;
    let value2 = parseInt(num2[i]) || 0;

    if (value1 < value2) {
      return 1;
    } else {
      return -1;
    }
  }
  return 0;
}
console.log(compareNumbers("1.0.1", "1.0.12")); */

// Write a program to shift all letters in a string by N places in the alphabet.
/* function increaseCharCode(str, n) {
  let emptyStr = "";
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      emptyStr += str[i];
    } else {
      if (str[i] === str[i].toLowerCase()) {
        if (str[i].charCodeAt() + n > 122) {
          emptyStr += String.fromCharCode(str[i].charCodeAt() + n - 122 + 96);
        } else {
          emptyStr += String.fromCharCode(str[i].charCodeAt() + n);
        }
      } else {
        if (str[i].charCodeAt() + n > 90) {
          emptyStr += String.fromCharCode(str[i].charCodeAt() + n - 90 + 64);
        } else {
          emptyStr += String.fromCharCode(str[i].charCodeAt() + n);
        }
      }
    }
  }
  return emptyStr;
}
console.log(increaseCharCode("wxYZ123", 5));
console.log(increaseCharCode("xyz123", 1)); */

// d) Arrays,Objects & Functions

// Write a JavaScript program which takes the string as an input and checks if it is palindrome string or not.
/* function palindrome(s) {
  let revStr = "";
  for (i = s.length - 1; i >= 0; i--) {
    revStr += s[i];
  }
  if (s === revStr) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("eye"));
console.log(palindrome("eyE")); */

// Fibonacci Series using Recursion.
/* function recursionFibonacci(num) {
  if (num <= 1) {
    return 1;
  }
  return recursionFibonacci(num - 1) + recursionFibonacci(num - 2);
}
console.log(recursionFibonacci(3)); */

// Create two arrays from an Object using for in.
/* let itemsToBuy = {
  milk: {
    quantity: 5,
    price: 20,
  },
  bread: {
    quantity: 2,
    price: 15,
  },
  potato: {
    quantity: 3,
    price: 10,
  },
};
let itemNamesArr = [];
let itemPricesArr = [];
for (let item in itemsToBuy) {
  itemNamesArr.push(item);
  itemPricesArr.push(itemsToBuy[item].price);
}
console.log(itemNamesArr);
console.log(itemPricesArr); */

// e) Arrays, Objects & Functions - Part 2

// Remove all duplicates from an array and return the new array.
/* function dedupe(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
}
dedupe([1, 2, 3, 1, 4, 4, 5]); */

// Find all negative numbers in a 2D array of numbers and return the array of all negative numbers as result.
/* function findNegatives(matrix) {
  let negNumbers = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        negNumbers.push(matrix[i][j]);
      }
    }
  }
  return negNumbers;
}
console.log(
  findNegatives([
    [1, 2, 3],
    [4, -5, 6],
    [-7, -8, 9],
  ])
); */

// Given an array rotate the array to the left by k steps, where k is a non-negative integer. Please note that this needs to be done in place, i.e., the same input array itself needs to be rotated without creating a new array as a result.
/* function rotate(arr, k) {
  for (let i = 0; i < k; i++) {
    let ele = arr.shift();
    arr.push(ele);
  }
  return arr;
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); */

// f) Classes in JS

// Which of the following properties can help determine a class’s name?
/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const hari = new Person("Harish S", 26);
console.log(hari.constructor.name); */

/* Properties of a class that can only be accessed from within a member function of the class and not externally are called _________.
Answer: Private Fields

What does the "this" keyword normally refer to within a prototype method?
Answer: It refers to the instance of the class.

What does the "super" keyword refer to?
Answer: It refers to the constructor, fields and the methods of the superclass. It can be used to access fields and methods of the superclass from inside prototype methods. */

// Predict the output of the following code snippet.
/* class MyClass1 {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    console.log(this.name);
  }
}
const obj = new MyClass1("World");
MyClass1.hello(); */

// Answer: MyClass
// this.name is inside a static function effectively refers to the name property of the class itself.

// Predict the output of the following code snippet.
/* class MyClass {
  hello() {
    console.log(this.greeting);
  }
}
const a = new MyClass();
const b = new MyClass();
MyClass.prototype.greeting = "Hello"; */
// b.hello();
// Answer: Hello;
// The greeting property is defined in the prototype of MyClass, hence it is shared among all instances of the class, even if they have been created before the property was defined. Hence, "Hello" will be printed.

// Predict the output of the following code snippet.
/* class Primate {
  eat() {
    console.log(this.name + " eats food");
  }
}
class Human extends Primate {
  constructor(name) {
    super();
    this.name = name;
  }
}
const john = new Human("John"); */
// john.eat();
// Answer: John eats food
// During instantiation of the 'john' object, the name field will be set to 'John', which will be used in the eat function, which will be invoked in the context of John.

//  Create a class to represent a circle and accept its radius as user input. Implement a method to calculate the area of the circle.
/* class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    let value = Math.PI * this.radius * this.radius;
    return value;
  }
} */

// Create a class to model a task that contains a task description and status as private fields. The status of a task can be one of 'TODO', 'ACTIVE' and 'DONE'. Add getters and setters for the task 'description' and 'status'.
/* function createTask(description, status) {
  class Task {
    constructor(description, status) {
      this._description = description;
      this._status = status;
    }
    set description(value) {
      this._description = value;
    }
    set status(value) {
      if (value === "TODO" || "ACTIVE" || "DONE") {
        this._status = value;
      } else {
        console.log("Please enter a valid Status");
      }
    }
    get description() {
      return this._description;
    }
    get status() {
      return this._status;
    }
  }
  // Create and return a new task instance
  return new Task(description, status);
} */
// Implement a class to represent a stack data structure for numbers. A stack is a first-in last-out data structure. It should expose three methods:
//1) push: adds an item to the stack
// 2) pop: removes an item from the stack. If the stack is empty, calls to pop should return null.
// 3) tos (top-of-stack): returns the value at the top of the stack without removing it. Top of the stack means the last element or the element with the highest index.

/* class MyStack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  tos() {
    return this.items[this.items.length - 1];
  }
}
const stack = new MyStack(); */
// stack.push(1);
// stack.push(2);
// stack.push(3);

// Problem Statement: Implement a class with a constructor that takes in a single parameter, a number N. The class exposes a single method: next, which returns the next positive integer starting from N, every time it is called.
// Input Format: A number, can be positive or negative.

/* class MyCounter {
  // Write your code here
  constructor(N) {
    this.number = N;
  }
  next() {
    return this.number++;
  }
}
const num = new MyCounter(2); */
// console.log(num.next());

// Problem Statement: Implement a class to represent a queue for numbers. A queue is a first-in first-out data structure. It should expose three methods: enqueue, dequeue and size; the enqueue method adds a value to the queue and the dequeue extracts a value from the queue. If the queue is empty, calls to dequeue should return null, the size method returns the total numbers of elements in the queue.
/* class MyQueue {
  constructor() {
    this.queueArray = [];
  }
  enqueue(item) {
    this.queueArray.push(item);
  }
  dequeue() {
    return this.queueArray.shift();
  }
  size() {
    if (this.queueArray.length === 0) {
      return null;
    }
    return this.queueArray.length;
  }
}
const queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.size()); */

// OOPS in JS
// What is the output of the following code?
/* class MyClass3 {}
const obj2 = new MyClass3(); */
// console.log(obj2 instanceof Object); // true

// The following statements is linked to the concept of encapsulation?
// Answer:
// An object has an internal state that stores data and properties specific to the object.
// An object has an interface of methods that can be used to modify its internal state.
// The internal state of the object is typically made private and its interface public.

// What is the output of the following code?
/* class MyClass4 {}
const obj4 = new MyClass4();
console.log(MyClass.prototype === obj.__proto__); */ //true

// What is the output of the following code?
/* const obj5 = {
  name: "John",
  hello: function () {
    console.log("Hello " + this.name);
  },
};
const helloFn = obj5.hello; */
// helloFn(); //Hello undefined.

// What is the output of the following code?
/* function hello() {
  console.log("Hello " + this.name);
}
const jack = {
  name: "Jack",
};
const helloFn2 = hello.bind(jack); */
// helloFn2(); //Hello jack.

// What is the output of the following code?
/* class A {
  hello() {
    console.log("A");
  }
}
class B extends A {
  hello() {
    console.log("B");
  }
}
const obj6 = new B();
obj6.hello(); //B */

// What is the output of the following code?
/* function fn() {
  console.log("I am a function");
}
console.log(fn instanceof Function); */ //true

// What is the output of the following code?
/* function fn3() {
  console.log("I am a function");
}
console.log(fn3 instanceof Object); */ //true

// Ways to achieve inheritance in JavaScript?
// Prototypal inheritance
// Pseudoclassical inheritance
// Functional inheritance

// Which of the following is not valid for fields and methods in a JavaScript class?
// Protected

// Problem Statement: Define a class Shape that has a method called perimeter. Extend the Shape class to create two more classes Circle and Rectangle with their own implementation of the perimeter method. Note that the perimeter of a rectangle is 2 * (length + breadth) whereas the perimeter of a circle is 2 * pi * radius.
// Input Format: The length and breadth of a rectangle and the radius of a circle.
/* class Shape {
  perimeter() {}
}
class Rectangle extends Shape {
  constructor(length, breadth) {
    super();
    this.length = length;
    this.breadth = breadth;
  }
  perimeter() {
    return 2 * (this.length + this.breadth);
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  perimeter(radius) {
    return 2 * Math.PI * this.radius;
  }
}
const rec1 = new Rectangle(2, 3);
console.log(rec1.perimeter());
const cir1 = new Circle(5);
console.log(cir1.perimeter()); */

// Problem Statement: Define a class for a shopping cart item that has a price attribute. The user will input the name and price of different item and write a program to add these items to a shopping cart class and calculate the total price of these items.
/* class ShoppingCartItem {
  constructor(itemName, itemPrice) {
    this.itemName = itemName;
    this.itemPrice = itemPrice;
  }
}
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }

  totalPrice() {
    return this.items.reduce((acc, i) => {
      acc += i.itemPrice;
      return acc;
    }, 0);
  }
}
let item1 = new ShoppingCartItem("Abc", 1000);
let item2 = new ShoppingCartItem("Def", 5000);
let cart = new ShoppingCart();
cart.addItem(item1);
cart.addItem(item2);
console.log(cart.totalPrice()); */

// Problem Statement(Linked List): Implement a linked list data structure for integers.A linked list is a linear data structure consisting of nodes containing a value and a pointer to the next node. The last node in the chain points to null. Define a class Node with a value and a next attribute. Accept values as user input, construct the linked list and then print the list in a specified way by overriding the toString function of the Node class.

// Problem Statement: Define a Point class to store x and y coordinates of a point in 2D space.Implement a method getDistance to calculate the distance between this point and another point.The shortest distance between two points (x1, y1) and (x2, y2) is determined by the following formula: square root of ((y1-y2)^2+(x1-x2)^2).
/* class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getDistance(b) {
    let x1 = this.x,
      y1 = this.y;

    let x2 = b.x,
      y2 = b.y;

    let yDistance = (y1 - y2) * (y1 - y2);
    let xDistance = (x1 - x2) * (x1 - x2);

    return Math.sqrt(yDistance + xDistance);
  }
}
let p1 = new Point(-1, 1);
let p2 = new Point(2, -2);
console.log(p1.getDistance(p2)); */

// Problem Statement: Create a class that models a bank account. It should accept an initial balance and have methods for debit and credit. It should also expose a method to display the current balance at any time. Input Format: The starting balance of the account and a series of transactions, denoted by Cr for credit and Dr for debit, e.g., Dr 1000
/* class BankAccount {
  constructor(startingBal) {
    this.startingBal = startingBal;
    this.totalDebit = 0;
    this.totalCredit = 0;
  }
  debit(method, amount) {
    if (method === "Dr") {
      this.totalDebit += amount;
    }
  }
  credit(method, amount) {
    if (method === "Cr") {
      this.totalCredit += amount;
    }
  }
  getBalance() {
    return this.startingBal - this.totalDebit + this.totalCredit;
  }
}
let hari = new BankAccount(1200);
hari.credit("Cr", 200);
hari.credit("Cr", 300);
console.log(hari.getBalance()); */

// Hoisting, Scope and Closure.

/* What is the output of the following code?
function fun() {
  let a2 = 5;
  if (a2 > 0) {
    var a2 = 3;
  }
  console.log(a2);
   fun(); //Syntax Error: Since var declarations are hoisted, it will clash with the ‘let a’ declaration on the first line of the function. As a result, this will result in a syntax error.
} */

// What is the output of the following code?
/* function createEmployeeID() {
  var prefix = "employee";
  return generateID();
}
var generateID = function () {
  for (var i = 0; i < 5; i++) {
    console.log(prefix + i);
  }
};
var print = createEmployeeID();
// Uncaught ReferenceError: prefix is not defined
// The anonymous function present inside the variable ‘generateID’ is not written inside the function ‘createEmployeeID()’.
// It is just called inside the function ‘createEmployeeID()’.
// The scopes of both of these functions are different.
// This is why the variable ‘prefix’ (declared inside the function named ‘createEmployeeID’) is not present inside the scope of the function ‘generateID’.  */

// What is the output of the following code?
/*  var a = 7;
function test() {
  var a = 9;
}
test();
console.log(a);    7
Variable ‘a’ inside the ‘test’ function has its scope limited to this function only.
Line 1 will try to access variable ‘a’, which is defined globally.
The value of variable ‘a’ in global scope is 7, which gets printed on the console.  */

// What is the output of the following code?
/*  var side = 5;
console.log(calculateArea(side));
console.log(calculateVolume(side));
Function to calculate area of a square
function calculateArea(side) {
  return side * side;
} 
Function to calculate volume of a square
 var calculateVolume = function (side) {
  return side * side * side;
}; 
 NEVER KNOW: You cannot create a function expression using var. */

// What is the output of the following code?
/* hello();
const hello = function () {
  console.log("Hello world!");
};
NEVER KNOW: Although function declarations are hoisted, this would be applicable for the anonymous function in this case, and the reference variable hello cannot be used before its declaration as it is declared with const, which is not hoisted. */

// What is the output of the following code?
/* var name = "A";
function fn() {
  console.log(name);
  var name = "B";
}
 fn();  undefined : Although the variable name inside the function fn will hide the one outside, it is still hoisted to the first line of the function where it is only declared with the value undefined and the assignment of the string 'B' happens after the console.log statement. */

// Write a curried add function, i.e., a function that can sum any numbers but it can only be invoked with one argument at a time. When called with no arguments it returns the final sum. For example, to add the numbers 1,2,6 and 7 we would invoke the add function like this: add(1)(2)(6)(7)()
/* function add(n) {
  let sum = n;
  function addNext(m) {
    if (m === undefined) {
      return sum;
    }
    sum += m;
    return addNext;
  }
  return addNext;
}
console.log(add());
console.log(add(1)(2));
console.log(add(1)(2)()); */

// Callbacks
/* let orderId = null;
let placeOrder = (callback) => {
  console.log("Placing order");
  setTimeout(() => {
    orderId = "101";
    callback(orderId);
  }, 2000);
};
let printOrderID = (orderId) => {
  console.log("Order ID = " + orderId);
};
placeOrder(printOrderID());   // We are calling the function instead of passing it as arguments.

In which of the following ways does JavaScript implement asynchronous programming?
By making use of the task queue

Which of the following is an example of higher-order functions in JavaScript?
Array.prototype.map

Which of the following is not an advantage of using higher-order functions?
It helps in running multiple operations in parallel. */
