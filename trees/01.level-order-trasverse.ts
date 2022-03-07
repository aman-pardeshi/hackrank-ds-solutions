function main() {
  // Enter your code here
  class Node {
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
      let newNode = new Node(data);
      if (!this.root) this.root = newNode;
      else this.inserNode(this.root, newNode);
    }

    inserNode(node: any, newNode: any) {
      if (newNode.data < node.data) {
        if (!node.left) node.left = newNode;
        else this.inserNode(node.left, newNode);
      } else {
        if (!node.right) node.right = newNode;
        else this.inserNode(node.right, newNode);
      }
    }

    preorder(node: any) {
      while (node.length) {
        let treeNode = node.shift();
        array.push(treeNode.data);

        treeNode.left && node.push(treeNode.left);
        treeNode.right && node.push(treeNode.right);
      }
      console.log(array.join(' '));
    }

    getRootNode() {
      return this.root;
    }
  }
  let array: number[] = [];
  const tree = new BinaryTree();
  let input = inputLines[1].split(' ').map((x) => +x);
  input.map((x) => tree.insert(x));
  let root = tree.getRootNode();
  tree.preorder([root]);
}
