export default function bubble_sort(arr: number[]): void {
    let end = arr.length;
    do {
        for (let i = 0; i < end - 1; ++i) {
            let c = arr[i];
            let n = arr[i + 1];
            if (c > n) {
                let t = n;
                arr[i + 1] = c;
                arr[i] = t;
            }
        }
        --end;
    } while (end > 0);

    for (let i = arr.length; i > 0; --i) {
        for (let j = 0; j < i - 1; ++j) {
            let c = arr[j];
            let n = arr[j + 1];
            if (c > n) {
                let t = c;
                arr[j] = n;
                arr[j + 1] = t;
            }
        }
    }
}
