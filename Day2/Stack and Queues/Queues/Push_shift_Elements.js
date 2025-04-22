class Queue{
    constructor(){
        this.st=[];
    }
    push(element){
        this.st.push(element);
    }
    pop(){
        if(this.st.length==0){
            console.log("Empty");
            return ;
        }
        return this.st.shift();
    }
    display(){
        console.log(this.st.join("->"));
    }
}
let list=new Queue;
list.push(3);
list.push(5);
list.pop();
list.push(7);
list.push(9);
list.pop();
list.pop();

list.push(11);
list.pop();

list.display();