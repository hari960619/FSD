// Factory Function returns an object which returns object containing methods in it.

const parentDiv = document.querySelector("#factoryFunctionDemo");
const refEle = document.querySelector("#refElement");

const factoryFunction = (type) => {
  const element = document.createElement(type);
  return {
    createText(text) {
      element.textContent = text;
    },
    addColor(color) {
      element.style.color = color;
    },
    insertElement() {
      parentDiv.insertBefore(element, refEle);
    },
  };
};

const heading = factoryFunction("h1");
heading.createText("Dynamically Created Heading");
heading.addColor("red");
heading.insertElement();

// const paragraph = factoryFunction("p");
// heading.createText("Dynamically Created Paragraph");
// heading.addColor("green");
// heading.insertElement();
