// Toggle is a part of click. Toggle add and removes changes but it needs to be clicked.
// Toggle can be added at places where an add or remove provision is given.
// ClassList had that provision which provided this option.

document.querySelector("#ccBtn").addEventListener("click", () => {
  document.querySelector("#ccText").classList.toggle("bg");
});

document.querySelector("#ctBtn").addEventListener("click", () => {
  //   console.log("Hello");
  document.querySelector("#ctText").classList.toggle("color");
});
