const func = (arr) => {
    if (arr.length === 0) return arr;
    const sorted = [arr[0]];
    let index = 1;
    while (index < arr.length) {
        let num = arr[index];
        sorted.push(num);
        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i] > num) {
                for (let k = sorted.length - 1; k >= i; k--) {
                    sorted[k] = sorted[k - 1];
                }
                sorted[i] = num;
                break;
            }
        }
        index++;
    }
    return sorted;
}

console.log(func([]))