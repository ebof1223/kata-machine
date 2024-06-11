function qs(arr: number[], l: number, h: number) {
    if (l >= h) return;

    let pivotIdx = partition(arr, l, h);

    qs(arr, l, pivotIdx - 1);
    qs(arr, pivotIdx + 1, h);
}

function partition(arr: number[], l: number, h: number) {
    let idx = l - 1;
    let pivot = arr[h];

    for (let i = l; i <= h; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            let temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
