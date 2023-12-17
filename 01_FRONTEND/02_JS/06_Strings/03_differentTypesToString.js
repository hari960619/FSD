// Converting number to string
console.log(String(555));

// Converting boolean to string
console.log(String(true));

// Converting null to string
console.log(String(null));

// Converting undefined to string
console.log(String(undefined));

const arr = [1, "a", true, ["#", "$"]];
// Converting array to string
console.log(String(arr));
// Converting string back to array
console.log(String(arr).split(","));

// WE CANNOT CONVERT OBJECT TO STRING.
const obj = { a: 1, b: true };
console.log(String(obj));
