let simple = (n) => {
    if (n === 0) return [];
    const res = [1];
    const set = new Set();
    for (let i = 2; i <= n; i++) {
        if (!set.has(i)) {
            res.push(i);
            for (let j = i*2; j <= n; j += i) {
                set.add(j);
            }
        }
    } 
    return res;
}

console.log(simple(100));
console.log(simple(97));