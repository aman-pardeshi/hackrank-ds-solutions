function findMergeNode(headA, headB) {
  let array = [];
  let cur1 = headA;
  let cur2 = headB.next;

  while (cur1 || cur2) {
    if (cur1 && array.find((x) => x === cur1)) {
      return cur1.data;
    } else if (cur1) {
      array.push(cur1);
      cur1 = cur1.next;
    }

    if (cur2 && array.find((x) => x === cur2)) {
      return cur2.data;
    } else if (cur2) {
      array.push(cur2);
      cur2 = cur2.next;
    }
  }
}
