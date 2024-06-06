type Point = {
    x: number;
    y: number;
};

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    seen: boolean[][],
    end: Point,
): boolean {
    //base

    //out of bounds
    if (
        curr.x < 0 ||
        curr.x > maze[0][0].length - 1 ||
        curr.y < 0 ||
        curr.y > maze[0].length - 1
    )
        return false;

    //wall
    if (maze[curr.y][curr.x] === wall) return false;

    //seen before
    if (seen[curr.y][curr.x]) return false;

    //reached the end
    if (curr.y === end.y && curr.x == end.x) return true;

    return true;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {}
