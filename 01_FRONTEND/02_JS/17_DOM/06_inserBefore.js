// In order to insert a child element you need the parent element too.

const pBlk = document.querySelector(".pBlk");
const cBlk = document.querySelector(".cBlk");

const newEle = document.createElement("h1");
newEle.textContent = "Insert Before the existing Child Element";

pBlk.insertBefore(newEle, cBlk);
