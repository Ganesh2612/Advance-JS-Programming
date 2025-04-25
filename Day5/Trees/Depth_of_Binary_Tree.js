class TreeNode{
      constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
      }
}
function bfs(root){
    if(!root) return 0;
    let queue=[{node:root,depth:1}];
    while(queue.length>0){
        let {node,depth}=queue.shift();
        if(!node.left && !node.right) return depth;
        if(node.left) queue.push({node:node.left,depth:depth+1});
        if(node.right) queue.push({node:node.right,depth:depth+1});
    }
    return 0;
}
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
root.right.left.left=new TreeNode(8);
root.right.left.right=new TreeNode(8);
console.log(bfs(root)); // 2
