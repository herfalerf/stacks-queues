const LinkedList = require("./linked-list");

//METHOD WITHOUT USING LINKED LIST CLASS INTERNALLY
/** Node: node for a queue. */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

// /** enqueue(val): add new value to end of the queue. Returns undefined. */

// enqueue(val) {
//   let newNode = new Node(val);

//   if (!this.first) this.first = newNode;
//   if (this.last) this.last.next = newNode;

//   this.last = newNode;
//   this.size++;
// }

// /** dequeue(): remove the node from the start of the queue
//  * and return its value. Should throw an error if the queue is empty. */

// dequeue() {
//   if (this.size === 0) throw new Error("Queue is empty");

//   let deqNode = this.first;
//   if (this.first === this.last) {
//     this.first === null;
//     this.last === null;
//     this.size--;
//     return deqNode.val;
//   }

//   this.first = this.first.next;
//   this.size--;
//   return deqNode.val;
// }

// /** peek(): return the value of the first node in the queue. */

// peek() {
//   if (this.size === 0) throw new Error("Queue is empty");
//   return this.first.val;
// }

// /** isEmpty(): return true if the queue is empty, otherwise false */

// isEmpty() {
//   return this.size === 0 ? true : false;
// }
// }

//

//METHOD USING LINKED LIST CLASS INTERNALLY
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = new LinkedList();
  }

  enqueue(val) {
    this._list.push(val);
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
  }

  dequeue(val) {
    let deqNode = this._list.shift(val);
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
    return deqNode;
  }

  peek() {
    return this.first.val;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Queue;
