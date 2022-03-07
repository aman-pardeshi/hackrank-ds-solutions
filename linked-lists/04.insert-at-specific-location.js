function insertNodeAtPosition(llist, data, position) {
  // Write your code here
  let node = new SinglyLinkedListNode(data);
  let counter = 0;

  let current = llist;
  let previous, temp;

  while (counter < position && current) {
    previous = current;
    current = current.next;
    counter++;
  }

  temp = previous.next;
  previous.next = node;
  node.next = temp;
  return llist;
}
