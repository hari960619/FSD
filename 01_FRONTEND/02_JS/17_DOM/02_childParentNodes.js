/* 
1)	Children and ChildNode
        a)	ChildNode returns TextNodes.
        b)	Children returns only Elements. [Preferred]
2)	Parent Element / Parent Node
        a)	Both give the same value.
        b)	As you track back you will reach to body > html > null.
3)	Previous Sibling/ Next Sibling & Previous Element Sibling/ Next Element Sibling
        a)	Previous and Next siblings give text nodes.
        b)	Previous and Next Element siblings give elements.
#text i.e., textNode is nothing but the space between each element of a nodeList.
*/

// ChildNode and Children
// Children [Preferred]
const parent = document.getElementById("parent");
console.log(parent.childNodes);
// NodeList(7) [text, li.parent, text, li.parent, text, li.parent, text]
console.log(parent.children);
// HTMLCollection(3) [li.parent, li.parent, li.parent]

// ParentElement or Parent Node
// Both give the same output
const child = document.querySelector(".childElement");
console.log(child.parentElement);
console.log(child.parentNode);

// Previous Sibling/ Next Sibling || Previous Element Sibling/ Next Element Sibling
// Previous Sibling/ Next Sibling = Gives text node
// Previous Element Sibling/ Next Element Sibling = Gives the element
const ele2 = document.querySelector(".prevNext2");
console.log(ele2.previousSibling);
console.log(ele2.previousSibling.previousSibling); // Now we get the element
console.log(ele2.nextSibling);
console.log(ele2.nextSibling.nextSibling); // Now we get the element

console.log(ele2.previousElementSibling);
console.log(ele2.nextElementSibling);
