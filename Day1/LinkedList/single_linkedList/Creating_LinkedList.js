class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }
    append(value){
        let newnode=new Node(value);
        if(!this.head){
            this.head=newnode;
            return
        }
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newnode;
    }
    printlist(){
        let curr=this.head;
        let res="";
        while(curr){
            res+=curr.value+"->";
            curr=curr.next;
        }
        console.log(res);
    }
}

let list=new LinkedList();
list.append(10);
list.append(34);
list.append(55);
list.printlist();