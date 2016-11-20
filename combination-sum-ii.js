/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  // candidates.sort((a, b) => a - b);

  const res = [];
  if (!target || !candidates || !candidates.length) {
    return res;
  }

  candidates.sort((a, b) => a - b);
  helper(res, [], 0, candidates, target);

  return res;
};

function helper(res, list, k, candidates, target) {
  const sum = list.reduce((sum, n) => sum + n, 0);
  if (sum === target) {
    res.push(list.slice());
    return;
  }
  if (sum > target) {
    return;
  }

  for (var ii = k; ii < candidates.length; ii++) {
    if (ii != k && candidates[ii] === candidates[ii - 1]) {
      continue;
    }
    list.push(candidates[ii]);
    helper(res, list, ii + 1, candidates, target);
    list.pop();
  }
}

console.log(combinationSum2([2,6,3,7], 7));
console.log([[7]]);

console.log(combinationSum2([2,3,5], 8));
console.log([[3,5]]);

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log([[1, 7], [1, 2, 5], [2, 6], [1, 1, 6]]);
