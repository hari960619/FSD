// One of the most important things to learn in being a developer is how to solve errors.
// Writing your programs you have the ability to use the throw "error" keyword to stop the program and handle an error by using a try/catch block
// that has an optional finally block or the.catch() method for asynchronous code.
// Throwing a new error in asynchronous code gets what is called a silent failure if there is no catch block present.
// In synchronous code, if there is no catch statement placed in the code, the runtime will create catch: onerror() and we see the built in JavaScript error message in red.

function fail() {
  try {
    return 5 - a;
  } catch (e) {
    console.log("Error", e);
  } finally {
    console.log("I get printed independent of the result !!!");
  }
}

fail();

// Besides the generic Error constructor, there are seven other built in error constructors.
// a.EvalError - an error with the global function eval().
// b.InternalError - an error in the JavaScript engine is thrown. Usually when something is too large.
// c.RangeError - an error when a numeric variable or parameter is outside of its valid range.
// d.ReferenceError - an error that occurs when referencing something invalid. E.g. When a variable is used before it is declared.
// e.SyntaxError - an error that occurs in parsing, the engine does not understand what is written.
// f.TypeError - an error when a variable is not the correct type.
// g.URIError - an error when encodeURI() or decodeURI() are passed invalid parameters.

// Errors created using the new keyword come with 3 properties:
// 1)name - the name of the error.
// 2)message - the parameter given to the error.
// 3)stack - the stack trace or callback queue when the error occurred that also includes the line and character number where the error happened.

const myError = new Error("Oops");
console.log(myError.name);
console.log(myError.message);
console.log(myError.stack);

// Also Error is class of itself, It can extended to created our own error.
// Because Error is a constructor function, we can use that to extend it and add to it.
// You don't want to reveal parts of your program by allowing an error to give the stack trace and other information to possible bad actors.
// So, you can customize what you want your errors to reveal.

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "Auth Error";
    this.message = "Auth Problem";
    this.fix = "Please Log in";
  }
}

const err = new AuthError("Hello I'm Error");
console.log(err);
console.log(err.name);
console.log(err.message);
console.log(err.fix);
