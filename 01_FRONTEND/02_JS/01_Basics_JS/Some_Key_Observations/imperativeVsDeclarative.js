// Imperative programming tells the computer what to do and how to complete it.
// Declarative programming only tells the computer what to do, but not how to do things.
// Humans are declarative by nature, but computers typically need more imperative type programming.
// However, using higher level languages like JavaScript is actually being less declarative.
// This is important in function programming because we want to be more declarative to better understand our code and let the computer handle the dirty work of figuring out the best way to do something.

// Imperative
for (i = 0; i < 5; i++) {
  console.log(i);
}

// declarative
[1, 2, 3].forEach((e) => console.log(e));
