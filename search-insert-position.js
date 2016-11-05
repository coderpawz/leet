/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  if (!nums || !nums.length) {
    return 0;
  }
  let start = 0;
  let end = nums.length - 1;
  while(start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid;
    }
  }
  if (target <= nums[start]) {
    return start;
  }
  if (target <= nums[end]) {
    return end;
  }
  return end + 1;
};

console.log(searchInsert([1,3,5,6], 5), 2);
console.log(searchInsert([1,3,5,6], 2), 1);
console.log(searchInsert([1,3,5,6], 7), 4);
console.log(searchInsert([1,3,5,6], 0), 0);
