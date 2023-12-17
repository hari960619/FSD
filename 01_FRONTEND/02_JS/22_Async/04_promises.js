// A promise is an object that may produce a single value sometime in the future,
// either a resolved value or a reason that it's not resolved or rejected.
// A promise may be in one of three possible states fulfilled, rejected or pending.

let value = true;

const promise = new Promise((res, rej) => {
  if (value) {
    res("Value is true");
  } else {
    rej("Value is false");
  }
});

promise.then((res) => console.log(res)).catch((rej) => console.log(rej));

// Function returning a promise

const promFunction = (value2) => {
  return new Promise((res, rej) => {
    if (value2) {
      res("Value is true");
    } else {
      rej("Value is false");
    }
  });
};

promFunction(1 < 0)
  .then((e) => console.log(e))
  .catch((rej) => console.log(rej))
  .finally(() => console.log("Promise got executed"));
