// Creating a Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/* Long Form Linked List
let temp1 = new Node(10);
let temp2 = new Node(20);
let temp3 = new Node(30);
temp1.next = temp2;
temp2.next = temp3;
let head = temp1; */

// Short Form Linked List
/* let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
console.log(head); 
// Node { data: 10, next: Node { data: 20, next: Node { data: 30, next: null } } }

// Recursive Way of Writing a Linked List
function recursivePrint(head) {
  if (head === null) {
    return;
  }
  console.log(head.data);
  recursivePrint(head.next);
}
recursivePrint(head); 
*/

// Adding a new Node at the end of the Linked List.
/* function insertNewNodes(head, x) {
  let temp = new Node(x);
  if (head === null) return temp;
  let current = head;
  while (current.next !== null) current = current.next;
  current.next = temp;
  return head;
}
let head = null;
console.log(head);
// null
head = insertNewNodes(head, 10);
console.log(head);
// Node { data: 10, next: null }
head = insertNewNodes(head, 20);
console.log(head);
// Node { data: 10, next: Node { data: 20, next: null } }
head = insertNewNodes(head, 30);
console.log(head);
// Node { data: 10, next: Node { data: 20, next: Node { data: 30, next: null } } } */

// Delete First Node of Singly Linked List
/* function deleteNode(head) {
  if (head === null) return head;
  return head.next;
} */

/* function insertNode(head, position, data) {
  let temp = new Node(data);
  if (position === 1) {
    temp.next = head;
    return temp;
  }
  let current = head;
  for (let i = 1; i <= position - 2 && current !== null; i++) {
    current = current.next;
  }
  if (current === null) return head;
  temp.next = current.next;
  current.next = temp;
  return head;
} 

let head1 = new Node(10);
head1.next = new Node(20);
head1.next.next = new Node(30);
head1.next.next.next = new Node(40);
head1.next.next.next.next = new Node(50);

insertNode(head1, 4, 35);
console.log(head1);*/

// Search in a Linked List (Iterative and Recursive)
/* function searchLink(head, pos) {
  let i = 1;
  let current = head;
  while (current !== null) {
    if (current.data === pos) return i;
    current = current.next;
    i++;
  }
  return -1;
}

function searchLinkRecursive(head, x, pos = 1) {
  if (head === null) return -1;
  if (head.data === x) return pos;
  return searchLinkRecursive(head.next, x, pos + 1);
}

let head1 = new Node(10);
head1.next = new Node(20);
head1.next.next = new Node(30);
head1.next.next.next = new Node(40);
head1.next.next.next.next = new Node(50);

console.log(searchLink(head1, 30));
console.log(searchLink(head1, 99));

console.log(searchLinkRecursive(head1, 30));
console.log(searchLinkRecursive(head1, 99));
console.log(searchLinkRecursive(head1, 10)); */

/* function insertElement(head, element) {
  let temp = new Node(element);
  if (head === null) return temp;
  let current = head;
  if (element < current.data) {
    temp.next = current;
    return temp;
  }
  while (current !== null) {
    if (current.next === null && current.data < element) {
      current.next = temp;
      return head;
    }
    if (current.next.data > temp.data) {
      temp.next = current.next;
      current.next = temp;
      return head;
    }
    current = current.next;
  }
  console.log(current);
}

let head1 = new Node(10);
head1.next = new Node(20);
head1.next.next = new Node(30);
head1.next.next.next = new Node(40);
head1.next.next.next.next = new Node(50);

console.log(insertElement(head1, 45));
console.log(insertElement(head1, 5));
console.log(insertElement(head1, 55)); */

// Middle of linked list in Javascript
// Below is Two Traversal Solution
/* function middleLinkedList(head) {
  if (head === null) return null;
  let i = 0;
  let numberOfCurrent = head;
  while (numberOfCurrent !== null) {
    i++;
    numberOfCurrent = numberOfCurrent.next;
  }
  if (i === 1) return head.data;
  if (i % 2 === 0) {
    i = i / 2;
    i++;
  } else {
    i = Math.ceil(i / 2);
  }
  let value = head;
  let j = 1;
  while (value !== null) {
    if (j === i) return value.data;
    j++;
    value = value.next;
  }
} */

