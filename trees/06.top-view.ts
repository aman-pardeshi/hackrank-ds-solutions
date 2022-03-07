function main() {
  // Enter your code here
  class Node {
    data: number;
    left: null;
    right: null;
    hd: number;

    constructor(data: number) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.hd = 0;
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

    topView(node: any) {
      if (!node) return;
      let que = [];
      let m = new Map();
      let hd = 0;
      node.hd = hd;
      que.push(node);

      while (que.length !== 0) {
        root = que[0];
        hd = root.hd;
        if (!m.has(hd)) m.set(hd, root.data);

        if (root.left) {
          root.left.hd = hd - 1;
          que.push(root.left);
        }

        if (root.right) {
          root.right.hd = hd + 1;
          que.push(root.right);
        }
        que.shift();
      }
      result = Array.from(m);
      result.sort((a, b) => a[0] - b[0]);
      console.log(result.map((x) => x[1]).join(' '));
    }

    getRootNode() {
      return this.root;
    }
  }
  let result: any[] = [];
  const tree = new BinaryTree();
  let input = inputLines[1].split(' ').map((x) => tree.insert(+x));
  let root = tree.getRootNode();
  //   tree.insert(+inputLines[0])

  tree.topView(root);
}
