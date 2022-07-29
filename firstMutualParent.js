//find the first mutual parent of two nodes in a given binary tree
const { Node, BinaryTree } = require("./BinaryTree");
const findMutualParent = (nodeA, nodeB) => {
  if (nodeA.parent == null) return nodeA;
  if (nodeB.parent == null) return nodeB;
  let temp1 = nodeA;
  let temp2 = nodeB;
  let count1 = 0;
  let count2 = 0;
  while (temp1.parent != null || temp2.parent != null) {
    if (temp1.parent) {
      count1 += 1;
      temp1 = temp1.parent;
    }
    if (temp2.parent) {
      count2 += 1;
      temp2 = temp2.parent;
    }
  }
  if (count1 > count2)
    for (let i = count1 - count2; i > 0; i--) nodeA = nodeA.parent;
  else for (let i = count2 - count1; i > 0; i--) nodeB = nodeB.parent;
  while (nodeA != nodeB) {
    nodeA = nodeA.parent;
    nodeB = nodeB.parent;
  }
  return nodeA.val;
};

const main = () => {
  const tree = new BinaryTree();
  let node = new Node(7);
  tree.addNode(node);
  let node2 = new Node(9);
  tree.addNode(node2);
  node = new Node(5);
  tree.addNode(node);
  node = new Node(4);
  tree.addNode(node);
  let node1 = new Node(6);
  tree.addNode(node1);
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
  console.log(findMutualParent(node1, node2));
};
module.exports = main;
