class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // insert a node in first place

    InsertInFirst(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }  
    }

    // insert a node in last place

    InsertInLast(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // deleteByValue

    deleteByValue(value) {
        let current = this.head;
        while (current.next) {
            if (current.data === value) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    this.head = current.next;
                    this.head.prev = null;
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }

                return;
            }
            
            current = current.next;
        }
    }

    // display value in forward way

    displayFValue() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }

    // display value in backward way

    displayBValue() {
        let current = this.tail;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }

}

let doublylinklist = new DoublyLinkList();
doublylinklist.InsertInFirst(10);
doublylinklist.InsertInFirst(20);
doublylinklist.InsertInLast(30);

doublylinklist.deleteByValue(20);

doublylinklist.displayFValue();