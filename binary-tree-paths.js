/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) {
    return [];
  }
  const nodeStack = [root];
  const pathStack = [`${root.val}`];
  const result = [];
  while (nodeStack.length) {
    const currNode = nodeStack.pop();
    const currPath = pathStack.pop();
    if (!currNode.left && !currNode.right) {
      result.push(currPath);
    }
    if (currNode.right) {
      nodeStack.push(currNode.right);
      pathStack.push(currPath + '->' + currNode.right.val);
    }
    if (currNode.left) {
      nodeStack.push(currNode.left);
      pathStack.push(currPath + '->' + currNode.left.val);
    }
  }

  return result;
};
