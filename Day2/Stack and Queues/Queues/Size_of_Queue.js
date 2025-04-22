class Queue{
    constructor() {
        this.st=[];
    }
    push(element){
        this.st.push(element);
    }
    shift(){
        if(this.st.length===0){
            console.log("Empty");
            return ;
        }
        return this.st.shift();
    }
    size(){
        return this.st.length;
    }
    display(){
        console.log(this.st.join("->"));
    }
    front() {
        if (this.st.length===0) return null;
        return this.st[0];
    }
}

let list=new Queue();
list.push(3);
list.push(2);
list.push(8);
list.shift();
list.push(9);
list.push(0);
list.shift();
list.display();
console.log(list.size());
console.log(list.front());