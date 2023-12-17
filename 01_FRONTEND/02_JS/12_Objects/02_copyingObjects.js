// Not a "right" method to copy
const obj = {
  name: "abc",
  age: 30,
  status: true,
};
console.log(obj);
const badCopy = obj;
console.log(badCopy);
// Making changes in badCopy affects the original Object
badCopy.no = "OH NOO!!!";
console.log(badCopy);
console.log(obj);

// Shallow Copy: Good Copy
// PROBLEM with shallow copy is that for the nest objects, the memory location is still pointed to the old address.
const obj2 = {
  name: "abc",
  age: 30,
  status: true,
  edu: { scl: "CHS" },
};
const shallowCopy = { ...obj2 };
console.log(shallowCopy);
//Making Changes in good copy
// NOTICE WHEN WE ADD AN PROPERTY TO THE OUTSIDE OBJECT IT WILL "NOT" COPY IN THE ORIGINAL OBJ.
shallowCopy.outsideNO = "OH NOO!!!";
console.log(shallowCopy);
console.log(obj2);
// NOTICE WHEN WE ADD AN PROPERTY INTO THE NESTED OBJECT IT WILL COPY IN THE ORIGINAL OBJ.
shallowCopy.edu.nestedObj = "OH NOO!!!";
console.log(shallowCopy);
console.log(obj2);

// ADDING NEW PROPERTIES
console.log({ ...obj2, city: "Blore", country: "India" });

// Deep Copy: Good but problematic in case of too many nesting.
// DEEP COPY DOES TAKE TIME BUT WILL ALLOT AN ENTIRE NEW MEMORY LOCATION TO THE NEW OBJECT.
const obj3 = {
  name: "abc",
  age: 30,
  status: true,
  edu: { scl: "CHS" },
};
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj3)));

const deepCopy = JSON.parse(JSON.stringify(obj3));
deepCopy.no = "OH NOO!!!";
console.log(deepCopy);
console.log(obj3);
