/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p || !q) {
    return p === q;
  }

  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};

console.log(true, isSameTree(null, null));
console.log(true, isSameTree({val:1}, {val:1}));
console.log(false, isSameTree({val:1}, {val:2}));
console.log(true, isSameTree({val:1,left:{val:1}}, {val:1,left:{val:1}}));
console.log(false, isSameTree({val:1,left:{val:2}}, {val:1,left:{val:1}}));
console.log(false, isSameTree({val:1,left:{val:1}}, {val:1,right:{val:1}}));
console.log(true, isSameTree({val:1,left:{val:1},right:{val:1}}, {val:1,right:{val:1},left:{val:1}}));
console.log(true, isSameTree({val:1,left:{val:1,right:{val:1},left:{val:1}},right:{val:1,right:{val:1},left:{val:1}}}, {val:1,right:{val:1,right:{val:1},left:{val:1}},left:{val:1,right:{val:1},left:{val:1}}}));
console.log(false, isSameTree({val:1,left:{val:1,right:{val:1},left:{val:1}},right:{val:1,right:{val:2},left:{val:1}}}, {val:1,right:{val:1,right:{val:1},left:{val:1}},left:{val:1,right:{val:1},left:{val:1}}}));
