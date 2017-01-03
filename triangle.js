/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(tri) {
  if (!tri || !tri.length || !tri[0].length) {
    return Number.MAX_VALUE;
  }

  const res = [[]];

  res[0] = [];
  res[1] = [];
  res[(tri.length - 1) % 2] = tri[tri.length - 1];

  for (let ii = tri.length - 2; ii >= 0; ii--) {
    res[ii] = res[ii] || [];
    for (let jj = 0; jj < tri[ii].length; jj++) {
      res[ii % 2][jj] = tri[ii][jj] + Math.min(res[(ii + 1) % 2][jj], res[(ii + 1) % 2][jj + 1]);
    }
  }
  return res[0][0];
};


let test = [
   [2],
  [3,4],
 [6,5,7],
[4,1,8,3]
];

console.log(minimumTotal(test), 11);
