// Now in pass by Reference we have understand that as what it is we changing.
// Either we are changing the entire object value and one value in the object.
// This makes a difference i.e., if we change the entire object it wont affect the object.
// But when we change an key value in the object that is when the original gets affected.

let originalArray = [1, 2, 3];
let elementChangeArray = originalArray;
let totalChangeArray = originalArray;

console.log(originalArray);
console.log(elementChangeArray);
console.log(totalChangeArray);

totalChangeArray = [4, 5, 6];
elementChangeArray[1] = 9;

console.log(originalArray);
console.log(elementChangeArray); // Original gets Affected
console.log(totalChangeArray); // Original is NOT affected

let originalObj = { name: "a" };
let keyChangeObj = originalObj;
let totalChangeObj = originalObj;

console.log(originalObj);
console.log(keyChangeObj);
console.log(totalChangeObj);

keyChangeObj.name = "b";
totalChangeObj = { name: "c" };

console.log(originalObj);
console.log(keyChangeObj);
console.log(totalChangeObj);
