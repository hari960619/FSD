// In order to replace a child element you need the parent element too.
// If there are multiple child element, then the entire elements gets replaced.

const pBlk = document.querySelector(".pBlk");
const cBlk = document.querySelector(".cBlk");

const newEle = document.createElement("h1");
newEle.textContent = "Done and Dusted";

pBlk.replaceChild(newEle, cBlk);
