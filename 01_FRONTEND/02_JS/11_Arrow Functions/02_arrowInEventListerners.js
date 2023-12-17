const regBtn = document.querySelector("#regFun");
const arrowBtn = document.querySelector("#arrowFun");

// Regular Function
regBtn.addEventListener("click", function () {
  console.log(this); // Gives the element
  console.log("Regular Function");
});

// Arrow Function
arrowBtn.addEventListener("click", () => {
  console.log(this); // Gives undefined
  console.log("Arrow Function");
});

// Using another function inside these functions.
// just Function names

function regFun() {
  console.log("Direct Function in Regular Function");
}

function arrowFun() {
  console.log("Direct Function in Arrow Function");
}

// regBtn.addEventListener("click", regFun);
// arrowBtn.addEventListener("click", arrowFun);
// Calling these function, will immediately make them run without "click" event occurring.
// regBtn.addEventListener("click", regFun());
// arrowBtn.addEventListener("click", arrowFun());
// You try to inter change the behaviour is the same.
// regBtn.addEventListener("click", arrowFun);
// arrowBtn.addEventListener("click", regFun);

// Suppose you add this function inside the {} of the callback function.
// In that case we have to call them if it is inside.
// Regular Function
regBtn.addEventListener("click", function () {
  regFun();
});

// Arrow Function
arrowBtn.addEventListener("click", () => {
  arrowFun();
});

// INSIDE HTML
// <button id="test" onclick="test()">Testing</button>
// <script>
//   const test = () => {
//     console.log("test")
//   }
// </script>
