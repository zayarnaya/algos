const func = (arr) => {
    let count = 0;
    do {
        count = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                count++;
            }
        }
    } while (count > 0);
}
