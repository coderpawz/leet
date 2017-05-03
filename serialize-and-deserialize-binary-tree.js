/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const q = [root];
  const res = [];
  while (q.length) {
    const curr = q.shift();
    res.push(curr && curr.val);
    if (curr) {
      q.push(curr.left);
      q.push(curr.right);
    }
  }
  return JSON.stringify(res);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const q = JSON.parse(data).map(val => val !== null ? new TreeNode(val) : null);
  let child = 1;
  for (var ii = 0; ii < q.length; ii++) {
    if(q[ii] !== null) {
      const left = child++;
      const right = child++;
      q[ii].left = left < q.length ? q[left] : null;
      q[ii].right = right < q.length ? q[right] : null;
    }
  }
  return q[0];
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);
let f = new TreeNode(6);
let g = new TreeNode(7);
let h = new TreeNode(8);
a.right = c;
c.left = b;
c.right = d;
d.right = e;
e.right = f;
f.right = g;
g.right = h;

console.log(serialize(a));
console.log(serialize(deserialize(serialize(a))));
