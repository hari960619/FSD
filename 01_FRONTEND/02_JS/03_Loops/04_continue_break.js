for (let i = 0; i < 10; i++) {
  if (i <= 5) {
    console.log("Continue");
    continue; // The For loop goes back and starts executing from start of the loop again.
  }
  if (i == 7) {
    console.log("Break");
    break; // Breaks the loop immediately.
  }
  console.log(i);
}
