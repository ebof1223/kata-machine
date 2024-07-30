export default function dfs(
    head: BinaryNode<number> | null,
    needle: number,
): boolean {
    if (head?.value == needle) return true;
    if (!head) return false;
    if (head.value > needle) {
        return dfs(head.left, needle);
    } else {
        return dfs(head.right, needle);
    }
}
