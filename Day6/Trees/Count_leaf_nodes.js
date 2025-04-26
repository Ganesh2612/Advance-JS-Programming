class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
function count_Leaf(root){
    if(!root) return 0;
    if(!root.left || !root.right) return 1;
    return count_Leaf(root.left)+count_Leaf(root.right);
}
const root=new Node(1);
root.left=new Node(2);
root.right=new Node(3);
root.left.left=new Node(4);
root.left.right=new Node(5);
root.right.left=new Node(6);
console.log(count_Leaf(root));