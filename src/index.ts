const fibonacciSequences = (n: number): number[] => {
    if (n === 0) {
        return []
    } else if (n === 1) {
        return [1]
    } else if (n === 2) {
        return [1, 1]
    } else {
        const arr = [1, 1];
        for (let i = 2; i < n; i++) {
            arr.push(arr[i - 1] + arr[i - 2])
        }
        return arr
    }
}
