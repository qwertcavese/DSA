class node {
    constructor(v) {
        this.value = v;
        this.left = null;
        this.right = null;
    }
}

class tree {
    constructor() {
        this.root = null;
    }

    insert(a) {
        var n = new node(a);
        if (this.root == null) {
            this.root = n;
        } else {
            if (a < this.root.value) {
                if (this.root.left == null) this.root.left = n;
                else this.insertleft(this.root.left, n);
            } else {
                if (this.root.right == null) this.root.right = n;
                else this.insertright(this.root.right, n);
            }
        }
    }

    insertleft(leftnode, n) {
        if (n.value < leftnode.value) {
            if (leftnode.left == null) leftnode.left = n;
            else this.insertleft(leftnode.left, n);
        } else {
            if (leftnode.right == null) leftnode.right = n;
            else this.insertleft(leftnode.right, n);
        }
    }

    insertright(rightnode, n) {
        if (n.value < rightnode.value) {
            if (rightnode.left == null) rightnode.left = n;
            else this.insertright(rightnode.left, n);
        } else {
            if (rightnode.right == null) rightnode.right = n;
            else this.insertright(rightnode.right, n);
        }
    }
}
function inOrder(root) {
    if (root) {
        inOrder(root.left)
        console.log("InOrder:", root.value);
        inOrder(root.right)
    }
}
// function preOrder(root) {
//     if (root) {
//         console.log("PreOrder:",root.value);
//         inOrder(root.left)
//         inOrder(root.right)
//     }
// }
// function postOrder(root) {
//     if (root) {
//         inOrder(root.left)
//         inOrder(root.right)
//         console.log("PostOrder:",root.value);
//     }
// }

// Example usage:
let myTree = new tree();
myTree.insert(5);
myTree.insert(3);
myTree.insert(7);
myTree.insert(70);
myTree.insert(10);
myTree.insert(2);
myTree.insert(15);
// console.log(myTree);
inOrder(myTree.root)
// preOrder(myTree.root)
// postOrder(myTree.root)



