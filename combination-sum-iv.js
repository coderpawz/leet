/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  if (!target) {
    return 1;
  }

  const dp = new Array(target + 1);
  dp.fill(0);
  dp[0] = 1;

  for (let ii = 1; ii <= target; ii++) {
    for (let jj = 0; jj < nums.length; jj++) {
      if (ii >= nums[jj]) {
        dp[ii] += dp[ii - nums[jj]];
      }
    }
  }

  return dp[target];
};

console.log(combinationSum4([1], 1), 1);
console.log(combinationSum4([1], 2), 1);
console.log(combinationSum4([1,2], 3), 3);
console.log(combinationSum4([1,2,3], 4), 7);
console.log(combinationSum4([4,2,1], 32), 39882198);
