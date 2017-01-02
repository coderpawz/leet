/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return 0;
  }

  let max = 0;

  for (let ii = 0; ii < matrix.length; ii++) {
    for (let jj = 0; jj < matrix[ii].length; jj++) {
      matrix[ii][jj] = parseInt(matrix[ii][jj]);
      if (matrix[ii][jj] && ii && jj) {
        matrix[ii][jj] = Math.min(
          matrix[ii-1][jj],
          matrix[ii-1][jj-1],
          matrix[ii][jj-1]) + 1;
      }
      max = Math.max(max, Math.pow(matrix[ii][jj], 2));
    }
  }
  return max;
};

const m = [
  [1,0,1,0,0],
  [1,0,1,1,0],
  [1,1,1,1,1],
  [1,0,0,1,0]
];

console.log(maximalSquare(m), 4);
console.log(maximalSquare(['1']), 1);
