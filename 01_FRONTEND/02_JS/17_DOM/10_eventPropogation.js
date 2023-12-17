/* 
Events serve are medium to communicate from one part of it to another. 
Assume there is a button that is wrapped inside a div or logical group like forms which in turn is inside the document.
EventPropogation is a concept where in an event propagates from top i.e., 
till the element that triggered the event and then all the way back to the top.
*/

// Event Propogation is of two types i.e.,
// 1) Event Bubbling
// 2) Event Capturing

// Event Bubbling: It is a concept where in the event moves from the element till the top.
// Almost all events follow the same concept except for few like hover.
// This is because we can capture the event on the element as early as possible and allowing us to stop propogation by calling the event.stopPropogation().

// Event Capturing: Event starts from top to the event child i.e., it starts from document and reaches till the button.

const div = document.querySelector("#eventPropagated");
const btn = document.querySelector("#actualEvent");

// Now imagine you have an event on the div and an event on the button.
// Now if you click on the div i.e., on the text shown above only that div event gets triggered.
// But if click on the button that is inside the div,
// then the event in the button and also event on the div gets triggered.

// Applying events to both div and btn.

div.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
});

btn.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  e.stopPropagation();
});

// Now this propagation occurring from the button can be stopped by using e.stopPropogation( ) on the button.
// This will only trigger the event on the button and will not trigger the event on the div.

// Event Bubbling: Events getting triggered from the element till the document.
// Event Capturing: Events getting triggered from the document till the element.
// Note: The “e” in the function of a addEventListener is the event object which has inbuilt properties in it.
// Hence when we want a particular property from this object we use the “.” Operator.
