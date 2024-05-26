export default function two_crystal_balls(breaks: boolean[]): number {
    let d = Math.floor(Math.sqrt(breaks.length));

    let b1 = 0;
    for (let x = 0; x < breaks.length; x += d) {
        if (breaks[x]) {
            b1 += x;
            break;
        }
    }

    for (let x = b1 - d; x < b1; ++x) {
        if (breaks[x]) return x;
    }

    return -1;
}
