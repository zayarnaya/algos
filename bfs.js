const bfs = (root, callback) => {
    const queue = [];
    queue.push(root);
    while (queue.length) {
        let node = queue.shift();
        if (node) {
            callback(node.value);
        }
        if (node?.children) queue.push(...node.children);
    }

}

bfs({
    value: 0,
    children: [{
        value: 1,
        children: [{
            value: 2,
            children: []
        }]
    }, {
        value: 3,
        children: []
    }]
}, (val) => console.log('val', val))
