/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || !nums.length) {
    return 0;
  }
  let ii = 0;
  for (let jj = 1; jj < nums.length; jj++) {
    if (nums[ii] === nums[jj]) {
      continue;
    }
    if (nums[ii] > nums[jj]) {
      break;
    }
    nums[++ii] = nums[jj];
  }
  return ii + 1;
};

let nums = [1,1,2];
console.log(removeDuplicates(nums), 2);
console.log(nums);
console.log([1,2]);
console.log('====================');
