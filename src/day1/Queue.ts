type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.head = this.tail = node;
        } else if (!this.tail) {
            this.tail = this.head;
            this.head = node;
            this.head.next = this.tail;
        } else {
            let tail = this.tail;
            this.tail = node;
            tail.next = this.tail;
        }

        this.length++;
    }
    deque(): T | undefined {
        if (!this.head) return undefined;

        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        this.length--;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
