function a{
    console.log("Not a Pure Function")
}

// Is that a pure function?
// No, it is not.
// console. log is windows specific.
// We 're using the browser to log something to the browser.
// it's actually affecting the outside world, right?
// So It's logging something to the output of the browser.
// when we call this while we're outputting something out on console.
// So that function has side effects.

function b{
    return "Pure Function"
}

// A pure function has no side effects to anything outside of it and given the same input will always output the same value.
// They do not change any data passed into them, but create new data to return without altering the original.
// However, it is not possible to have 100% pure functions.
// At some point you need to interact with the dom or fetch an api.
// Even console.log makes a function not pure because it uses the window object outside of the function.
// Fact is a program cannot exist without side effects.
// So, the goal of functional programming is to minimize side effects by isolating them away from the data.
// Also a function should not be changing or affecting any global variable.

// Build lots of very small, reusable and predictable pure functions that do the following:
// 1)	Complete 1 task per function.
// 2)	Do not mutate state.
// 3)	Do not share state.
// 4)	Be predictable.
// 5)	Be composable, one input and one output.
// 6)	Be pure if possible.
// 7)	Return something.

// One important concept of functional programming is referential transparency, the ability to replace an expression with the resulting value without changing the result of the program.

