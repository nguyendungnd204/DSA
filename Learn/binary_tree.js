class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

// Depth First Traversal
const depthFirstValues1 = (node) => {
    if(node === null) return [];

    const res = [];
    const stack = [node];
    while (stack.length > 0) {
        const curr = stack.pop();
        res.push(curr.value);

        if(curr.right) {
            stack.push(curr.right);
        }
        if(curr.left) {
            stack.push(curr.left);
        }
    }
    return res;
}


const depthFirstValues2 = (node) => {
    if(node === null) return [];
    const left = depthFirstValues2(node.left);
    const right = depthFirstValues2(node.right);
    return [node.value, ...left, ...right];
}

console.log(depthFirstValues2(a)); // [1, 2, 4, 5, 3, 6]


// Breadth First Traversal
const breadthFirstValues = (node) => {
    if(node === null) return [];

    const queue = [node];
    const res = [];

    while (queue.length > 0) {
        const curr = queue.shift();
        res.push(curr.value);
        //sum += curr.value; // If you want to sum the values

        if(curr.left) {
            queue.push(curr.left);
        }
        if(curr.right) {
            queue.push(curr.right);
        }
    }

    return res;
}
console.log(breadthFirstValues(a)); // [1, 2, 3, 4, 5, 6]

// Check if a value exists in the tree
const treeIncludes = (node, target) => {
    if(node === null) return false;

    const queue = [node];
    while (queue.length > 0) {
        const curr = queue.shift();
        if(curr.value === target) return true;

        if(curr.left) {
            queue.push(curr.left);
        }
        if(curr.right) {
            queue.push(curr.right);
        }
    }
    return false;
}
console.log(treeIncludes(a, 5)); // true

// Recursive version to check if a value exists in the tree
const treeIncludesRecursive = (node, target) => {
    if(node === null) return false;
    if(node.value === target) return true;

    return treeIncludesRecursive(node.left, target) || treeIncludesRecursive(node.right, target);
}
console.log(treeIncludesRecursive(a, 5)); // true

// Calculate the sum of all values in the tree
const treeSum = (node) => {
    if(node === null) return 0;
    return node.value + treeSum(node.left) + treeSum(node.right);
}
console.log(treeSum(a)); // 21

// MInimum value in the tree

const treeMinValue = (node) => {
    let smallest = Infinity;
    const queue = [node];

    while(queue.length > 0){
        const curr = queue.shift();
        if(curr.value < smallest) {
            smallest = curr.value;
        }

        if(curr.left) {
            queue.push(curr.left);
        }
        if(curr.right) {
            queue.push(curr.right);
        }
    }
    return smallest;
}

console.log(treeMinValue(a)); // 1
// Recursive version to find the minimum value in the tree
const treeMinValueRecursive = (node) => {
    if(node === null) return Infinity;
    const leftMin = treeMinValueRecursive(node.left);
    const rightMin = treeMinValueRecursive(node.right);
    return Math.min(node.value, leftMin, rightMin);
}

console.log(treeMinValueRecursive(a)); // 1

const maxPathSum = (node) => {
    if(root === null) return 0;
    if(node.left === null && node.right === null) return node.value;
    const maxChildSum = Math.max(maxPathSum(node.left), maxPathSum(node.right));
    return node.value + maxChildSum;
}