function hasCycle(head) {
  let array = [];
  let current = head;

  while (current) {
    if (array.includes(current.data)) {
      return 1;
    }
    array.push(current.data);
    current = current.next;
  }
  return 0;
}
