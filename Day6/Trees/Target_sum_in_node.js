class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
function Target_sum(root,target){
    if(!root) return "element not found";
    if(!root.left && !root.right && root.value==target) return "Found element";
    return Target_sum(root.left,target)||Target_sum(root.right,target);
}

const root =new Node(5);
root.left =new Node(7);
root.right =new Node(2);
root.left.right =new Node(3);
root.right.left =new Node(8);
root.left.right.left =new Node(7);
root.right.left.right =new Node(11);
console.log(Target_sum(root,0));