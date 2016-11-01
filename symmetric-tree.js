/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    const pointers = [];
    let lPointer = root.left;
    let rPointer = root.right;
    const xor = (a, b) => !a != !b;

    while (lPointer || rPointer || pointers.length) {
        if (xor(lPointer, rPointer) || ((rPointer && rPointer.val) !== (lPointer && lPointer.val))) {
            return false;
        }

        if (lPointer) {
            pointers[pointers.length] = lPointer.left;
            pointers[pointers.length] = rPointer.right;
            pointers[pointers.length] = lPointer.right;
            pointers[pointers.length] = rPointer.left;
        }
        if (pointers.length) {
            lPointer = pointers.shift();
            rPointer = pointers.shift();
        } else {
            return true;
        }
    }
    return true;
};

console.log(true, isSymmetric({val:1, left:{val:1}, right:{val:1}}));
console.log(false, isSymmetric({val:1, left:{val:2}, right:{val:1}}));
console.log(true, isSymmetric({val:1, left:{val:1, left:{val:1}, right:{val:1}}, right:{val:1, left:{val:1}, right:{val:1}}}));
console.log(false, isSymmetric({val:1, left:{val:1, left:{val:1}, right:{val:1}}, right:{val:1, left:{val:1}, right:{val:2}}}));
console.log(false, isSymmetric({val:1, left:{val:1, left:{val:1}, right:{val:1}}, right:{val:1, left:{val:2}, right:{val:1}}}));
console.log(false, isSymmetric({val:1, left:{val:1, left:{val:1}, right:{val:1}}, right:{val:1, left:{val:1}}}));
console.log(true, isSymmetric({val:1, left:{val:1, left:{val:1}}, right:{val:1, right:{val:1}}}));
console.log(true, isSymmetric({
    val:1,
    left:{
        val:2,
        left:{val:3},
        right:{val:4}
    },
    right:{val:2,
    right:{val:3},
    left:{val:4}
  }
}));
