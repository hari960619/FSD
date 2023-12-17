// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms) : new Date(2018, 11, 24, 10, 33, 30, 0);

// new Date("2022-03-25");
// new Date("October 13, 2014 11:13:00");

const birthday = new Date(1996, 6, 19, 13, 30);

console.log(birthday);
console.log(birthday.toISOString());

console.log(birthday.getDate());
console.log(birthday.getMonth());
console.log(birthday.getFullYear());

console.log(birthday.getHours());

// Alternate method of setting date
const endYear = new Date();
endYear.setFullYear(2012);
endYear.setMonth(11);
// endYear.setMonth(12); If this set to 12 then it will go to next year.
endYear.setDate(12);
endYear.setHours(12);
endYear.setMinutes(12);
endYear.setSeconds(30);
endYear.setMilliseconds(12);

console.log(endYear);
