// classList and className

const ele = document.querySelector(".cls");

console.log(ele.className);
console.log(ele.classList);

// ClassName replaces the old classNames.
// ClassName does not provide the benefit or adding or removing a class.
// If an element has multiple classNames, then className gives the output as a string.

ele.className = "newClassName";
console.log(ele.className);
ele.className = "newClassNameAgain";
console.log(ele.className);

// classList helps us with both adding and removing option.
console.log(ele.className);
ele.classList.remove("newClassNameAgain");
console.log(ele.className); // Its removed HERE.

ele.classList.add("Alpha", "Beta", "Gamma");

console.log(ele.className);
console.log(typeof ele.className);

console.log(ele.classList);
console.log(ele.classList[0]);
console.log(ele.classList[1]);
console.log(ele.classList[2]);

ele.classList.remove("Alpha", "Gamma");
console.log(ele.classList);
console.log(ele.classList[0]);
console.log(ele.classList[1]);

// Additionally classList also gives an option to check if a class exists.
console.log(ele.classList.contains("Beta"));
console.log(ele.classList.contains("beta")); // Case sensitive

console.log(ele.classList.contains("Alpha"));
