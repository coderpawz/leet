/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (!nums || !nums.length) {
    return;
  }
  let insertPos = 0;
  for (let ii = 0; ii < nums.length; ii++) {
    if (nums[ii] !== 0) {
      nums[insertPos] = nums[ii];
      insertPos++;
    }
  }
  for (var ii = nums.length - 1; ii >= insertPos; ii--) {
    nums[ii] = 0;
  }
};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log([1, 3, 12, 0, 0])
console.log(nums);
