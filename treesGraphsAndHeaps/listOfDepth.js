// for a given binaryTree, for each level of the tree, return a linked list of all the node

const listOfDepth = (binaryTree) => {
  let count = 0;
  let list;

  while (count < binaryTree.length) {
    let linkedList = new LinkedList();
    list = makeLinkedList(binaryTree, 0, count, linkedList);
    if (list != 0) linkedList.printList();
    if (count == 0) count = 1;
    else count = count * 2;
  }
  let linkedList = new LinkedList();
  for (
    let i = Math.floor((binaryTree.length - 1) / 2 + 1);
    i < binaryTree.length;
    i++
  ) {
    linkedList.add(new Node(binaryTree[i]));
  }
  linkedList.printList();
};

class Node {
  val;
  next;
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class LinkedList {
  head;
  constructor(head = null) {
    this.head = head;
  }
  add(Node) {
    if (this.head == null) this.head = Node;
    else {
      let pointer = this.head;
      while (pointer.next) {
        pointer = pointer.next;
      }
      pointer.next = Node;
    }
  }
  printList() {
    let list = "";
    let temp = this.head;
    while (temp != null) {
      list += temp.val + " => ";
      temp = temp.next;
    }
    console.log(list);
  }
}

const makeLinkedList = (binaryTree, n, count, linkedList) => {
  if (n > binaryTree.length - 1) return 0;
  else if (count == 0) return linkedList.add(new Node(binaryTree[n]));
  else {
    makeLinkedList(binaryTree, n * 2 + 1, count - 1, linkedList);
    makeLinkedList(binaryTree, n * 2 + 2, count - 1, linkedList);
    return linkedList;
  }
};

const main = () => {
  let binaryTree = [1, 2, 3, 3, 8, 3, 0, 3, 7, 3, 7, 3, 5, 2];
  listOfDepth(binaryTree);
};

module.exports = main;
