const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

// new Date().getDate()
// new Date().getMonth()
// new Date().getFullYear()
// new Date().getDay()

console.log(new Date().getDate());
console.log(new Date().getMonth());
console.log(new Date().getFullYear());
console.log(new Date().getDay());

const date = new Date();
console.log(date);
console.log(date.toISOString());

console.log(date.getDay());
console.log(date.getMonth());

console.log(date.getDate());
console.log(months[date.getMonth()]);
console.log(date.getFullYear());
console.log(days[date.getDay()]);

console.log(date.getHours());
console.log(date.getMinutes());

const todaysDate = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();
const day = days[date.getDay()];
const hours = date.getHours();
const minutes = date.getMinutes();

console.log(`${todaysDate}_${month}_${year}_${day}_${hours}_${minutes}`);
