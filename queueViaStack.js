// implement queue by using two stack
const Stack = require("./Stack");

class SpecialQueue {
  stack1;
  stack2;
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  add(i) {
    let j;
    while (!this.stack1.isEmpty()) {
      j = this.stack1.pop();
      this.stack2.add(j);
    }
    this.stack1.add(i);
    while (!this.stack2.isEmpty()) {
      j = this.stack2.pop();
      this.stack1.add(j);
    }
  }

  pick() {
    return this.stack1.pick();
  }
  pop() {
    return this.stack1.pop();
  }
}

const main = () => {
  const myQueue = new SpecialQueue();
  myQueue.add(1);
  myQueue.add(2);
  myQueue.add(14);
  myQueue.add(16);
  myQueue.add(11);
  myQueue.add(41);
  myQueue.add(7);
  console.log(myQueue.pop()); //1
  console.log(myQueue.pop()); //2
  console.log(myQueue.pick()); //14
  console.log(myQueue.pop()); //14
  console.log(myQueue.pick()); //16
};
module.exports = main;
