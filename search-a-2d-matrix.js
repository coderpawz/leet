/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
  if (!matrix || !matrix.length || !matrix[0] || !matrix[0].length) {
    return false;
  }
  const cols = matrix[0].length;
  let start = 0;
  let end = (matrix.length * matrix[0].length) - 1;
  while (start + 1 < end) {
    const mid = start + Math.floor((end -start) / 2);
    const [row, col] = idx2pos(mid, cols);
    if (target === matrix[row][col]) {
      return true;
    } else if (target > matrix[row][col]) {
      start = mid;
    } else {
      end = mid;
    }
  }
  let [row, col] = idx2pos(start, cols);
  if (target === matrix[row][col]) {
    return true;
  }
  [row, col] = idx2pos(end, cols);
  if(target === matrix[row][col]) {
    return true;
  }
  return false;
};

function idx2pos(idx, cols) {
  return [Math.floor(idx / cols), idx % cols];//[row, col]
}
// function pos2idx(row, col, cols) {
//   return (cols * row) + col;
// }


console.log(searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 3), true);
