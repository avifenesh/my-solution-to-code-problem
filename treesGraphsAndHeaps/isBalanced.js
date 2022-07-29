// check if a binary tree is balanced
const { BinaryTree, Node } = require("./BinaryTree");

const isBalanced = (root) => {
  let queue = [[root, 0]];
  let current;
  let firstEndLevel = null;
  while (queue.length > 0) {
    current = queue.pop();
    if (
      (current[0].leftChild == null || current[0].rightChild == null) &&
      firstEndLevel == null
    )
      firstEndLevel = current[1];
    if (
      (current[0].leftChild == null || current[0].rightChild == null) &&
      current[1] - firstEndLevel > 1
    )
      return false;
    if (current[0].leftChild)
      queue.unshift([current[0].leftChild, current[1] + 1]);
    if (current[0].rightChild)
      queue.unshift([current[0].rightChild, current[1] + 1]);
  }
  return true;
};

const main = () => {
  const tree = new BinaryTree();
  let node = new Node(7);
  tree.addNode(node);
  node = new Node(9);
  tree.addNode(node);
  node = new Node(5);
  tree.addNode(node);
  node = new Node(4);
  tree.addNode(node);
  node = new Node(6);
  tree.addNode(node);
  node = new Node(7);
  tree.addNode(node);
  node = new Node(1);
  tree.addNode(node);
  node = new Node(12);
  tree.addNode(node);
  node = new Node(45);
  tree.addNode(node);
  node = new Node(101);
  tree.addNode(node);
  console.log(isBalanced(tree.root)); //true
  const node1 = new Node(3);
  const node2 = new Node(2);
  const node3 = new Node(4);
  const node4 = new Node(9);
  node.addRightChild(node1);
  node1.addRightChild(node2);
  node2.addRightChild(node3);
  node3.addRightChild(node4);
  console.log(isBalanced(tree.root)); //false
};

module.exports = main;
