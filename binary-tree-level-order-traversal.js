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
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  return addElementsToOrder(root, 0, []);
};

function addElementsToOrder(node, level, res) {
  if (!node) {
    return res;
  }
  res[level] = res[level] || [];
  res[level].push(node.val);
  addElementsToOrder(node.left, level + 1, res);
  addElementsToOrder(node.right, level + 1, res);
  return res;
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
console.log([[3], [9,20], [15,7]]);
console.log(levelOrder(node));
console.log('====');
console.log([[7]]);
console.log(levelOrder(new TreeNode(7)));
console.log('====');
const a = new TreeNode(1);
const b = new TreeNode(2);
a.left = b;
console.log([[1], [2]]);
console.log(levelOrder(a));
console.log('====');
const c = new TreeNode(1);
const d = new TreeNode(2);
c.right = d;
console.log([[1], [2]]);
console.log(levelOrder(c));
console.log('====');
