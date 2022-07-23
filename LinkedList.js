class Node {
  next;
  val;
  constructor(val = null, next = null) {
    this.next = next;
    this.val = val;
  }
}

class LinkedList {
  head;
  constructor(head = null) {
    this.head = head;
  }
  addNodeToTail(node) {
    if (node == null) return this.head;
    let temp = this.head;
    if (this.head.val == null) this.head = node;
    while (temp.next != null) temp = temp.next;
    temp.next = node;
    node.next = null;
    return this.head;
  }
  deleteNode(prevNode) {
    prevNode.next = prevNode.next.next;
  }
  printList() {
    console.log(this.head);
  }
}

module.exports = { Node, LinkedList };
