// create queue class intialize constructor and add method like push,pop and empty.

class Queue {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
        return this.items;
    }

    pop() {
        if (this.items.length > 0) {
            return this.items.shift();
        } else {
            this.empty();
        }
    }

    empty() {
        alert('queue is empty');
    }
}

const q = new Queue();
console.log(q.push(1));
console.log(q.push(2));

q.pop();
console.log(q.items);
q.pop();
console.log(q.items);
q.pop();