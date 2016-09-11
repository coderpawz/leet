/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const solutions = [[],[]];
    for (var ii = 0; ii <= m; ii++) {
      solutions[0][ii] = 0;
      solutions[1][ii] = 1;
    }
    for (var ii = 2; ii <= n; ii++) {
      solutions[ii] = [];
      solutions[ii].push(0,1);
    }
    solutions[1][0] = 0;
    for (var ii = 2; ii <= n; ii++) {
      for (var jj = 2; jj <= m; jj++) {
        solutions[ii][jj] = solutions[ii - 1][jj] + solutions[ii][jj - 1];
      }
    }
    return solutions[n][m];
};

console.log('1 x 1 = ', 1, uniquePaths(1, 1));
console.log('2 x 1 = ', 1, uniquePaths(2, 1));
console.log('1 x 2 = ', 1, uniquePaths(1, 2));
console.log('1 x 3 = ', 1, uniquePaths(1, 3));
console.log('1 x 4 = ', 1, uniquePaths(1, 4));
console.log('2 x 2 = ', 2, uniquePaths(2, 2));
console.log('2 x 3 = ', 3, uniquePaths(2, 3));
console.log('3 x 2 = ', 3, uniquePaths(3, 2));
console.log('3 x 3 = ', 6, uniquePaths(3, 3));
console.log('4 x 3 = ', 10, uniquePaths(4, 3));
console.log('3 x 4 = ', 10, uniquePaths(3, 4));
console.log('4 x 4 = ', 20, uniquePaths(4, 4));
console.log('5 x 5 = ', 70, uniquePaths(5, 5));
console.log('100 x 100 = ', 70, uniquePaths(100, 100));
