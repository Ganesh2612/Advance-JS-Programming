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
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
     }
     PrintList(){
        let curr=this.head,res="";
        while(curr){
             res+=curr.value+"->";
             curr=curr.next;
        }
        res+=null;
        console.log(res);
     }
     delete(value){
        if(!this.head){
            console.log("It is an empty list");
            return;
        }
        if(this.head.value===value){
            this.head=this.head.next;
            return;
        }
        let prev=null;
        let curr=this.head;
        while(curr && curr.value!==value){
            prev=curr;
            curr=curr.next;
        }
         if(!curr){
            console.log("Element is not in the list");
            return;
         }
         prev.next=curr.next;
     }
     search(value){
        if(this.head.value==value){
            console.log("value is found");
            return 1;
        }
        let curr=this.head;
        while(curr){
            if(curr.value==value){
                console.log("value is found");
                return 1;
            }
            curr=curr.next;
        }
        console.log("value is not found");
        return -1;
     }
     
}
let list=new LinkedList();
list.append(67);
list.append(99);
list.append(34);
list.append(54);
list.PrintList();
list.delete(99);
list.PrintList();
list.search(54);