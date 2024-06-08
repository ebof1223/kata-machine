function partition(arr: number[], l: number, h: number) {
    let idx = l - 1;
    let pivot = arr[h];

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            let temp = arr[i];
            arr[idx] = temp;
            arr[i] = arr[idx];
        }
    }

    idx++;
    arr[h] = arr[idx];
    arr[idx] = pivot;
    return idx;
}

export default function quick_sort(arr: number[]): void {}
