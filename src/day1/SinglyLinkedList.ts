type Node<T> = {
    val: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        let node = { val: item, next: undefined } as Node<T>;
        switch (this.length) {
            case 0:
                this.head = node;
                break;
            case 1:
                let tail = this.head;
                this.head = node;
                this.head.next = tail;
                break;
            default:
                let old_head = this.head;
                this.head = node;
                this.head.next = old_head;
        }
        this.length++;
        return;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) return;
        let node = { val: item, next: undefined } as Node<T>;
        if (!idx) {
            this.prepend(item);
            return;
        }
        if (idx === this.length) {
            this.append(item);
            return;
        }
        let current = this.head;
        let current_idx = 0;

        while (current?.next && current_idx + 1 != idx) {
            current = current?.next;
            ++current_idx;
        }
        let old_node = current?.next;
        current!.next = node;
        node.next = old_node;
        this.length++;
        return;
    }
    append(item: T): void {
        let node = { val: item, next: undefined } as Node<T>;
        switch (this.length) {
            case 0:
                this.head = node;
                break;
            case 1:
                this.tail = node;
                this.head!.next = this.tail;
                break;
            default:
                let old_tail = this.tail;
                this.tail = node;
                old_tail!.next = this.tail;
        }
        this.length++;
        return;
    }
    remove(item: T): T | undefined {
        if (!this.length) return undefined;

        if (this.head?.val === item) {
            let old_head = this.head;
            switch (this.length) {
                case 1:
                    this.head = undefined;
                    break;
                case 2:
                    this.head = this.head?.next;
                    this.tail = undefined;
                    break;
                default:
                    this.head = old_head.next;
                    old_head.next = undefined;
            }
            this.length--;
            return old_head.val;
        }

        let current = this.head;

        while (current?.next?.val != item) {
            current = current?.next;
        }

        if (!current.next) return undefined;

        if (current.next === this.tail && this.tail.val === item) {
            let old_tail = this.tail;
            current.next = undefined;
            this.tail = current;
            this.length--;
            return old_tail.val;
        }

        let old_next = current.next;
        current.next = old_next.next;
        old_next.next = undefined;
        this.length--;
        return old_next.val;
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        if (!this.length) return undefined;
        let current = this.head?.next;
        let current_idx = 0;
        while (current?.next !== undefined && current_idx != idx) {
            current = current?.next;
            ++current_idx;
        }
        return current?.val;
    }
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        if (!this.length) return undefined;
        if (!idx) {
            let old_head = this.head;
            switch (this.length) {
                case 1:
                    this.head = undefined;
                    break;
                case 2:
                    this.head = this.tail;
                    this.tail = undefined;
                    break;
                default:
                    this.head = this.head?.next;
                    old_head!.next = undefined;
            }
            this.length--;
            return old_head?.val;
        }

        let current_idx = 0;
        let current = this.head;

        while (current?.next && current_idx + 1 != idx) {
            current = current?.next;
            ++current_idx;
        }

        if (current?.next === this.tail) {
            let old_tail = this.tail;
            this.tail = current;
            current!.next = undefined;
            this.length--;
            return old_tail?.val;
        }

        let old_node = current?.next;
        current!.next = old_node?.next;
        old_node!.next = undefined;
        this.length--;
        return old_node?.val;
    }
}
