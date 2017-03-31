/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (!nums || !nums.length) {
    return [];
  }
  nums.sort((a, b) => a - b);
  const result = [];

  for (let ii = 0; ii < nums.length; ii++) {
    while (nums[ii] === nums[ii - 1]) ii++;
    const target = -nums[ii];
    let lo = ii + 1;
    let hi = nums.length - 1;
    while (lo < hi) {
      const sum = nums[lo] + nums[hi];
      if (target === sum) {
        result.push([nums[ii], nums[lo], nums[hi]]);
        while(nums[++lo] === nums[lo - 1]);
        while(nums[--hi] === nums[hi + 1]);
      } else if (target > sum) {
        while(nums[++lo] === nums[lo - 1]);
      } else {
        while(nums[--hi] === nums[hi + 1]);
      }
    }
  }
  return result;
};

console.log([[-1, 0, 1], [-1, -1, 2]]);
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

console.log([[0, 0, 0], [-1, -1, 2]]);
console.log(threeSum([-1,-1,-1,-1,-1,2,0,0,0,0]));
