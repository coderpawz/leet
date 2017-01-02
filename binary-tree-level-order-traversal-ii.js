/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  const res = [];

  helper(root, res, 0);

  return res.reverse();
};

function helper(node, res, depth) {
  if (node)  {
    if (!res[depth]) {
      res[depth] = [];
    }
    res[depth].push(node.val);
    helper(node.left, res, depth + 1);
    helper(node.right, res, depth + 1);
  }
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const node = new TreeNode(3);
const l = new TreeNode(9);
const r = new TreeNode(20);
const rl = new TreeNode(15);
const rr = new TreeNode(7);
node.left = l;
node.right = r;
r.left = rl;
r.right = rr;
console.log('====');
console.log(levelOrderBottom(node));
console.log([[15,7], [9,20], [3]]);
console.log('====');
console.log(levelOrderBottom(new TreeNode(7)));
console.log([[7]]);
console.log('====');
const a = new TreeNode(1);
const b = new TreeNode(2);
a.left = b;
console.log(levelOrderBottom(a));
console.log([[2],[1]]);
console.log('====');
const c = new TreeNode(1);
const d = new TreeNode(2);
c.right = d;
console.log(levelOrderBottom(c));
console.log([[2],[1]]);
console.log('====');
