// implement queue by using two stack
const Stack = require("./Stack");

export class SpecialQueue {
  stack1 = new Stack();
  stack2 = new Stack();
  add(i) {
    let j;
    while (!this.stack1.isEmpty) {
      j = this.stack1.pop();
      this.stack2.add(j);
    }
    this.stack2.add(i);

    this.stack2.add(i);
    while (!this.stack2.isEmpty) {
      j = this.stack2.pop();
      this.stack1.add(j);
    }
  }

  pick() {
    return this.stack1.pick;
  }
  pop() {
    return this.stack1.pop;
  }
}
