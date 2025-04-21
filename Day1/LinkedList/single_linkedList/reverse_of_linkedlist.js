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
     reverse(){
        //  let st=[];
        //  let curr=this.head;
        //  while(curr){
        //      st.push(curr.value);
        //      curr=curr.next;
        //  }
        //  let curr2=this.head;
        //  while(curr2){
        //      curr2.value=st.pop();
        //      curr2=curr2.next;
        //  }
          
        let prev=null,curr=this.head;
        while(curr){
            let next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        this.head=prev;
     }
     
}
let list=new LinkedList();
list.append(67);
list.append(99);
list.append(34);
list.append(54);
list.PrintList();
list.reverse();
list.PrintList();
