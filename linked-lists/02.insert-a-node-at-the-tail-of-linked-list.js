import fs from 'fs';

class Node {
  constructor(data) {
    this.head = data;
    this.next = null;
  }
}

let node = new Node(data);

if (!head) {
  head = node;
  return head;
}

let current = head;
while (current.next) {
  current = current.next;
}

current.next = node;
return head;
