/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function(root) {
  if (!root) {
    return 0;
  }
  return helper(root, root.val, 1, 1);
};

function helper(node, prev, curr, max) {
  if (!node) {
    return max;
  }
  const isSucc = prev + 1 === node.val;
  const newCurr = isSucc ? curr + 1 : 1;
  const newMax = Math.max(max, newCurr);
  const left = helper(node.left, node.val, newCurr, newMax);
  const right = helper(node.right, node.val, newCurr, newMax);
  return Math.max(max, left, right);
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);
let f = new TreeNode(5);
let g = new TreeNode(6);
let h = new TreeNode(7);
a.right = c;
c.left = b;
c.right = d;
d.right = e;
e.right = f;
f.right = g;
g.right = h;

console.log(3, longestConsecutive(a));

a = new TreeNode(1);
b = new TreeNode(2);
c = new TreeNode(2);
d = new TreeNode(3);
b.right = d;
d.left = c;
c.left = a;

console.log(2, longestConsecutive(b));
