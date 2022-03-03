function getNode(llist, positionFromTail) {
  // Write your code here
  let count = 0;
  let current = llist;

  while (current !== null) {
    current = current.next;
    count++;
  }

  current = llist;
  for (let i = 0; i < count - positionFromTail - 1; i++) {
    current = current.next;
  }
  return current.data;
}
