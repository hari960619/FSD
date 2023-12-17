// Idempotence :
function notGood(num) {
  console.log(num);
}
notGood(5);
// How many ever times we run the function we get the same output.
// Another thing that can be independent, for example,
// Is deleting a user from a database. When we delete a user from a database, well, I can delete that person once.
// But if I keep calling the function to delete that user, well, it's going to show the result that the user has been deleted or no user found.
// It wont delete another user instead if we call the function again.

// You see a lot in APIs like HTTP, get requests,
// I can do an API call and I expect that that API call,
// Given some sort of parameter,it is always going to return the same results,
// even though we are communicating with the outside world.
// By the way, another interesting feature of Idempotence Is this idea of being able to call yourself.
// Over and over and over or inside of yourself and you still get the same result.

console.log(Math.abs(-50));
