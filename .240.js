/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target, sr, sc, er, ec, rs, cs) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return false;
  }
  let startRow = typeof sr === 'undefined' ? 0 : sr;
  let startCol = typeof sc === 'undefined' ? 0 : sc;
  rs = typeof rs === 'undefined' ? matrix.length : rs;
  cs = typeof cs === 'undefined' ? matrix[0].length : cs;
  er = typeof er === 'undefined' ? matrix.length - 1 : er;
  ec = typeof ec === 'undefined' ? matrix[0].length - 1 : ec;
  const smaller = Math.min(er - startRow, ec - startCol);
  let endRow = startRow + smaller;
  let endCol = startCol + smaller;
  if (startRow < 0 || startCol < 0 || endRow < 0 || endCol < 0) {
    return false;
  }
  const rows = (er - startRow) + 1;
  const cols = (ec - startCol) + 1;
  // console.log(rows, cols, rs, cs);
  if(rows <= 0 || cols <= 0 || cols > cs || rows > rs) {
    return false;
  }
  if(rows === 1 && cols === 1) {
    return target === matrix[startRow][startCol];
  }
  while(startRow + 1 < endRow) {
    const midRow = startRow + Math.floor((endRow - startRow) / 2);
    const midCol = startCol + Math.floor((endCol - startCol) / 2);
    // console.log(midRow, midCol);
    if (matrix[midRow][midCol] === target) {
      return true;
    } else if(matrix[midRow][midCol] > target) {
        endRow = midRow;
        endCol = midCol;
    } else {
        startRow = midRow;
        startCol = midCol;
    }
  }
  // console.log(startRow, startCol, endRow, endCol);
  // console.log(cols, rows);
  if (matrix[startRow][startCol] === target || matrix[endRow][endCol] === target || matrix[startRow][endCol] === target || matrix[endRow][startCol] === target) {
    return true;
  } else if(cols <= 2 && rows <= 2) {
    return false;
  }
  console.log(0, startCol + 1, endRow, ec, rows, cols);
  console.log(startRow + 1, 0, er, endCol, rows, cols);
  console.log();
  return searchMatrix(matrix, target, 0, startCol + 1, endRow, ec, rows, cols) || searchMatrix(matrix, target, startRow + 1, 0, er, endCol, rows, cols) || (matrix[er][ec] === target);
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
