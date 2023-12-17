class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// Sample CLL
/* let head = new Node(5);
head.next = new Node(15);
head.next.next = new Node(20);
head.next.next.next = new Node(10);
head.next.next.next.next = head; */

// Traversal of a Circularly Linked List
/* function traversal(head) {
  if (head === null) return null;
  console.log(head.data);
  for (let curr = head.next; curr !== head; curr = curr.next) {
    console.log(curr.data);
  }
}

let head = new Node(5);
head.next = new Node(10);
head.next.next = new Node(15);
head.next.next.next = new Node(20);
head.next.next.next.next = head;

traversal(head); */

// Insert an element in the beginning of CLL
/* // Solution 1
function insert01(head, element) {
  let temp = new Node(element);
  if (head === null) {
    temp.next = temp;
    return temp;
  };
  let curr = head;
  while (curr.next !== head) {
    curr = curr.next;
  }
  curr.next = temp;
  temp.next = head;
  return temp;
}

// Solution 2 ==> O(1)
function insert02(head, element) {
  let temp = new Node(element);
  if (head === null)  {
    temp.next = temp;
    return temp;
  };
  temp.next = head.next;
  head.next = temp;
  [temp.data, head.data] = [head.data, temp.data];
  return head;
}

let head = new Node(5);
head.next = new Node(10);
head.next.next = new Node(15);
head.next.next.next = new Node(20);
head.next.next.next.next = head;

console.log(insert01(head, 1));
console.log(insert02(head, 1)); */

// Insert an element in the end of CLL
/* // SOLUTION 1
function insertEnd01(head, element) {
  let temp = new Node(element);
  if (head === null) {
    temp.next = temp;
    return temp;
  }
  let current = head;
  while (current.next !== head) {
    current = current.next;
  }
  current.next = temp;
  temp.next = head;
  return head;
}

// SOLUTION 02
function insertEnd02(head, element) {
  let temp = new Node(element);
  if (head === null) {
    temp.next = temp;
    return temp;
  }
  let curr = head;
  temp.next = curr.next;
  curr.next = temp;
  [curr.data, temp.data] = [temp.data, curr.data];
  return temp;
}

let head = new Node(5);
head.next = new Node(10);
head.next.next = new Node(15);
head.next.next.next = new Node(20);
head.next.next.next.next = head;

console.log(insertEnd01(head, 40));
console.log(insertEnd01(null, 99));

console.log(insertEnd02(head, 40));
console.log(insertEnd02(null, 99)); */

// Delete Kth node of a Circular Linked List
function deleteElement(head, k) {
  if (head === null) return head;
  // if(k===1) deleteHead(head) Look at the previous solved function and replace it here.
  let curr = head;
  for (let i = 0; i < k - 2; i++) {
    // For Invalid k value i.e., above the linked list value.
    if (curr.next === head) return head;
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
}

let head = new Node(5);
head.next = new Node(10);
head.next.next = new Node(15);
head.next.next.next = new Node(20);
head.next.next.next.next = head;

console.log(deleteElement(head, 2));
console.log(deleteElement(head, 9));
