class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
function bfs(root){
    if(!root) return;
    let queue=[root];
    while(queue.length>0){
        let node=queue.shift();
        console.log(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Perform BFS
console.log("BFS traversal of tree:");
bfs(root);