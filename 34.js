/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let first = -1;
  let last = -1;
  if (!nums || !nums.length) {
    return [first, last];
  }
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end && first === -1) {
    mid = Math.floor(start + (end - start)/2);
    if (nums[mid] === target && ((mid > 0 && nums[mid - 1] < target) || mid === 0)) {
      first = mid
    } else if (nums[mid] >= target) {
      end = mid;
    } else {
      start = mid;
    }
  }
  first = (nums[0] === target) ? 0 : (first === -1 && nums[nums.length-1] === target) ? nums.length-1 : first;
  if (first !== -1) {
    start = first;
    end = nums.length - 1;
    while (start + 1 < end && last === -1) {
      mid = Math.floor(start + (end - start)/2);
      if (nums[mid] === target && ((mid < nums.length-1 && nums[mid + 1] > target) || mid === nums.length - 1)) {
        last = mid
      } else if (nums[mid] > target) {
        end = mid;
      } else {
        start = mid;
      }
    }
  }
  console.log(last)
  last = (nums[nums.length-1] === target) ? nums.length-1 : (last === -1) ? first : last;
  return [first, last];
};

console.log('[3,4]', searchRange([5,7,7,8,8,10], 8));
console.log('[0,2]', searchRange([3,3,3], 3));
console.log('[0,1]', searchRange([1,1,2], 1));
console.log('[10,13]', searchRange([0,0,1,1,1,2,2,3,3,3,4,4,4,4,5,5,6,6,6,8,10,10], 4));
console.log('[4,6]', searchRange([0,0,0,0,1,1,1,2,3,3,3,3,3,4,4,4], 1));
