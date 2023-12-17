let urls = [
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
];

const asyncForOf = async function (urls) {
  const arrayOfPromises = await urls.map((url) => fetch(url));
  for await (let response of arrayOfPromises) {
    const data = await response.json();
    console.log(data);
  }
};

asyncForOf(urls);
