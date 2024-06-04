type Node<T> = {
    val: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        let node = { val: item } as Node<T>;

        if (!this.head) {
            this.head = node;
        } else {
            let head = this.head;
            this.head = node;
            this.head.next = head;
        }
        this.length++;
    }
    pop(): T | undefined {
        if (!this.head) return;
        this.length--;
        if (!this.head.next) {
            let head = this.head;
            this.head = undefined;
            return head.val;
        }
        let head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        return head.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}
