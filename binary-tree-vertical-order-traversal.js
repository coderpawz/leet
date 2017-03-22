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
function verticalOrder(root) {
    if (!root || !root.val) {
      return [];
    }
    const minMax = { min: 0, max: 0 };
    const list = [];
    computeRange(root, 0, minMax);
    for(let ii = minMax.min; ii <= minMax.max; ii++) {
      list.push([]);
    }
    const q = [];
    const idx = [];
    idx.unshift(-minMax.min);
    q.unshift(root);
    while (q.length) {
      const node = q.pop();
      const i = idx.pop();
      list[i].push(node.val);
      if (node.left){
          q.unshift(node.left);
          idx.unshift(i - 1);
      }
      if (node.right){
          q.unshift(node.right);
          idx.unshift(i + 1);
      }
    }
    return list;
}
function computeRange(root, idx, mm){
    if(!root) {
      return;
    }
    mm.min = Math.min(mm.min, idx);
    mm.max = Math.max(mm.max, idx);
    computeRange(root.left, idx - 1, mm);
    computeRange(root.right, idx + 1, mm);
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
let f = new TreeNode(6);
let g = new TreeNode(7);
let h = new TreeNode(8);
let i = new TreeNode(9);
a.left = b;
a.right = c;
c.right = d;
d.left = e;
e.left = f;
f.left = g;
g.left =h;
d.right = i;

console.log([
  [8],
  [2, 7],
  [1, 6],
  [3, 5],
  [4],
  [9]
]);
console.log(verticalOrder(a));

a = new TreeNode(3);
b = new TreeNode(9);
c = new TreeNode(8);
d = new TreeNode(4);
e = new TreeNode(0);
f = new TreeNode(1);
g = new TreeNode(7);
h = new TreeNode(2);
i = new TreeNode(5);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.right = h;
c.left = f;
c.right = g;
f.left = i;

console.log([
  [4],
  [9, 5],
  [3, 0, 1],
  [8, 2],
  [7]
]);
console.log(verticalOrder(a));
