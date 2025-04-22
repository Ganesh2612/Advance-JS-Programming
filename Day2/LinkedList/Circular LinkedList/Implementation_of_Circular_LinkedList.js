class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class CircularLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    append(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=this.tail=newNode;
            newNode.next=this.head;
        }
        else{
            this.tail.next=newNode;
            newNode.next=this.head;
            this.tail=newNode;
        }
        


    }
    display(){
        if(!this.head){
            console.log("Empty LinkedList");
            return ;
        } 
        let curr=this.head;
        let res="";
        do {
            res += curr.value + " -> ";
            curr = curr.next;
        } while (curr !== this.head);
       res+=this.head.value;
        console.log(res);
    }
}

let list=new CircularLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.display();
