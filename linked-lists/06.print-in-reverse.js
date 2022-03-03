function reversePrint(llist) {
  // Write your code here
  if (llist !== null) {
    reversePrint(llist.next);
    console.log(llist.data);
  }
}
