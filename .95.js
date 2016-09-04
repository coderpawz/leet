/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 1) {
    return [new TreeNode(n)];
  }

  const res = [];

  helper(1, n, res);

  return res;
};


function helper(start, end, res) {
  for (var i = end; i >= start; i--) {
    let bst = [i];
    for (var i = 1; i <= n; i++) {
    }
  }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
    this.toString = function(){
      const res = [];

    }
}


console.log([[1]]);
console.log(generateTrees(1));
console.log();
console.log([[1,null,2],[2,1,null]]);
console.log(generateTrees(2));
console.log();
console.log([[1,null,2,null,3]]);
console.log(generateTrees(3));
console.log();
