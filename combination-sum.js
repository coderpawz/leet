/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = [];
  if (!target || !candidates || !candidates.length) {
    return res;
  }

  candidates = candidates.reduce((cs, c, idx) => {
    if (idx && c === candidates[idx - 1]) {
      return cs;
    }
    if (c < target) {
      cs.push(c);
    }
    if(c === target) {
      res.push([c]);
    }
    return cs;
  }, []);
  helper(res, [], candidates, 0, target);

  return res;
};

function helper(res, list, nums, k, target) {
  const sum = list.reduce((sum, n) => sum + n, 0);
  if (sum === target) {
    res.push(list.slice());
    return;
  } else if (sum > target) {
    return;
  }

  for (let ii = k; ii < nums.length; ii++) {
    list.push(nums[ii]);
    helper(res, list, nums, ii, target);
    list.pop();
  }
}

console.log(combinationSum([2,6,3,7], 7));
console.log([[7],[2,2,3]]);

console.log(combinationSum([2,3,5], 8));
console.log([[2,2,2,2],[2,3,3],[3,5]]);
