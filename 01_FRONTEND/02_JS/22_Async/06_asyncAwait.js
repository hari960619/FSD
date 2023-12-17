// Using async await we can achieve of assigning fetched data into a variable.
// Using try catch block within the function is very much essential.

let albums;

async function fetchData(url) {
  try {
    let response = await fetch(url);
    console.log(response);
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
    let data = await response.json();
    console.log(data);
    albums = data;
    console.log(albums.map((album) => album.title));
  } catch (e) {
    console.log(e);
  }
}

fetchData("https://jsonplaceholder.typicode.com/albums");
