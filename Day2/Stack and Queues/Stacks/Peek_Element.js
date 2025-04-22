class Stack{
    constructor(){
        this.st=[];
    }
    push(element){
        this.st.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "Empty";
        }
        return this.st.pop();
    }
    isEmpty(){
        return this.st.length===0;
    }
    peek(){
        if(this.isEmpty()){
            return "Empty";
        }
        return this.st[this.st.length-1];
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
console.log(list.peek());