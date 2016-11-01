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
var maxDepth = function(root, n) {
    const curr = n || 0;
    if (!root) {
        return curr;
    }

    return Math.max(
    maxDepth(root.left, curr + 1),
    maxDepth(root.right, curr + 1)
  );
};

console.log(0, maxDepth(null));
console.log(1, maxDepth({}));
console.log(2, maxDepth({left:{}, right:{}}));
console.log(2, maxDepth({left:{}}));
console.log(2, maxDepth({right:{}}));
console.log(3, maxDepth({left:{left:{}, right:{}}, right:{left:{}, right:{}}}));
console.log(3, maxDepth({left:{left:{}, right:{}}, right:{}}));
console.log(3, maxDepth({right:{left:{}, right:{}}, left:{}}));
