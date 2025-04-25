class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
function Preorder(root){
    if(root==null) return;
    console.log(root.value);
    Preorder(root.left);
    Preorder(root.right);
}

function preOrder(root){
   
   Preorder(root);
   //turn arr;
}
const root=new TreeNode(1);
root.left=new TreeNode(2);
root.right=new TreeNode(3);
root.left.right=new TreeNode(4);
root.left.left=new TreeNode(5);
root.right.left=new TreeNode(6);

 preOrder(root);
