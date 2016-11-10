require('./helpers/treeNode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return helper(preorder, inorder, { pp: 0, ii: 0 });
};

function helper(preorder, inorder, idxs, stop) {
  if (inorder[idxs.ii] != stop) {
    const r = new TreeNode(preorder[idxs.pp++]);
    r.left = helper(preorder, inorder, idxs, r.val);
    idxs.ii++;
    r.right = helper(preorder, inorder, idxs, stop);
    return r;
  }
  return null;
}
// var buildTreeNetSolution = function(preorder, inorder) {
//     p = i = 0
//     build = function(stop) {
//         if (inorder[i] != stop) {
//             var root = new TreeNode(preorder[p++])
//             root.left = build(root.val)
//             i++
//             root.right = build(stop)
//             return root
//         }
//         return null
//     }
//     return build()
// };
// var buildTreeBruteForce = function(preorder, inorder) {
//   if (preorder.length === 0) {
//     return null;
//   }
//   const r = new TreeNode(preorder[0]);
//   if (preorder.length === 1) {
//     return r;
//   }
//   const mid = inorder.indexOf(r.val);
//   r.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
//   r.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
//   return r;
// };
console.log(printTree(buildTree(
  ['f','b','a','d','c','e','g','i','h'],
  ['a','b','c','d','e','f','g','h','i']
)).join(','));
console.log(['f','b','g','a','d',null,'i',null,null,'c','e',null,null,'h'].join(','));
console.log(buildTree([], []));
console.log(null);
console.log(printTree(buildTree(['f'], ['f'])));
console.log(['f']);
