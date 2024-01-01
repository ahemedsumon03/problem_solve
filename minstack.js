class MinStatck {
    constructor() {
        this.items = [];
    }

    push(item) {
      this.items.push(item);
    }

    pop() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }
    top() {
        if (this.items.length > 0) {
            return this.items[this.items.length - 1];
        }
    }

    getMin() {
        if (this.items.length > 0) {
            return Math.min(...this.items);
        }
    }
}

const minstack = new MinStatck();
minstack.push(3);
minstack.push(12);
minstack.push(2);
minstack.push(4);

minstack.pop();
console.log(minstack.top())
console.log(minstack.getMin());

console.log(minstack.items);