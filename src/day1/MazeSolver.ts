const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
];

type Point = {
    x: number;
    y: number;
};

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    if (
        curr.y < 0 ||
        curr.y >= maze.length ||
        curr.x < 0 ||
        curr.x >= maze[0].length
    )
        return false;

    if (maze[curr.y][curr.x] === wall) return false;

    if (seen[curr.y][curr.x]) return false;

    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    seen[curr.y][curr.x] = true;
    path.push(curr);

    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
        ) {
            return true;
        }
    }
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let seen_matrix = [];
    for (let i = 0; i < maze.length; ++i) {
        seen_matrix.push(new Array(maze[0].length).fill(false));
    }
    let path: Point[] = [];
    walk(maze, wall, start, end, seen_matrix, path);
    return path;
}
