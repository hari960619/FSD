// Closures allow a function to access variables from an enclosing scope or environment even after it leaves the scope in which it was declared.
// In other words, a closure gives you access to its outer functions scope from the inner scope.
// The JavaScript engine will keep variables around inside functions that have a reference to them,
// instead of "sweeping" them away after they are popped off the call stack i.e.,
// after execution i.e., functions get removed from the call stack along with the variables defined in that scope.
// But somehow the inner functions have accessed to outer functions even after being popped off the stack.

// Closures are lexically scoped.
// Hence all the variables that are reference in the child functions will be stored and the ones that are not referenced will be garbage collected.

// Two of the major reasons closures are so beneficial are memory efficiency and encapsulation.
// Uses of Closures:
// 	1) Memory Efficient : AN EXAMPLE WITH THE CODE IS WRITTEN in "11_closuresMemoryEfficientEx.js"
//  2) Encapsulation: Encapsulation means the restriction of direct access to some of an object's components.
//      It hides as much as possible of an object's internal parts and only exposes the necessary parts to run. Why we use encapsulation?
//          1)	Security - Controlled access
//          2)	Hide Implementation and Expose Behaviors
//          3)	Loose Coupling - Modify the implementation at any time

// Closures using Regular Functions
// function a() {
//   const grandPa = "Narayana Rao";
//   return function father() {
//     const father = "Sridhar N";
//     return function son() {
//       const son = "Harish S";
//       return `${grandPa} >> ${father} >> ${son}`;
//     };
//   };
// }

// Closures using Arrow Functions
const a = () => {
  const grandPa = "Narayana Rao";
  return () => {
    const father = "Sridhar N";
    return () => {
      const son = "Harish S";
      return `${grandPa} >> ${father} >> ${son}`;
    };
  };
};

console.log(a());
console.log(a()());
console.log(a()()());

// Now let us see the what happens to the values passed as parameter.

const b = (parameterA) => {
  console.log(parameterA);
  return (parameterB) => {
    console.log(parameterA);
    console.log(parameterB);
    return (parameterC) => {
      console.log(parameterA);
      console.log(parameterB);
      console.log(parameterC);
      return `${parameterA} >> ${parameterB} >> ${parameterC}`;
    };
  };
};

b("Outside1");
b("Outside1")();
b("Outside1")()();

b("Outside2")("Middle2");
b("Outside2")("Middle2")();

b("Outside3")("Middle3")("Inside3");

console.log(b("Outside3")("Middle3")("Inside3"));
