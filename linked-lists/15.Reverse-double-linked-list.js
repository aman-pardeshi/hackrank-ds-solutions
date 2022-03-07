function reverse(llist) {
  // Write your code here

  if (!llist) {
    return;
  }

  if (!llist.next) {
    return llist;
  }

  let temp = reverse(llist.next);
  llist.next.next = llist;
  llist.next = null;
  return temp;
}
