// implementing binary search tree
const { BinaryTree } = require("./BinaryTree");

class BinarySearchTree extends BinaryTree {
  constructor(node = null) {
    super(node);
  }
  addNode(node) {
    let current = this.root;
    while (current) {
      if (current.val >= node) {
        current = current.leftChild;
      } else current = current.rightChild;
    }
    current = node;
  }
}
module.exports = { BinarySearchTree };
