// Both getAttribute() and setAttribute() are methods
// getAttribute
/* getAttribute gets the kind of attribute mentioned in the function call.
   If ‘id’ is mentioned we get id and if we mention ‘class’ we get class. 
*/
// setAttribute
/*      It clears all the previous attributes and add the new attribute to it.
        We have to pass two arguments i.e., the type of attribute i.e., id/ class,
        The name given to the attribute.
        ele.setAttribute("id", "dynamicID");       
*/

// Firstly we have to select the element by other means line TagName, id, class.
const ele = document.querySelector("h1");
console.log(ele);

// Getting the attribute names of id and class
console.log(ele.getAttribute("id"));
console.log(ele.getAttribute("class"));

// Setting an id and a class attribute.
// Setting needs two parameters.
ele.setAttribute("id", "dynamicID");
ele.setAttribute("class", "dynamicID");

// Rechecking the attributes whether they got attached or not.
console.log(ele.getAttribute("id"));
console.log(ele.getAttribute("class"));
