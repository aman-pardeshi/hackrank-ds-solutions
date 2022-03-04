function sortedInsert(llist, data) {
  // Write your code here

  let temp,
    previous = llist;
  let cur = llist;
  let node = new DoublyLinkedListNode(data);

  if (data < llist.data) {
    node.next = llist;
    return node;
  }

  while (cur && cur.data < data) {
    previous = cur;
    cur = cur.next;
  }
  temp = previous.next;
  previous.next = node;
  node.next = temp;
  return llist;
}
