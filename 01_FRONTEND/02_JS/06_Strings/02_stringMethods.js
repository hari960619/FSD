// REMEMBER STRING IS A "PRIMITIVE DATA TYPE".
// ANY METHOD GETTING APPLIED WITH TREATED AS "PASS BY VALUE", HENCE THE ORIGINAL STRING REMAIN "UNAFFECTED".
// All the methods will "CREATE A COPY OF THE STRING" and then apply the methods. We have to use them separately like console logging.
// length
// indexOf("value")
// charAt(number_value)
// trim()
// toUpperCase()
// toLowerCase()
// startsWith("value")
// endsWith("value")
// includes("value")
// slice(index) || slice(index1,index2): IF ONE VALUE PROVIDED, IT STARTS FROM THAT INDEX VALUE TILL THE END OF STRING.IF TWO VALUE PROVIDED IT GIVES THE VALUES FROM INDEX "a" TO INDEX "b".
// split("value that splits"): IT SPLITS THE STRING BY REMOVING THE ARGUMENT PROVIDED AND CREATES AN ARRAY.
// replace("oldValue","newValue") && replaceAll("oldValue","newValue")
// repeat(number of repeats)
// String from array using spread
// Creating string from array using join Operator.

let string = " Peter Parker ";

// The double quotes identify them as string.
// If nothing inside the double quotes. It is falsy.
const val1 = "";
console.log(typeof val1);
val1 ? console.log("truthy") : console.log("falsy");
// An empty space can make it false until we trim it.
const val2 = " ";
console.log(typeof val2);
val2 ? console.log("truthy") : console.log("falsy");

// length
console.log(string.length);
console.log(string.charAt(2));

// indexOf("value")
console.log(string.indexOf("r"));
console.log(string.indexOf("r", 4));
// If an index is provided it starts checking from that index.
// If found it will return the value else -1.
console.log(string.indexOf(""));
console.log(string.indexOf(" "));

// charAt(number_value)
console.log(string.charAt(5));
console.log(string.charAt(500));
console.log(typeof string.charAt(500));

// trim()
console.log(string.trim());
let value1 = " ";
value1.trim() ? console.log("truthy") : console.log("falsy");
let value2 = " a";
value2.trim() ? console.log("truthy") : console.log("falsy");

// toUpperCase()
console.log(string.toUpperCase());
console.log(string);

// toLowerCase()
console.log(string.toLowerCase());

// startsWith("value")
console.log(string.startsWith(" "));
console.log(string.startsWith(" P"));
console.log(string.startsWith(" Pa"));

// endsWith("value")
console.log(string.endsWith(" "));
console.log(string.endsWith("r "));
console.log(string.endsWith("ir "));

// includes("value")
console.log(string.includes(" "));
console.log(string.includes(" P"));
console.log(string.includes(" Pi"));

// slice(index) || slice(index1,index2)
// slice : IF ONE VALUE PROVIDED, IT STARTS FROM THAT INDEX VALUE.
// slice DOES NOT ALTER THE ORIGINAL STRING.
// BECAUSE IT PRIMITIVE TYPE AND THE VALUE GETS COPIED.
// PASS BY VALUE THINGY.
console.log(string.slice(1));
console.log(string);
// IF TWO VALUE PROVIDED IT GIVES THE VALUES FROM INDEX "a" TO INDEX "b".
console.log(string.slice(1, 5));

// SPLIT: IT SPLITS BY REMOVING THE ARGUMENT PROVIDED.
console.log(string.split(" "));
console.log(string.split("e"));

// replace("oldValue","newValue") && replaceAll("oldValue","newValue")
// REPLACE: In order to use it we need to store the replaced value in a variable.
const str = "My name is abc";
console.log(str.replace("abc", "Harish S"));
const str2 = "Ola Ola, Hi";
// replace changes the first match
console.log(str2.replace("Ola", "Hello"));
// replaceAll changes all the matches
console.log(str2.replaceAll("Ola", "Hello"));

//repeat
const value = "toRepeat ";
console.log(value.repeat(2));
console.log(value.repeat(5));
console.log(value.repeat(10));

// Getting a string from array using spread Operator.
const arr = ["abc", "def", "ghi"];
console.log(...arr);

// Join Operator
const arrNumbers = [1, 2, 3, 4];
const arrString = ["a", "b", "c", "d"];
const arrBoolean = [true, false, true, false];

console.log(arrNumbers.join());
console.log(arrNumbers.join(" "));

console.log(arrString.join("-"));

console.log(arrBoolean.join(","));
