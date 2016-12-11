/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums, target) {
  const sum = target || nums.reduce((s, n) => s + n, 0);

  if (sum % 2) {
    return false;
  }

  const vol = Math.floor(sum / 2);

  const dp = [];
  dp[0] = true;

  for (let ii = 1; ii <= nums.length; ii++) {
    for (let jj = vol; jj >= nums[ii - 1]; jj--) {
      dp[jj] = dp[jj] || dp[jj - nums[ii - 1]];
    }
  }
  return !!dp[vol];
};

console.log(canPartition([1,5,11,5]), true);
console.log(canPartition([1,2,3,5]), false);
console.log(canPartition([1,2,3,4,5,6,7]), true);
console.log(canPartition([2,3,3,4,2,6]), true);
console.log(canPartition([12,13,14,15]), true);
