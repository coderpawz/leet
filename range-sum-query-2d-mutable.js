/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (!matrix || !matrix.length || !matrix[0] || !matrix[0].length) {
    return;
  }
  this.matrix = matrix;
  this.colSum = [[]];
  for (let jj = 0; jj <= matrix[0].length; jj++) {
    this.colSum[0][jj] = 0;
  }
  for (let ii = 1; ii <= matrix.length; ii++) {
    this.colSum[ii] = [];
    for (let jj = 0; jj < matrix[0].length; jj++) {
      this.colSum[ii][jj] = this.colSum[ii - 1][jj] + matrix[ii - 1][jj];
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
  if (!this.matrix || !this.matrix.length || !this.matrix[0] || !this.matrix[0].length) {
    return;
  }
  for (let ii = row + 1; ii < this.colSum.length; ii++) {
    this.colSum[ii][col] += val - this.matrix[row][col];
  }
  this.matrix[row][col] = val;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  if (!this.matrix || !this.matrix.length || !this.matrix[0] || !this.matrix[0].length) {
    return 0;
  }
  let sum = 0;
  for (let jj = col1; jj <= col2; jj++) {
    sum += this.colSum[row2 + 1][jj] - this.colSum[row1][jj];
  }
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */

const m = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]
);
console.log(8, m.sumRegion(2, 1, 4, 3));
m.update(3, 2, 2);
m.update(3, 2, 2);
m.update(3, 2, 2);
m.update(3, 2, 2);
console.log(10, m.sumRegion(2, 1, 4, 3));

//Binary index tree implementation
// /**
//  * @param {number[][]} matrix
//  */
// var NumMatrix = function(matrix) {
//   if (!matrix || !matrix.length || !matrix[0] || !matrix[0].length) {
//     return;
//   }
//   this.matrix = [];
//   this.bit = [];//binary index tree
//   for (let ii = 0; ii <= matrix.length; ii++) {
//     this.bit[ii] = [];
//     for (let jj = 0; jj < matrix[0].length; jj++) {
//       this.bit[ii][jj] = 0;
//     }
//   }
//   for (let ii = 0; ii < matrix.length; ii++) {
//     this.matrix[ii] = [];
//     for (let jj = 0; jj < matrix[ii].length; jj++) {
//       this.matrix[ii][jj] = 0;
//       this.update(ii, jj, matrix[ii][jj]);
//     }
//   }
// };

// /**
//  * @param {number} row
//  * @param {number} col
//  * @param {number} val
//  * @return {void}
//  */
// NumMatrix.prototype.update = function(row, col, val) {
//   if (!this.matrix || !this.matrix.length || !this.matrix[0] || !this.matrix[0].length) {
//     return;
//   }
//   const diff = val - this.matrix[row][col];
//   this.matrix[row][col] = val;
//   for (let ii = row + 1; ii < this.bit.length; ii += ii & -ii) {//two's complement
//     this.bit[ii][col] += diff;
//   }
// };

// /**
//  * @param {number} row1
//  * @param {number} col1
//  * @param {number} row2
//  * @param {number} col2
//  * @return {number}
//  */
// NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
//   if (!this.matrix || !this.matrix.length || !this.matrix[0] || !this.matrix[0].length) {
//     return 0;
//   }
//   let sum = 0;
//   for (let jj = col1; jj <= col2; jj++) {
//     for (let ii = row2 + 1; ii > 0; ii -= ii & -ii) {
//       sum += this.bit[ii][jj];
//     }
//     for (let ii = row1; ii > 0; ii -= ii & -ii) {
//       sum -= this.bit[ii][jj];
//     }
//   }
//   return sum;
// };

// /**
//  * Your NumMatrix object will be instantiated and called as such:
//  * var obj = Object.create(NumMatrix).createNew(matrix)
//  * obj.update(row,col,val)
//  * var param_2 = obj.sumRegion(row1,col1,row2,col2)
//  */
