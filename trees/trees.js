var Node1 = /** @class */ (function () {
    function Node1(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return Node1;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (data) {
        var newNode = new Node1(data);
        if (!this.root)
            this.root = newNode;
        else
            this.inserNode(this.root, newNode);
    };
    BinaryTree.prototype.inserNode = function (node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left)
                node.left = newNode;
            else
                this.inserNode(node.left, newNode);
        }
        else {
            if (!node.right)
                node.right = newNode;
            else
                this.inserNode(node.right, newNode);
        }
    };
    BinaryTree.prototype.preorder = function (node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    };
    return BinaryTree;
}());
var data = [1, 2, 5, 3, 6, 4];
var tree = new BinaryTree();
data.map(function (x) { return tree.insert(x); });
console.log(tree.root.right);
