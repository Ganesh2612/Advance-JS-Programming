class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
function Right_View(root){
    if(!root) return 0;
    let result=[];
    let queue=[root];
    while(queue.length>0){
        let levelsize=queue.length;
        for(let i=0;i<levelsize;i++){
            const node=queue.shift();
            if(i==levelsize-1) result.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

    }
    return result;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
console.log(Right_View(root));