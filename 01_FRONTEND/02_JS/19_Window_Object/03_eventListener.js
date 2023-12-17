const btn = document.querySelector("#clickEvent");

btn.addEventListener("dblclick", (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.class); // class won't work
  console.log(e.target.classList); // returns a DomTokenList
  console.log(e.target.innerText);
  e.target.textContent = "I'm Changed";
  console.log(e.target.innerText);

  console.log(e.type);
  console.log(e.timeStamp);

  // Relative to window in px
  console.log(e.clientX);
  console.log(e.clientY);

  // Relative to element in px
  console.log(e.offsetX);
  console.log(e.offsetY);
});
