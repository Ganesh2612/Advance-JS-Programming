class Node{
    constructor(value) {
        this.value=value;
        this.prev=null;
        this.next=null;
        
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.next=null;
    }
    append(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=this.tail=newNode;
            return ;
        }
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
    }
    prepend(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=this.tail=newNode;
            return ;
        }
        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode
    }
    insertAfter(afterVal,newVal){
        let curr=this.head;
        while(curr && curr.value!==afterVal){
            curr=curr.next;
        }
        if(!curr) console.log("Value not found");

        let newNode=new Node(newVal);
        newNode.next=curr.next;
        newNode.prev=curr;
        if(curr.next){
            curr.next.prev=newNode;
        }
        else{
            this.tail=newNode;
        }
        curr.next=newNode;
    }
    findMid(){
        let slow=this.head,fast=this.head;
        if(slow.next==null){
            console.log(`Mid element is ${slow.value}`);
        }
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
        }
        if(fast==null){
            console.log(`${slow.prev.value}, ${slow.value}`);

        }
        else{
            console.log(`${slow.value}`);
        }
    }
    display(){
        if(!this.head){
            console.log("Empty LinkedList");
            return ;
        }
        let res="", curr=this.head;
        while(curr){
            res+=curr.value+"<->";
            curr=curr.next;
        }
        res+=null;
        console.log(res);
    }
}
let list=new DoublyLinkedList();
list.append(1);
list.append(2);


list.prepend(0);
list.prepend(7);

list.insertAfter(2,5);
list.display();
list.findMid();




