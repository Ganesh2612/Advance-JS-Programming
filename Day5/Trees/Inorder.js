class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

function Inorder(root){
    if(root==null) return ;
    Inorder(root.left);
    console.log(root.value);
    Inorder(root.right);
}

function InOrder(root){
    Inorder(root);
}

const root=new Node(1);
root.left=new Node(2);
root.right=new Node(3);
root.left.right=new Node(4);
root.right.left=new Node(5);
root.right.left.left=new Node(6);
root.right.left.right=new Node(7);

InOrder(root);

