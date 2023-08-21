let dfs = (root, callback) => {
    const stack = [];
    stack.push(root);
    while (stack.length) {

        let node = stack.pop();
        if (node) {
            callback(node.value);
        }
        if (node?.children) stack.push(...node.children);
    }

}

dfs({
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