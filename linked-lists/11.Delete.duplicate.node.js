function removeDuplicates(llist) {
  // Write your code here

  let prev = llist;
  let current = llist.next;

  while (current) {
    if (prev.data === current.data) {
      prev.next = current.next;
      current = prev;
    }
    prev = current;
    current = current.next;
  }

  return llist;
}
