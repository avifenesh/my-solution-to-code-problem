// a linked list represent a number, each node represent a digit, the smallest digit is the head, the bigger digit is the tail, for example:
// 3->5->1 represent 153
// write a algorithem that add to linked list and return linked list that represent the new number
// you cannot cheat and convert the linked list into a number and then add the numbers
const { Node, LinkedList } = require("./LinkedList");

// For seing the result visualy
const printList = (linkedList) => {
  let head = linkedList.head;
  let beutifullString = "";
  while (head != null) {
    beutifullString += head.val + " -> ";
    head = head.next;
  }
  beutifullString += "null";
  console.log(beutifullString);
};

// if we left with carry and one of the list are bigger then the other one, we add digits to the new list till the new digit smaller then 10
const addTillCarryFalse = (node1, newLinkedList) => {
  let carry = true;
  while (carry == true) {
    carry = node1.val + 1 >= 10;
    newLinkedList.addNodeToTail(new Node((node1.val + 1) % 10));
    node1 = node1.next;
  }
  newLinkedList.addNodeToTail(node1);
  return newLinkedList;
};

const sumLinkedList = (head1, head2) => {
  // checking that there what to work on
  if (head1 == null && head2 == null) return null;
  if (head1 == null) return head2;
  if (head2 == null) return head1;
  // initialing val, pointers, flags, and the new list we'll return at the end
  let carry = false;
  let node1 = head1;
  let node2 = head2;
  let newLinkedList = new LinkedList(new Node());
  let val = 0;

  // main logic
  while (node1 != null) {
    if (node2 == null) {
      if (carry == true && node1.val + 1 >= 10)
        addTillCarryFalse(node1, newLinkedList);
    }
    val = node1.val + node2.val;
    if (carry == true) val += 1;
    newLinkedList.addNodeToTail(new Node(val % 10));
    if (val < 10) carry = false;
    else carry = true;
    node1 = node1.next;
    node2 = node2.next;
  }
  // if both list same length but we still have a carry
  if (node2 == null) {
    if (carry == true) {
      newLinkedList.addNodeToTail(new Node(1));
    }
    return newLinkedList;
  }
  // if list2 bigger then list1 and we remaind with a carry
  if (carry == true) {
    addTillCarryFalse(node2, newLinkedList);
  }
  //list 2 bigger then list 1 and we dont have a carry left
  newLinkedList.addNodeToTail(node2);
  return newLinkedList;
};

const main = () => {
  // tests
  let list1 = new LinkedList(new Node(4));
  list1.addNodeToTail(new Node(3));
  list1.addNodeToTail(new Node(5));
  let list2 = new LinkedList(new Node(8));
  list2.addNodeToTail(new Node(1));
  list2.addNodeToTail(new Node(6));
  // expect 2 -> 5 -> 1 -> 1 -> null
  printList(sumLinkedList(list1.head, list2.head));

  let list3 = new LinkedList(new Node(4));
  list3.addNodeToTail(new Node(3));
  let list4 = new LinkedList(new Node(8));
  list4.addNodeToTail(new Node(1));
  list4.addNodeToTail(new Node(6));
  // expect 2 -> 5 -> 6 -> null
  printList(sumLinkedList(list3.head, list4.head));

  let list5 = new LinkedList(new Node(9));
  list5.addNodeToTail(new Node(3));
  list5.addNodeToTail(new Node(3));
  let list6 = new LinkedList(new Node(8));
  list6.addNodeToTail(new Node(6));
  list6.addNodeToTail(new Node(6));
  // expect 7 -> 0 -> 0 -> 1 -> null
  printList(sumLinkedList(list6.head, list5.head));
};

module.exports = main;
