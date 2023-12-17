/* 
Modules are small units of independent reusable code that is desired to be used as the building blocks in creating a non-trivial JS application.
1)	They allow us to split the code into smaller files.
2)	Share our code across the app.
*/

// NEW SYNTAX
// Importing named exports.
// While importing the names should match or can be reassigned with a new name.
import { name as personName, age } from "./importExport/namedExport.js";
console.log(personName);
console.log(age);

// Import default exports.
// We can retain the name or give it anything while importing.
import maritalStatus from "./defaultExport.js";
console.log(maritalStatus);
