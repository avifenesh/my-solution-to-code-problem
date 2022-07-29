// For a given unsorted linkedList, remove all the duplicate
const { Node, LinkedList } = require("./LinkedList");
const removeDup = (linkedList) => {
  if (linkedList.head == null) return linkedList;
  let node = linkedList.head;
  const nodeValMap = new Map();
  nodeValMap.set(node.val, node.val);
  while (node.next) {
    if (nodeValMap.get(node.next.val)) linkedList.deleteNode(node);
    else {
      nodeValMap.set(node.next.val, node.next.val);
      node = node.next;
    }
  }
  return linkedList;
};

const main = () => {
  const node1 = new Node(3);
  const node2 = new Node(2);
  const node3 = new Node(9);
  const node4 = new Node(0);
  const node5 = new Node(4);
  const node6 = new Node(2);
  const node7 = new Node(3);
  const node8 = new Node(6);
  const node9 = new Node(8);
  const linkedList = new LinkedList(node1);
  linkedList.addNodeToTail(node2);
  linkedList.addNodeToTail(node3);
  linkedList.addNodeToTail(node4);
  linkedList.addNodeToTail(node5);
  linkedList.addNodeToTail(node6);
  linkedList.addNodeToTail(node7);
  linkedList.addNodeToTail(node8);
  linkedList.addNodeToTail(node9);
  linkedList.printList();
  removeDup(linkedList);
  linkedList.printList();
};

module.exports = main;
