// implement a stack with functionality of pick, pop, add and return minimum of the stack, all of the action in O(1)
const Stack = require("./Stack");

class MinStack {
  stack = new Stack();
  minStack = new Stack();
  add(i) {
    if (this.minStack.isEmpty() || i <= this.minStack.pick())
      this.minStack.add(i);

    this.stack.add(i);
  }
  pop() {
    const popItem = this.stack.pop();
    if (popItem === "empty stack") return popItem;
    if (popItem === this.minStack.pick()) return this.minStack.pop();
    return popItem;
  }
  getMin() {
    return this.minStack.pick();
  }
  isEmpty() {
    return this.stack.isEmpty();
  }
  pic() {
    return this.stack.pick();
  }
}

const main = () => {
  const minStack = new MinStack();
  //expected "empty stack"
  console.log(minStack.pop());
  minStack.add(3);
  minStack.add(2);
  minStack.add(5);
  minStack.add(7);
  minStack.add(0);
  minStack.add(6);
  //expected 6
  console.log(minStack.pic());
  //expected 0
  console.log(minStack.getMin());
  minStack.pop();
  minStack.pop();
  //expected 7, 2
  console.log(minStack.pic(), ", ", minStack.getMin());
  // expected 5
  minStack.pop();
  console.log(minStack.pop());
  // expected 2
  console.log(minStack.getMin());
};

module.exports = main;
