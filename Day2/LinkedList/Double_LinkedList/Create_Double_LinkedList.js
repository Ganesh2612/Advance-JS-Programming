class Node{
    constructor(value){
        this.value=value;
        this.prev=null;
        this.next=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    append(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=this.tail=newNode;
            return;
        }
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;

    }
    display(){
        if(!this.head){
            console.log("Empty LinkedList");
            return ;
        }
        let res="", curr=this.head;
        while(curr){
            res+=curr.value+"->";
            curr=curr.next;
        }
        res+=null;
        console.log(res);
    }
}
let list=new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.display();