// implementing binary tree
class BinaryTree {
  root;
  constructor(Node = null) {
    this.root = Node;
  }
  getRoot() {
    return this.root;
  }
  addNode(node) {
    if (this.root == null) {
      this.root = node;
    } else {
      const parent = this.finedTheNextNotFullParent(this.root);
      if (parent.leftChild == null) {
        parent.addLeftChild(node);
      } else {
        parent.addRightChild(node);
      }
    }
  }
  finedTheNextNotFullParent(node) {
    let queue = [];
    queue.unshift(node);
    let current;
    while (queue.length > 0) {
      current = queue.pop();
      if (current.leftChild == null || current.rightChild == null) {
        return current;
      } else {
        queue.unshift(current.leftChild);
        queue.unshift(current.rightChild);
      }
    }
  }
}

class Node {
  val;
  leftChild;
  rightChild;
  parent;
  constructor(val = null, leftChild = null, rightChild = null, parent = null) {
    this.parent = parent;
    this.val = val;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
  addParent(node) {
    this.parent = node;
  }
  addLeftChild(node) {
    this.leftChild = node;
    node.addParent(this);
  }
  addRightChild(node) {
    this.rightChild = node;
    node.addParent(this);
  }
}
module.exports = { BinaryTree, Node };
