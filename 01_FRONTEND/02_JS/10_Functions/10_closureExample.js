function callMe(name) {
  setTimeout(() => {
    console.log(`Hey ${name}, ${reply} call you later`);
  }, 2000);
  const reply = "Little Busy !!!";
}

callMe("Harish S");

// The reason the above still works is because setTimeout is an Async Function, sent to the browser.
// Meanwhile the timer comes the value would have been initialized.
