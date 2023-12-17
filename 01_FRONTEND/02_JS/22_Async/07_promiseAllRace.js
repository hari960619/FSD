const urls = [
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
];

// Remember Promise.all() and Promise.race() accept an array of pending promises.

Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
  (results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  }
);

Promise.race(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
  (results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  }
);

// Another Example for all and race.

const promisify = (value, delayTime) =>
  new Promise((res, rej) =>
    setTimeout(() => {
      res(value);
    }, delayTime)
  );

// Create promises which are in pending state

const a = () => promisify("One", 1000);
const b = () => promisify("Two", 4000);
const c = () => promisify("Three", 2000);

// All the above result in pending promises.

const promises = [a(), b(), c()];

async function promiseAll() {
  const allPromises = await Promise.all(promises);
  // The output will be an array.
  console.log(allPromises);
}

async function promiseRace() {
  const output = await Promise.race(promises);
  // The first finished promise is stored.
  console.log(output);
}

promiseAll();
promiseRace();
