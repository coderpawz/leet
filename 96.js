/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  if(n <= 1) {
    return 1;
  }
  let counts = [1, 1];
  for (var ii = 2; ii <= n; ii++) {
    counts[ii] = 0;
    for (let kk = 0, jj = ii - 1; jj >= 0; kk++, jj--) {
      counts[ii] += counts[kk] * counts[jj];
    }
  }
  return counts[n];
}

function numTreesRecursive(curr, n, soFar) {
  if (curr > n) {
    return soFar[soFar.length - 1];
  }
  let count = 0;
  for (let ii = 0, jj = soFar.length - 1; ii < soFar.length && jj >= 0; ii++, jj--) {
    count += soFar[ii] * soFar[jj];
  }
  soFar.push(count);
  return numTreesRecursive(curr + 1, n, soFar);
};

console.log(1, numTrees(0));
console.log(1, numTrees(1));
console.log(2, numTrees(2));
console.log(5, numTrees(3));
console.log(14, numTrees(4));
