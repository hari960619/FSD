const withoutClosure = (index) => {
  const bigArray = new Array(1000).fill("Ola");
  console.log("Array created EACH TIME the function gets executed");
  return `${index} : bigArray[index]`;
};

console.log(withoutClosure(500));
console.log(withoutClosure(700));
console.log(withoutClosure(800));
console.log(withoutClosure(1000));

// In the above function the array gets created every time which is memory consuming.
// This can be avoided with closure.

const withClosure = () => {
  const bigArray = new Array(1000).fill("Ola");
  console.log("Array created ONLY ONCE");
  return (index) => {
    return `${index} : bigArray[index]`;
  };
};

const shortCut = withClosure();
// The array is created and stored in the variable ie., in the memory.
console.log(shortCut(500));
console.log(shortCut(700));
console.log(shortCut(800));
console.log(shortCut(900));
