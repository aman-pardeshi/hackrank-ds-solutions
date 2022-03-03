const InsertNodeAtHead = (head, data) => {
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  let inputNode = new Node(data);

  if (!head) {
    head = inputNode;
    return head;
  } else {
    inputNode.next = head;
    head = inputNode;
  }

  return head;
};
