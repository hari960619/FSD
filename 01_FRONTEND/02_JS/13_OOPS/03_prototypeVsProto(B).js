const obj = { greet: "Ola" };
console.log(obj.hasOwnProperty("greet"));

console.log(obj.hasOwnProperty("hasOwnProperty"));
// The obj gets the hasOwnProperty when it moves up the prototype chain.

// we know that call, apply, bind are properties of function.
console.log(obj.hasOwnProperty("call"));
console.log(obj.hasOwnProperty("apply"));
console.log(obj.hasOwnProperty("bind"));

//Explanation of the above phenomenon
function multi5(num1) {
  return function (num2) {
    return num1 * num2;
  };
}
console.log(multi5.prototype); // {constructor: f}
console.log(multi5.__proto__); // f ( ) { [native code] }
// The reason we are unable to check call, apply, bind in hasOwnProperty is
// The proto of the multi5 is linked to prototype of function(moving up the chain) .
// This function prototype has call, apply, bind which we are able to use but not check as property.
// Now this function proto is linked to Object prototype which has hasOwnProperty.
// The object proto is connected to null.
// The entire above explanation is shown in the IMG2.
