class Node<T> {
    val: T;
    next: Node<T> | null;
    prev: Node<T> | null;

    constructor(val: T) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

export default class DoublyLinkedList<T> {
    public length: number;

    head: Node<T> | null;
    tail: Node<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(item: T): void {
        let node = new Node(item);
        //0
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        }
        //1
        else if (this.tail === this.head) {
            this.head = node;
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }
        //n
        else {
            let temp = this.head;
            this.head = node;
            this.head.next = temp;
            temp.prev = this.head;
        }
    }

    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            this.prepend(item);
            return;
        }

        let count = 0;

        let node = new Node();
        while (count != idx) {
            //todo
        }
    }

    append(item: T): void {
        let node = new Node(item);

        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else if (this.head === this.tail) {
            this.tail = node;
            this.tail.prev = this.head;
            this.head.next = this.tail;
        } else {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            if (temp) temp.next = this.tail;
        }
    }
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
