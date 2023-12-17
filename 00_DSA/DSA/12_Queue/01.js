// Queue Data Structure follows FIFO.
// Adding an element is called Enqueue and removing an element is called Dequeue.

// We add elements at the rear end and remove from the front.

// Operations
/* 
    Enqueue(x) = adding an element.
    dequeue() = removing an element.
    getFront() 
    getRear()
    size()
    isEmpty()
*/

// Applications
/* 
1) Single Resource and Multiple COnsumers.
2) Synchronization between slow and fast devices.
3) In operating systems (Semaphores, FCFS, Scheduling, Spooling, Buffers for devices like keyboard.)
4) In computer Networks (Routers / Switches and Mail Queues)
5) Variations: Deque, Priority Queue, Doubly Ended Priority Queue.
*/

// Queue Implementation can be done in 4 types:
// Normal Array.
// Map.
// Not all operations in a singular array would take O(1). Hence we will use a circular array which will take O(1) time.
// Using Linked List.

// Normal Array Implementation of Queue. [Not Recommended]
class normalArrayQueue {
  constructor() {
    this.arr = [];
  }
  enqueue(x) {
    this.arr.push(x);
  }
  dequeue() {
    return this.arr.shift();
  }
  size() {
    return this.arr.length;
  }
  getFront() {
    if (this.arr.length === 0) return null;
    return this.arr[0];
  }
  getRear() {
    if (this.arr.length === 0) return null;
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
}

// Map Implementation of Queue. [Not Recommended]
class mapQueue {
  constructor() {
    this.m = {};
    this.front = -1;
    this.rear = -1;
  }
  enqueue(x) {
    this.rear++;
    this.m[this.rear] = x;
    if (this.front === -1) this.front++;
  }
  dequeue() {
    if (this.front === -1) return null;
    let res = this.m[this.front];
    delete this.m[this.front];
    this.front++;
    if (this.front > this.rear) this.front = this.rear = -1;
    return res;
  }
  size() {
    return this.rear - this.front - 1;
  }
  isEmpty() {
    return this.front === -1;
  }
}
// Circular Array Implementation of Queue:
class circularArrayQueue {
  constructor(cap) {
    this.cap = cap;
    this.arr = new Array(cap);
    this.front = 0;
    this.size = 0;
  }
  getFront() {
    if (this.size === 0) return null;
    return this.arr[this.front];
  }
  getRear() {
    if (this.size === 0) return null;
    let r = (this.front + this.size - 1) % this.cap;
    return this.arr[r];
  }
  enqueue(x) {
    if (this.size === this.cap) return;
    let r = (this.front + this.size - 1) % this.cap;
    r = (r + 1) % this.cap;
    this.arr[r] = x;
    this.size++;
  }
  dequeue() {
    if (this.size === 0) return null;
    let res = this.arr[this.front];
    this.front = (this.front + 1) % this.cap;
    this.size--;
    return res;
  }
}

// Linked List Implementation of Queue:
class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}
class linkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  enqueue(x) {
    let temp = new Node(x);
    if (this.front === null) this.front = temp;
    else this.rear.next = temp;
    this.rear = temp;
    this.size += 1;
  }
  dequeue() {
    if (this.front === null) return null;
    let res = this.front.data;
    this.front = this.front.next;
    this.size -= 1;
    return res;
  }
  size() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
}
