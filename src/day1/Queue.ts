type Node<T> = {
    val: T;
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
        if (this.length === 0) {
            this.head = this.tail = new Node();
        }
    }
    deque(): T | undefined {}
    peek(): T | undefined {}
}
