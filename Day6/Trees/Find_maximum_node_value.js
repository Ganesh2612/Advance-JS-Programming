class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
let res=-Infinity;
function max_node(root){
      if(!root) return;
      res=Math.max(res,root.value);
      max_node(root.left);
      max_node(root.right);
      return res;
      
}
const root =new Node(5);
root.left =new Node(7);
root.right =new Node(2);
root.left.right =new Node(3);
root.right.left =new Node(8);
root.left.right.left =new Node(7);
root.right.left.right =new Node(11);
console.log(max_node(root));