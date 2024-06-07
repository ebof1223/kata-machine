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
    }

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
    insertAt(item: T, idx: number): void {
        if (idx == 0) {
            this.prepend(item);
            return;
        }

        if (idx == this.length - 1) {
            this.append(item);
            return;
        }

        if (idx < 1 || idx > this.length - 2) {
            console.log("out of bounds");
            return;
        }

        let node = {
            val: item,
            next: undefined,
        } as Node<T>;

        let current = this.head?.next;
        let count = 1;
        while (count < this.length) {
            if (count == idx - 1) {
                let next = current?.next;
                current!.next = node;
                node.next = next;
                ++this.length;
                return;
            }
            ++count;
        }
    }
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
    remove(item: T): T | undefined {
        let current = this.head;
        this.length--;
        if (current?.val == item) {
            let head = this.head?.next;
            current!.next = undefined;
            this.head = head;
        }

        while (current?.next?.val != item) {
            current = current?.next;
        }
        if (current === this.tail) {
            console.log("item not found");
            this.length++;
            return undefined;
        }
        if (current?.next == this.tail) {
            let tail = current?.next;
            current!.next = undefined;
            this.tail = current;
            return tail?.val;
        }

        let to_remove = current.next;
        current.next = to_remove.next;
        to_remove.next = undefined;
        return to_remove.val;
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            console.log("idx out of bounds");
            return undefined;
        }

        let count = 0;
        let current = this.head;
        while (current?.next) {
            current = current.next;
            ++count;
            if (count === idx) return current.val;
        }
        console.log("not found");
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        if (idx < 0 && idx >= this.length) {
            console.log("idx out of bounds");
            return undefined;
        }
        let current = this.head;
        if (idx === 0) {
            this.head = this.head?.next;
            current!.next = undefined;
            return current?.val;
        }
        let count = 0;
        while (current?.next) {
            ++count;
            if (count === idx) {
                if (current.next === this.tail) {
                    let tail = this.tail;
                    this.tail = current;
                    this.tail.next = undefined;
                    return tail.val;
                }

                let to_remove = current.next;
                current.next = to_remove.next;
                to_remove.next = undefined;
                return to_remove.val;
            }
        }
        return undefined;
    }
}
{
}
