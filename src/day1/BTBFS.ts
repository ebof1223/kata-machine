export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length) {
        let node = q.shift() as BinaryNode<number>;
        if (!node) continue;
        if (node.value == needle) return true;
        q.push(node.left);
        q.push(node.right);
    }

    return false;
}
