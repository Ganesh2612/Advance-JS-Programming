class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(x) {
        this.stack1.push(x);
    }

    dequeue() {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}

let q = new MyQueue();
q.enqueue(1);
q.enqueue(2);
console.log(q.dequeue()); 
console.log(q.dequeue()); 
