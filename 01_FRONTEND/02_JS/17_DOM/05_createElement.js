const div = document.querySelector("#dynamicBlock");
const dBA = document.querySelector("#dBA");

// Create the tagName
const newElement = document.createElement("h1");
// Add the text Content
newElement.textContent = "This is an heading";
// Now append to the div you want.
div.appendChild(newElement);

// Just Creating a function to add elements easily.

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  addElement("h1", "Dynamic Heading", dBA);
});

function addElement(tagName, context, divBlock) {
  const newElement = document.createElement(tagName);
  newElement.textContent = context;
  divBlock.appendChild(newElement);
}
