module.exports = class Stack {
  stack = [];
  pop() {
    if (this.stack.length > 0) return this.stack.shift();
    else return "empty stack";
  }
  add(i) {
    return this.stack.unshift(i);
  }
  pick() {
    if (this.stack.length > 0) return this.stack[0];
    else return "empty stack";
  }
  isEmpty() {
    if (this.stack.length == 0) return true;
    return false;
  }
};
