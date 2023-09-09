/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // Links Old node to the new node
            this.tail = newNode;
        }
        this.length++;
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head; // Links new node to the head of the existing linked list
            this.head = newNode;
        }
        this.length++;
    }

    /** pop(): return & remove last item. */

    pop() {
        if (this.length === 0) {
            throw new Error('Empty Linked List');
        }

        let currentNode = this.head;
        let oneBeforeTail = this.head;

        while (currentNode.next) {
            oneBeforeTail = currentNode;
            currentNode = currentNode.next;
        }
        oneBeforeTail.next = null;
        this.tail = oneBeforeTail;
        this.length--;

        // Check if the length of the linked list is empty after the values are removed and set the head and the tail
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode.val;
    }

    /** shift(): return & remove first item. */

    shift() {
        if (this.length === 0) {
            throw new Error('Empty Linked List');
        }
        let currentNode = this.head;
        this.head = null;
        this.head = currentNode.next;
        this.length--;

        // Check if the length of the linked list is empty after the values are removed and set the head and the tail
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode.val;
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        if (this.length === 0) {
            throw new Error('Empty Linked List');
        }

        if (idx >= this.length || idx < 0) return undefined;

        let currentIndex = 0;
        let currentNode = this.head;

        if (idx === 0) {
            return currentNode.val;
        } else {
            while (currentIndex < idx) {
                currentNode = currentNode.next;
                currentIndex++;
            }
            return currentNode.val;
        }
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        if (this.length === 0) {
            throw new Error('Empty Linked List');
        }

        if (idx >= this.length || idx < 0) return undefined;

        let currentIndex = 0;
        let currentNode = this.head;

        if (idx === 0) {
            currentNode.val = val;
        } else {
            while (currentIndex < idx) {
                currentNode = currentNode.next;
                currentIndex++;
            }
            currentNode.val = val;
        }
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        if (
            idx > this.length + 1 ||
            idx < 0 ||
            (this.length === 0 && idx != 0)
        ) {
            throw new Error('Empty Linked List or Incorrect Index');
        }

        let newNode = new Node(val);
        let currentIndex = 0;
        let currentNode = this.head;

        if (idx === 0) {
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
        } else if (idx === this.length + 1) {
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode; // Links Old node to the new node
                this.tail = newNode;
            }
        } else {
            let currentNode = this.head;
            let previousNode = this.head;
            let currentIndex = 0;

            while (currentNode.next && currentIndex < idx) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
            previousNode.next = newNode;
            newNode.next = currentNode;
        }
        this.length++;
    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        if (this.length === 0) {
            throw new Error('Empty Linked List');
        }
    }

    /** average(): return an average of all values in the list */

    average() {
        if (this.length === 0) {
            return 0;
        }

        let counter = this.head.val;
        let avg = 0;
        let currentNode = this.head;
        for (let i = 0; i <= this.length + 1; i++) {
            counter = counter + currentNode.next.val;
        }

        avg = counter / this.length;
        return avg;
    }
}

module.exports = LinkedList;
