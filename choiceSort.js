const func = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = Infinity;
        let index = -1;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                index = j;
            }
        }
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
    return arr;
}
