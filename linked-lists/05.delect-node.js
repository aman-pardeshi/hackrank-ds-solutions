function deleteNode(llist, position) {
  // Write your code here
  let current = llist,
    previous,
    count = 0;

  if (position === 0) {
    llist = current.next;
    return llist;
  }

  while (count < position && current) {
    count++;
    previous = current;
    current = current.next;
  }

  previous.next = current.next;
  current.data = null;
  return llist;
}
