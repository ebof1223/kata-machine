class Node<T> {
    val: T;
    next: Node<T> | undefined;
    prev: Node<T> | undefined;
}

export default class DoublyLinkedList<T> {
    public length: number;
    head: Node<T> | undefined;
    tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { val: item } as Node<T>;
        switch (this.length) {
            case 0:
                this.head = node;
                break;
            case 1:
                this.tail = this.head;
                this.head = node;
                node.next = this.tail;
                this.tail!.prev = node;
                break;
            default:
                node.next = this.head;
                this.head!.prev = node;
                this.head = node;
        }

        this.length++;

        return;
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) throw new Error("oh no");

        switch (idx) {
            case 0:
                this.prepend(item);
            case this.length:
                this.append(item);
            default:
                let curr = this.head;
                let curr_idx = 0;
                while (curr_idx + 1 != idx && curr?.next) {
                    curr = curr?.next;
                    curr_idx++;
                }
                const node = { val: item } as Node<T>;
                let old_node = curr?.next;
                curr!.next = node;
                node!.prev = curr;
                old_node!.prev = node;
                node.next = old_node;
        }
        this.length++;
        return;
    }

    append(item: T): void {
        let node = { val: item } as Node<T>;

        switch (this.length) {
            case 0:
                this.head = node;
                break;

            case 1:
                this.tail = node;
                this.tail.prev = this.head;
                this.head!.next = node;
                break;
            default:
                this.tail!.next = node;
                node.prev = this.tail;
                this.tail = node;
        }

        this.length++;
        return;
    }
    remove(item: T): T | undefined {
        let curr: Node<T> | undefined;

        switch (this.length) {
            case 0:
                throw new Error("nothing to remove");
            case 1:
                if (this.head!.val === item) {
                    this.head = undefined;
                    curr = this.head;
                }
                break;
            case 2:
                if (this.tail!.val === item) {
                    this.head!.next = undefined;
                    this.tail!.prev = undefined;
                    curr = this.tail;
                }
            default:
                curr = this.head?.next;
                while (curr?.val != item) {
                    if (!curr?.next) return;
                    curr = curr?.next;
                }
                let pre = curr.prev;
                let next = curr.next;
                curr.prev = curr.next = undefined;
                pre!.next = next;
                next!.prev = pre;
        }
        this.length--;
        return curr?.val;
    }

    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
