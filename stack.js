/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let item = new Node(val);
    if(this.first===null){
      this.first = item;
      this.last = item;
      this.size += 1;
    } else{
      item.next = this.first;
      this.first = item;
      this.size += 1;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.first===null){throw new Error('Stack is empty')};
    let item;
    if(this.first.next===null){
      item = this.first;
      this.first = null;
      this.last = null;
    } else{
      item = this.first;
      item.next = this.first;
    }
    this.size -= 1;
    return item.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size===0 ? true : false;
  }
}

module.exports = Stack;
