class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

    function isValidBST(root) {
        return validate(root, -Infinity, Infinity);
    }

    function validate(node, min, max) {
        if (!node) return true;

        if (node.val <= min || node.val >= max) return false;

        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }

const tree1=new Node(1);
tree1.left=new Node(2);
tree1.right=new Node(3);
tree1.left.right=new Node(4);
tree1.left.left=new Node(9);
tree1.right.left=new Node(11);
console.log(isValidBST(tree1));