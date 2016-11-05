global.TreeNode = function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

global.printTree = function printTree(start) {
  start.idx = 0;
  const queue = [start];
  const result = [];
  while (queue.length) {
    let R = queue.shift();
    let actIdx;
    if (R) {
      actIdx = result.length;
      while (actIdx < R.idx) {
        result.push(null);
        actIdx++;
      }
      result.push(R.val);
      if (R.left) {
        R.left.idx = R.idx * 2 + 1;
        queue.push(R.left);
      }
      if (R.right) {
        R.right.idx = R.idx * 2 + 2;
        queue.push(R.right);
      }
    }
  }
  return result;
};
