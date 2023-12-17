// The below technique used is ES5 module , constructor and  prototype model.
// In ES6, promises were introduced to handle callback or asynchronous functions.
// In ES7, async await were introduced which still handled promises in a different way.

let names = ["alpha", "beta"];

function pushName(name, cb) {
  setTimeout(() => {
    names.push(name);
    cb();
  }, 1000);
}

function displayName() {
  setTimeout(() => {
    console.log(names);
  }, 1000);
}

pushName("gamma", displayName);
