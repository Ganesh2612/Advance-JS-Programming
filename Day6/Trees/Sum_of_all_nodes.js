class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
function sumofall(root){
    if(!root) return 0;
    return root.value+sumofall(root.left)+sumofall(root.right);
}
const root =new Node(5);
root.left =new Node(7);
root.right =new Node(2);
root.left.right =new Node(3);
root.right.left =new Node(8);
root.left.right.left =new Node(7);
root.right.left.right =new Node(11);
console.log(sumofall(root));