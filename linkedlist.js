class Linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    InsertNodeInBegin(node) {
        let newNode = {
            value: node,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    InsertNodeInLast(node) {
        let newNode = {
            value: node,
            next: null
        }
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    DeleteNodeInBegin() {
        if (!this.head) {
            return;
        } else {
            this.head = this.head.next;
            return;
        }
    }

    DeleteNodeByValue(value) {
        if (!this.head) {
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        if (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                current = current.next;
            }
        }
    }

    displayvalue() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let linkedlist = new Linkedlist();
linkedlist.InsertNodeInBegin(4);
linkedlist.InsertNodeInBegin(5);
linkedlist.InsertNodeInLast(6);
linkedlist.DeleteNodeInBegin();
linkedlist.DeleteNodeByValue(4);

linkedlist.displayvalue();