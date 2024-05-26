export default function bs_list(haystack: number[], needle: number): boolean {
    let l = 0;
    let h = haystack.length;

    while (l < h) {
        let m = Math.floor(l + (h - l) / 2);

        if (haystack[m] === needle) {
            return true;
        }

        if (needle < haystack[m]) {
            h = m - 1;
        } else {
            l = m + 1;
        }
    }

    return false;
}
