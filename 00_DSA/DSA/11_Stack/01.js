// Stack is a linear Data structure.
// It works like a box that is closed from one end i.e., bottom.
// LIPO.

// Stack Operations:
/* 
isEmpty() : Returns true if empty else false.
push(x) : Inserts an item to the top of the stack.
pop() : Removes an item from the top.
peek() : gives the value of the top item.
size() : Gives the size of the stack.

Only push and pop modify the stack.
*/

// Extreme Conditions:
/* Underflow = When pop() or peek() called on empty stack.
Overflow = When push is called on a full stack. This happens only when the stack is created with a definite size. This phenomenon occurs with C++ and Java. While JS and Python uses dynamic sized array. */

// Applications of Stack
/* 
1) Function calls in the call stack.
2) Balanced Parenthesis. [(a+b) * (c+(d-e))]. The last bracket that got opened should get closed first i.e., LIPO.
3) Reversing Items.
4) Infix to Postfix/Prefix
5) Evaluation of Postfix/Prefix
6) Stock span Problem and its variant.
7) Undo / Redo or Forward / Backward.
*/

// Stack can be implemented using two ways i.e., Arrays and Linked List.
// 1) Arrays
let st = [];
st.push(20);
st.push(10);
st.pop();
// console.log(st[st.length - 1]); //peek
// console.log(st.length); // size

// 2) Linked List
class Node {
  constructor(x) {
    this.x = x;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  size() {
    return this.size;
  }
  isEmpty() {
    return this.head === null;
  }
  push(x) {
    let temp = new Node(x);
    temp.next = this.head;
    this.head = temp;
    this.size += 1;
  }
  pop() {
    if (this.head === null) return null;
    let res = this.head.CDATA_SECTION_NODE;
    this.head = this.head.next;
    this.size -= 1;
    return res;
  }
  peek() {
    if (this.head === null) return null;
    return this.head.data;
  }
}

// Check for Balanced Parenthesis
function isBalanced(str) {
  let s = [];
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (x === "(" || x === "{" || x === "[") {
      s.push(x);
    } else {
      if (s.length === 0) return false;
      else if (!isMatching(s[s.length - 1], x)) {
        return false;
      } else s.pop();
    }
  }
  return s.length === 0;
}

function isMatching(a, b) {
  return (
    (a === "(" && b === ")") ||
    (a === "{" && b === "}") ||
    (a === "[" && b === "]")
  );
}

console.log(isBalanced("([])"));
console.log(isBalanced("(())))"));
console.log(isBalanced("([))"));
console.log(isBalanced("{}([])"));
console.log(isBalanced("((())"));
console.log(isBalanced(")("));
