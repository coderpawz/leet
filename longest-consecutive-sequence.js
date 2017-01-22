/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  const map = {};
  let max = 0;

  for (let ii = nums.length - 1; ii >= 0; ii--) {
    if (map[nums[ii]]) {
      continue;
    }
    map[nums[ii]] = {
      low: nums[ii],
      high: nums[ii]
    };
    if(map[nums[ii] + 1]) {
      map[nums[ii]] = map[nums[ii] + 1];
      map[nums[ii]].low = nums[ii];
    }
    if(map[nums[ii] - 1]) {
      map[nums[ii]].low = map[nums[ii] - 1].low;
      map[map[nums[ii]].low] = map[nums[ii]];
    }
    max = Math.max(max, (map[nums[ii]].high - map[nums[ii]].low) + 1);

  }
  return max;
};

console.log(4, longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(7, longestConsecutive([100, 4, 200, 1, 3, 2, 6, 7, 5]));
console.log(12, longestConsecutive([4, 1, 3, 8, 9, 11, 12, 2, 5, 6, 7, 10]));
console.log(9, longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
