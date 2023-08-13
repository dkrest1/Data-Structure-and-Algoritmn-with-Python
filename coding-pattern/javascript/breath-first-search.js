// Binary Tree Level Order Traversal (easy)


class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //enqueue means adding and dequeue means removing
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}


// Problem Statement #
// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

// [[1],
// [2,3],
// [4,5,6,7]]

// example 2
// [[12],
// [7,1],
// [9,10,5]
// ] 

function traverse(root) {
    let result = []

    if (root === null) {
        return null
    }

    const queue = new Queue()
    queue.enqueue(root)

    while (queue.size > 0) {
        const queueLength = queue.size
        const currentLevel = []

        for (let i = 0; i < queueLength; i++) {
            let currentNode = queue.dequeue()
            currentLevel.push(currentNode);

            if (currentNode.first !== null) {
                queue.enqueue(currentNode)
            }

            if (currentNode.last !== null) {
                queue.enqueue(currentNode)
            }

            result.push(currentLevel)
        }

        return result
    }
}

function main() {
    const root = new Node(12)
    root.left = new Node(7)
    root.right = new Node(1)
    root.left.left = new Node(9)
    root.right.left = new Node(10)
    root.right.right = new Node(5)
    console.log(`Breath first transversal of a tree: ${traverse(root)}`)

}

function main()