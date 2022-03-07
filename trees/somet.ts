function main() {
  // Enter your code here
  class Node {
    data: number;
    left: null;
    right: null;

    constructor(data: any) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class BinaryTree {
    root: any;

    constructor() {
      this.root = null;
    }

    insert(data: number) {
      let latestNode = new Node(data);
      if (!this.root) this.root = latestNode;
      else this.insertNode(this.root, latestNode);
    }

    insertNode(node: any, newNode: any) {
      if (node.data < newNode.data) {
        if (!node.left) node.left = newNode;
        else this.insertNode(node.left, newNode);
      } else {
        if (!node.right) node.right = newNode;
        else this.insertNode(node.right, newNode);
      }
    }

    preorder(node: any) {
      if (node) {
        result.push(node.data);
        console.log(result.join(' '));
        this.preorder(node.left);
        this.preorder(node.right);
      }
    }

    getRoot() {
      return this.root;
    }
  }

  let result: number[];
  const tree = new BinaryTree();
  let input = inputLines[1].split(' ').map((x) => +x);
  let root = tree.getRoot();
  input.map((x) => tree.insert(x));
  tree.preorder(root);
  // console.log(+inputLines[0])
}
