let albums = [];

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((res) => {
    console.log(res);
    /* 
    Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/albums', redirected: false, status: 200, ok: true, …}
      body:ReadableStream
      bodyUsed:true
      headers:Headers {}
      ok:true
      redirected:false
      status:200
      statusText:""
      type:"cors"
      url:"https://jsonplaceholder.typicode.com/albums"
    */
    if (!res.ok) {
      throw new Error("Something went Wrong !!!");
    }
    return res.json();
  }) // Promise as pending
  .then((data) => {
    console.log(data);
    albums.push(data);
    data.map((e) => e.title);
  })
  .catch((e) => {
    console.log(e);
  });

// Notice the catch is different unlike try and catch.

console.log(albums);

// The biggest problem with fetch is that we will not be able to extract the data from outside the scope.
// All we can do is log the output.

// In the below I'm trying to explore how we can still achieve in getting the data into a variable using function.

let variable = [];
function fetchAlbums(url, variable) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      variable.push(res);
    })
    .catch((e) => console.log(e));
  console.log(variable);
}

fetchAlbums("https://jsonplaceholder.typicode.com/albums", variable);

// Using the function technique still i'm unable to achieve it.
