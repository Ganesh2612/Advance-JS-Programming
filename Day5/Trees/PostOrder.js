class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
function preorder(root){
    if(root==null) return;
    preorder(root.left);
    preorder(root.right);
    console.log(root.value);
}

function preOrder(root){
    preorder(root);
}

let root=new Node(1);
root.left=new Node(2);
root.right=new Node(6);
root.left.right=new Node(3);
root.left.left=new Node(5);
root.right.left=new Node(7);
root.right.right=new Node(8);
root.left.right.right=new Node(4);




preOrder(root);