// check if a binary tree is a binary search tree

const { Node, BinaryTree } = require("./BinaryTree");
const { BinarySearchTree } = require("./BinarySearchTree");

const isBst = (root) => {
  if (root == null) return true;
  const [min, max] = recIsBst(root);
  if (min && max) return true;
  else return false;
};

const recIsBst = (root) => {
  let min, max;
  if (root.leftChild == null) min = root.val;
  else min = recIsBst(root.leftChild)[0];
  if (root.rightChild == null) max = root.val;
  else max = recIsBst(root.rightChild)[1];
  if (!min || !max) return [false, false];
  if (max < root.val || min > root.val) return [false, false];
  return [min, max];
};
const main = () => {
  let tree = new BinaryTree();
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
  console.log(isBst(tree.root)); //false

  tree = new BinarySearchTree();
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
  console.log(isBst(tree.root)); //true
};
module.exports = main;
