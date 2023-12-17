/* 
When we write HTML and view it in the browser, the browser turns into DOM, in DOM each element becomes an object or node.
What is a Window Object and how we operate console.dir?
	A way for the browser to give us options to work with the browser API, which includes methods and properties that we can use to access the browser and work with it.
The window refers to the current tab we are working in.
Window Object = Browser API
*/

console.log(window);

const getId = document.getElementById("getById");
console.log(getId);
console.log(document.getElementById("getById").textContent);

console.log(document.getElementsByTagName("h4")[0].textContent);
console.log(document.getElementsByTagName("h4")[1].textContent);

console.log(document.getElementsByClassName("getElementByClass"));
// console.log(document.getElementsByClassName("getElementByClass")[0].textContent);
// console.log(document.getElementsByClassName("getElementByClass")[1].textContent);
// console.log(document.getElementsByClassName("getElementByClass")[2].textContent);

console.log(document.querySelector(".qs").tagName);
console.log(document.querySelector(".qs").textContent);

console.log(document.querySelectorAll(".qsAll"));
// console.log(document.querySelectorAll(".qsAll")[0].textContent);
// console.log(document.querySelectorAll(".qsAll")[1].textContent);
// console.log(document.querySelectorAll(".qsAll")[2].textContent);