// Below is One Traversal Solution.
/* function oneTraversalMiddle(head) {
  if (head === null) return null;
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.data;
}
let head1 = new Node(10);
head1.next = new Node(20);
head1.next.next = new Node(30);
head1.next.next.next = new Node(40);
head1.next.next.next.next = new Node(50);

let head2 = new Node(10);
head2.next = new Node(20);
head2.next.next = new Node(30);
head2.next.next.next = new Node(40);
head2.next.next.next.next = new Node(50);
head2.next.next.next.next.next = new Node(60);

let head3 = new Node(10);

let head4 = null;

// console.log(middleLinkedList(head1));
// console.log(middleLinkedList(head2));
// console.log(middleLinkedList(head3));
// console.log(middleLinkedList(head4));

// console.log(oneTraversalMiddle(head1));
// console.log(oneTraversalMiddle(head2));
// console.log(oneTraversalMiddle(head3));
// console.log(oneTraversalMiddle(head4)); */

// Nth Node from end of linked list
/* // Simple Approach
function nthElement(head, pos) {
  let n = 0;
  let temp = head;
  while (temp !== null) {
    temp = temp.next;
    n++;
  }
  let current = head;
  if (pos > n) return null;
  for (let i = n; i > pos; i--) current = current.next;
  return current.data;
}

// Better Approach Using Two Pointers or References.
function nthElementBetter(head, pos) {
  if (head === null) return null;
  let second = head;
  let first = head;
  for (let i = 0; i < pos; i++) {
    if (first === null) return null;
    first = first.next;
  }
  while (first !== null) {
    second = second.next;
    first = first.next;
  }
  return second.data;
}

let head1 = new Node(10);
head1.next = new Node(20);
head1.next.next = new Node(30);
head1.next.next.next = new Node(40);
head1.next.next.next.next = new Node(50);

let head2 = new Node(10);
head2.next = new Node(20);
head2.next.next = new Node(30);

let head3 = new Node(10);
head3.next = new Node(20);

let head4 = new Node(10);
head4.next = new Node(20);
head4.next.next = new Node(30);

console.log(nthElement(head1, 2));
console.log(nthElement(head2, 3));
console.log(nthElement(head3, 3));
console.log(nthElement(head4, 1));

console.log(nthElementBetter(head1, 2));
console.log(nthElementBetter(head2, 3));
console.log(nthElementBetter(head3, 3));
console.log(nthElementBetter(head4, 1)); */

// Reverse a Linked List
/* // Naive Solution
function reverseLinkedList(head) {
  if (head === null) return null;
  let array = [];
  for (let curr = head; curr !== null; curr = curr.next) {
    array.push(curr.data);
  }
  for (let curr = head; curr !== null; curr = curr.next) {
    curr.data = array.pop();
  }
  return head;
}

function efficientReverse(head) {
  let curr = head;
  let prev = null;
  while (curr !== null) {
    // Storing the next values in the "next variable".
    let next = curr.next;
    // Disconnecting the chain from the next to previous.
    curr.next = prev;
    // Now the shifting the prev and curr position towards right by one position.
    prev = curr;
    curr = next;
  }
  // Since the next link will a null we are returning the prev value.
  return prev;
}

let head1 = new Node(10);
head1.next = new Node(20);
head1.next.next = new Node(30);
head1.next.next.next = new Node(40);
head1.next.next.next.next = new Node(50);

console.log(reverseLinkedList(head1)); */

// Recursive Solution to  reverse a Linked List
// Method 1
// Method 2
// YET TO COMPLETE

// Remove the Duplicates Linked List.
function removeDuplicates(head) {
  let curr = head;
  while (curr !== null && curr.next !== null) {
    if (curr.data === curr.next.data) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
}

let head1 = new Node(10);
head1.next = new Node(20);
head1.next.next = new Node(20);
head1.next.next.next = new Node(30);
head1.next.next.next.next = new Node(30);
head1.next.next.next.next.next = new Node(30);

console.log(removeDuplicates(head1));
