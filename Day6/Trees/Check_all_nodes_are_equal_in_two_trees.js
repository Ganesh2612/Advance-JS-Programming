class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
function equalTrees(tree1,tree2){
    if(!tree1 && !tree2) return true;
    if(!tree1 || !tree2 || tree1.value!=tree2.value) return false;
    return equalTrees(tree1.left,tree2.left) && equalTrees(tree1.right,tree2.right);
}

const tree1=new Node(1);
tree1.left=new Node(2);
tree1.right=new Node(3);
tree1.left.right=new Node(4);
const tree2=new Node(1);
tree2.left=new Node(2);
tree2.right=new Node(0);
tree2.left.right=new Node(4);
let bool=equalTrees(tree1,tree2);
if(bool) console.log("Trees are equal");
else{
    console.log("Trees are not equal");
}