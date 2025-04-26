class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
function Depth(root){
    if(!root) return 0;
    return 1+Math.max(Depth(root.left),Depth(root.right));
}
const root=new Node(1);
root.left=new Node(2);
root.right=new Node(2);
root.left.right=new Node(3);
root.left.left=new Node(4);
root.left.right.left=new Node(5);
console.log(Depth(root));