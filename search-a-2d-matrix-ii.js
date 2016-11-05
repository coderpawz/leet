/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let jj;
  for (let ii = 0; ii < matrix.length; ii++) {
    for (jj = matrix[ii].length - 1; jj && matrix[ii][jj] > target; jj--) {}//eslint-disable-line no-empty
    if (matrix[ii][jj] === target) {
      return true;
    }
  }
  return false;
};

// console.log(searchMatrix([
//   [1,   4],
//   [2,   5]
// ], 2));

console.log(searchMatrix([
  [1,   4,   7,   8],
  [2,   5,   9,  12],
  [4,   6,  11,  15]
], 15));

console.log(searchMatrix([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 21));
