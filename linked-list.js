/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) this.head = newNode;
    if (this.tail) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    newNode.next = this.head;

    if (!this.tail) this.tail = newNode;

    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;

    let popNode = new Node();
    while (!this.tail) {
      currentNode = currentNode.next;
    }

    if (currentNode === this.head && currentNode === this.tail) {
      popNode = currentNode;
      currentNode = null;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return popNode.val;
    }
    popNode = currentNode.next;

    this.tail = currentNode;
    this.length -= 1;
    currentNode.next = null;
    return popNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let shiftNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return shiftNode.val;
    }

    this.head = this.head.next;
    this.length -= 1;
    return shiftNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let currentIdx = 0;
    while (currentNode) {
      if (currentIdx === idx) return currentNode.val;
      currentNode = currentNode.next;
      currentIdx++;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    let currentIdx = 0;
    while (currentNode) {
      if (currentIdx === idx) {
        return (currentNode.val = val);
      }
      currentNode = currentNode.next;
      currentIdx++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentNode = this.head;
    let newNode = new Node(val);
    let currentIdx = 0;

    while (currentNode || this.length === 0) {
      if (idx === 0) return this.unshift(val);

      if (idx === this.length) return this.push(val);

      if (currentIdx + 1 === idx && currentNode.next) {
        console.log(currentIdx);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
      }
      currentNode = currentNode.next;
      currentIdx++;
    }
    return;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let currentIdx = 0;
    let deletedNode;

    while (currentNode) {
      if (idx === 0) {
        deletedNode = this.head;
        if (this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;
        }
      }
      if (currentIdx + 1 === idx) {
        deletedNode = currentNode.next;
        if (deletedNode === this.tail) {
          currentNode.next = null;
          this.tail = currentNode;
        } else {
          currentNode.next = deletedNode.next;
        }
      }
      currentNode = currentNode.next;
    }
    this.length -= 1;
    return deletedNode;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let currentNode = this.head;
    let sum = 0;

    while (currentNode) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
