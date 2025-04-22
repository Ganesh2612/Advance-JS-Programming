class Queue{
    constructor(){
        this.st=[];
    }
    push(element){
        this.st.push(element);
    }
    display(){
        console.log(this.st.join("->"));
    }
}
let list=new Queue();
list.push(4);
list.push(2);
list.push(7);
list.push(9);
list.push(1);
list.display();