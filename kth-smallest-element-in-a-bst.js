/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  'use strict';
  const m = 0;
  return traverse(smallest(root, k), k, m + 1).foundIt;
};

var traverse = function(tiny, k, m) {
  'use strict';
  let res = {};
  if(k === m) {
    return { foundIt: tiny.val };
  } else {
    res.m = m + 1;
  }
  if(tiny.right) {
    res = traverse(smallest(tiny.right), k, m + 1);
    if(res.foundIt) {
      return res;
    }
  }
  if(tiny.parent) {
    res = traverse(tiny.parent, k, res.m);
  }
  return res;
};

var smallest = function(root) {
  if(!root.left) {
    return root;
  } else {
    root.left.parent = root;
    return smallest(root.left);
  }
};

var tree = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: {
        val: 2,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    },
    right: {
      val: 8,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 9,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 15,
    left: {
      val: 13,
      left: {
        val: 12,
        left: null,
        right: null
      },
      right: {
        val: 14,
        left: null,
        right: null
      }
    },
    right: {
      val: 18,
      left: {
        val: 17,
        left: null,
        right: null
      },
      right: {
        val: 19,
        left: null,
        right: null
      }
    }
  }
};

console.log('1st smallest');
console.log('actual:   ' + kthSmallest(tree, 1) + '\nexpected: 2');
console.log();

console.log('4th smallest');
console.log('actual:   ' + kthSmallest(tree, 4) + '\nexpected: 5');
console.log();

console.log('5th smallest');
console.log('actual:   ' + kthSmallest(tree, 5) + '\nexpected: 7');
console.log();

console.log('8th smallest');
console.log('actual:   ' + kthSmallest(tree, 8) + '\nexpected: 10');
console.log();

console.log('12th smallest');
console.log('actual:   ' + kthSmallest(tree, 12) + '\nexpected: 15');
console.log();
