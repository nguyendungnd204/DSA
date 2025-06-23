var inorderTraversal = function(root) {
    if(root === null) return [];
    const  res = [];
    const stack = [];
    let curr = root;

    while(stack.length > 0 || curr !== null) {
        while(curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};