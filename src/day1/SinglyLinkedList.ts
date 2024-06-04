type Node<T> = {
    val: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    constructor() {}

    prepend(item: T): void {
        let node = { val: item } as Node<T>;
        if (!this.head) {
            this.head = node;
        } else if (!this.tail) {
            this.tail = this.head;
            this.head = node;
            this.head.next = this.tail;
        } else {
            let head = this.head;
            this.head = node;
            this.head.next = head;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        let node = { val: item } as Node<T>;
        if (!this.head) {
            this.head = node;
        } else if (!this.tail) {
            this.tail = node;
        } else {
            let tail = this.tail;
            this.tail = node;
            tail.next = this.tail;
        }
        this.length++;
    }
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
{
}
