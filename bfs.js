function Queue() {
    this.head;
    this.size = 0;

    this.push = (value) => {
        if (!this.head) {
            this.head = {
                value: value,
                next: null,
            }
        } else {
            let node = {
                value: value,
                next: this.head,
            }
            this.head = node;
        }
        this.size++;
    }
    this.shift = () => {
        this.size--;
        if (!this.head) {
            return null;
        } else {
            let node = this.head;
            let next = this.head.next;
            this.head = next;
            return node.value;
        }

    }
}

const bfs = (root, callback) => {
    let queue = new Queue();
    queue.push(root);

    while (queue.size) {
        let node = queue.shift();
        if (node) {
            callback(node.value);
        }
        if (node?.children) {
            for (let child of node.children) {
                queue.push(child);
            }
        };
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
