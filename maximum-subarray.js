/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums || !nums.length) {
    return [];
  }
  let max = { start: 0, end: 0, val: nums[0] };
  const dp = [{ start: 0, end: 0, val: nums[0] }];

  for (let ii = 1; ii < nums.length; ii++) {
    dp[ii] = {};
    dp[ii].end = ii;
    if ((dp[ii - 1].val + nums[ii]) < nums[ii]) {
      dp[ii].start = ii;
      dp[ii].val = nums[ii];
    } else {
      dp[ii].start = dp[ii - 1].start;
      dp[ii].val = dp[ii - 1].val + nums[ii];
    }
    if (max.val < dp[ii].val) {
      max = dp[ii];
    }
  }

  return max.val;
};

console.log(6, maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
