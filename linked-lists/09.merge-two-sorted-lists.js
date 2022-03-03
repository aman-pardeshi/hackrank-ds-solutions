function mergeLists(head1, head2) {
  let temp = new SinglyLinkedListNode(0);
  let current = temp;

  while (true) {
    if (head1 === null) {
      current.next = head2;
      break;
    }

    if (head2 == null) {
      current.next = head1;
      break;
    }

    if (head1.data <= head2.data) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }

    current = current.next;
  }
  return temp.next;
}
