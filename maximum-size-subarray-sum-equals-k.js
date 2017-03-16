/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
  let max = 0;
  let sum = 0;
  const map = { 0: -1 };

  for (let ii = 0; ii < nums.length; ii++) {
    sum += nums[ii];
    if (map[sum] === undefined) {
      map[sum] = ii;
    }
    if(map[sum - k] !== undefined) {
      max = Math.max(max, ii - map[sum - k]);
    }
  }

  return max;
};

console.log(0, maxSubArrayLen([], 1));
console.log(0, maxSubArrayLen([1,2,3], 9));
console.log(4, maxSubArrayLen([1, -1, 5, -2, 3], 3));
console.log(2, maxSubArrayLen([-2, -1, 2, 1], 1));
