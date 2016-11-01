require('./helpers/treeNode');

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    return helper(1, n);
};

function helper(min, max) {
    const res = [];
    let lts = [];
    let rts = [];
    if (min > max) {
        return [null];
    }
    for (var ii = min; ii <= max; ii++) {
        lts = helper(min, ii - 1);
        rts = helper(ii + 1, max);
        for (let ll = 0; ll < lts.length; ll++) {
            for (let rr = 0; rr < rts.length; rr++) {
                const node = new TreeNode(ii);
                node.left = lts[ll];
                node.right = rts[rr];
                res.push(node);
            }
        }
    }
    return res;
}

var a, b, c, arr;

arr = [];
a = new TreeNode(1);
b = new TreeNode(2);
c = new TreeNode(3);
a.right = c;
c.left = b;
arr.push(printTree(a));
a = new TreeNode(1);
b = new TreeNode(2);
c = new TreeNode(3);
c.left = b;
b.left = a;
arr.push(printTree(c));
a = new TreeNode(1);
b = new TreeNode(2);
c = new TreeNode(3);
c.left = a;
a.right = b;
arr.push(printTree(c));
a = new TreeNode(1);
b = new TreeNode(2);
c = new TreeNode(3);
b.left = a;
b.right = c;
arr.push(printTree(b));
a = new TreeNode(1);
b = new TreeNode(2);
c = new TreeNode(3);
a.right = b;
b.right = c;
arr.push(printTree(a));
console.log(arr);
console.log(generateTrees(3).map(printTree));
console.log();
