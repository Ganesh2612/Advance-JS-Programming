class Stack{
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
let list=new Stack();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.display();