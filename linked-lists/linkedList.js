class Node {
  constructor(data, next = null) {
    this.head = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert at last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }
  // Insert at index
  insertAtIndex(data, index) {
    // if index is out of range, then just return
    if (index > 0 && index > this.size) {
      return;
    }

    // for first index
    if (index === 0) {
      this.head = new Node(data, this.head);
    }

    const node = new Node(data);
    let current, previous;

    // set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAtIndex(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.head);
      }

      count++;
      current = current.next;
    }
    return null;
  }

  // Remove at index
  removeAtIndex(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous,
      count = 0;

    // Removes at first index
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    this.size--;
  }

  // clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.head);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(300);

ll.printListData();
ll.getAtIndex(10);
ll.removeAtIndex(2);
ll.printListData();

c;
