class Node1 {
  data: number;
  left: null;
  right: null;

  constructor(data: number) {
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
    let newNode = new Node1(data);
    if (!this.root) this.root = newNode;
    else this.inserNode(this.root, newNode);
  }

  inserNode(node: { data: number; left: any; right: any }, newNode: Node1) {
    if (newNode.data < node.data) {
      if (!node.left) node.left = newNode;
      else this.inserNode(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this.inserNode(node.right, newNode);
    }
  }

  preorder(node: any) {
    if (node !== null) {
      console.log(
        node.data,
        this.preorder(node.left),
        this.preorder(node.right)
      );
    }
  }

  getRootNode() {
    return this.root;
  }
}

let data = [1, 2, 5, 3, 6, 4];

const tree = new BinaryTree();
data.map((x) => tree.insert(x));
console.log(tree.root.right);
