class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}
// Sample Creation
/* let head = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);

head.next = temp1;
temp1.prev = head;
temp1.next = temp2;
temp2.prev = temp1;

console.log(head); */

// First a new node at the beginning of the DLL.
/* function insertElementBeginning(head, element) {
  let temp = new Node(element);
  if (head === null) return temp;
  temp.next = head;
  head.prev = temp;
  return temp;
}

let head1 = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);

head1.next = temp1;
temp1.prev = head1;
temp1.next = temp2;
temp2.prev = temp1;

let head2 = null;

console.log(insertElementBeginning(head1, 5));
console.log(insertElementBeginning(head2, 5)); */

// First a new node at the end of the DLL.
/* function insertElementEnding(head, element) {
  let temp = new Node(element);
  if (head === null) return temp;
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = temp;
  temp.prev = current;
  return head;
}

let head1 = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);

head1.next = temp1;
temp1.prev = head1;
temp1.next = temp2;
temp2.prev = temp1;

let head2 = null;

console.log(insertElementEnding(head1, 5));
console.log(insertElementEnding(head2, 5)); */

// Reverse a Doubly Linked List
/* function reverse(head) {
  if (head === null) return null;
  let curr = head,
    prev = null;
  while (curr.next !== null) {
    prev = curr;
    [curr.next, curr.prev] = [curr.prev, curr.next];
    curr = curr.prev;
  }
  return prev;
}

let head1 = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);

head1.next = temp1;
temp1.prev = head1;
temp1.next = temp2;
temp2.prev = temp1;

console.log(reverse(head1)); */

// Delete the last element
function deleteLast(head) {
  if (head === null) return null;
  if (head.next === null) return null;

  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.prev.next = null;
  return head;
}

let head1 = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);

head1.next = temp1;
temp1.prev = head1;
temp1.next = temp2;
temp2.prev = temp1;

let head2 = new Node(10);

console.log(deleteLast(head1));
console.log(deleteLast(head2));
