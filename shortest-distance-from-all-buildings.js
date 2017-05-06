/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
  if (!grid || !grid.length || !grid[0].length) {
    return -1;
  }
  const dpReach = grid.map(() => []);
  const dpSum = grid.map(() => []);
  let min = -1;
  let numOnes;
  for (let ii = 0; ii < grid.length; ii++) {
    for (let jj = 0; jj < grid[0].length; jj++) {
      if (grid[ii][jj] === 1) {
        min = bfsNewMin(ii, jj, grid, dpReach, dpSum, numOnes, -1);
        numOnes = numOnes ? numOnes + 1 : 1;
      }
    }
  }
  return min;
};

function bfsNewMin(x, y, grid, dpReach, dpSum, numOnes, oldMin) {
  const dir = [0, 1, 0, -1, 0];
  let min;
  let q = [{ x, y, val: 0 }];
  let head = 0;
  while (head < q.length) {
    const pos = q[head];
    for (var d = 0; d < dir.length - 1; d++) {
      const newPos = { x: pos.x + dir[d], y: pos.y + dir[d + 1], val: pos.val + 1 };
      if (newPos.x < grid.length && newPos.x >= 0 && grid[newPos.x][newPos.y] === 0 && dpReach[newPos.x][newPos.y] === numOnes) {
        q.push(newPos);
        dpSum[newPos.x][newPos.y] = dpSum[newPos.x][newPos.y] ? dpSum[newPos.x][newPos.y] + newPos.val : newPos.val;
        dpReach[newPos.x][newPos.y] = dpReach[newPos.x][newPos.y] ? dpReach[newPos.x][newPos.y] + 1 : 1;
        if ((!min || min > dpSum[newPos.x][newPos.y]) && dpReach[newPos.x][newPos.y] === (numOnes || 0) + 1) {
          min = dpSum[newPos.x][newPos.y];
        }
      }
    }
    head++;
  }
  return min || oldMin;
}

console.log(1, shortestDistance([[1,0]]));
console.log(-1, shortestDistance([[1,1]]));
console.log(-1, shortestDistance([[1,2,0,2,1]]));
console.log(-1, shortestDistance([[1,2,0,2,1],[0,2,1,2,0]]));
console.log(-1, shortestDistance([[1,0,2],[0,2,0],[2,0,1]]));
console.log(3, shortestDistance([[1,0], [1,0]]));
console.log(7, shortestDistance([[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]));
console.log(15, shortestDistance([[1,0,2,0,0],[0,0,0,1,0],[0,0,0,0,0],[2,2,0,0,0],[0,0,0,0,0],[0,0,1,1,1]]));
