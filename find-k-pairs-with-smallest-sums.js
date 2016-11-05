const Heap = require('./helpers/minheap');

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(numsN, numsM, k) {
  const res = [];
  const lessThan = (tri1, tri2) => tri1[0] < tri2[0];
  const heap = new Heap(lessThan);
  const push = (n, m) => {
    if (n < numsN.length && m < numsM.length) {
      heap.push([numsM[m] + numsN[n], n, m]);
    }
  };
  push(0, 0);
  while (heap.size() && res.length < k) {
    const [_, n, m] = heap.pop();//eslint-disable-line no-unused-vars
    res.push([numsN[n], numsM[m]]);
    push(n, m + 1);
    if (m === 0) {
      push(n + 1, 0);
    }
  }
  return res;
};

console.log(kSmallestPairs([1,7,11], [2,4,6],3).join('  '));
console.log([[1,2],[1,4],[1,6]].join('  '));
console.log();
console.log(kSmallestPairs([1,1,2], [1,2,3], 10).join('  '));
console.log([ [ 1, 1 ], [ 1, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 2 ], [ 2, 2 ], [ 1, 3 ], [ 1, 3 ], [ 2, 3 ] ].join('  '));
console.log();
console.log(kSmallestPairs([1,2,4], [-1,1,2], 100).join('  '));
console.log([ [ 1, -1 ], [ 2, -1 ], [ 1, 1 ], [ 4, -1 ], [ 2, 1 ], [ 1, 2 ], [ 2, 2 ], [ 4, 1 ], [ 4, 2 ] ].join('  '));
console.log();
console.log(kSmallestPairs([1], [3,5,6,7,8,100], 4).join('  '));
console.log([[1,3],[1,5],[1,6],[1,7]].join('  '));
console.log();
console.log(kSmallestPairs([-10,-4,0,0,6], [3,5,6,7,8,100], 10).join('  '));
console.log([[-10,3],[-10,5],[-10,6],[-10,7],[-10,8],[-4,3],[-4,5],[-4,6],[0,3],[0,3]].join('  '));
