const reverseList = (list) => {
    let res = {};
    let node = list;
    if (!Object.keys(list).length) return {};

    while (node) {
        if (Object.keys(res).length === 0 ) {
            res = {
                value: node.value,
                next: null,
            }
        } else {
            let prev = res;
            res = {
                value: node.value,
                next: prev,
            }
        }
        node = node.next;

    }
    return res;
}

console.log(reverseList({
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
}))

console.log(reverseList({

}))

console.log(reverseList({
    value: 1,
    next: null
}))