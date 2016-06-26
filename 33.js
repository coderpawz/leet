/**
 * Suppose a sorted array is rotated at some pivot unknown to you beforehand.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if(!nums || !nums.length) {

  }
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    mid = Math.floor(start + (end - start)/2);
    if(nums[mid] === target) {
      return mid;
    }
    if(nums[mid] > target) {
      if((nums[start] < nums[mid] && nums[start] < target) || nums[end] > nums[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    } else {
      if((nums[end] > nums[mid] && nums[end] > target) || nums[start] < nums[mid]) {
        start = mid;
      } else {
        end = mid;
      }
    }
  }
  if (nums[0] === target) {
    return 0;
  }
  if (nums[nums.length-1] === target) {
    return nums.length-1;
  }
  return -1;
};

console.log('2', search([6,7,8,1], 8))
console.log()
console.log('4', search([4,5,6,7,0,1,2], 0))
console.log('0', search([0,1,2,4,5,6,7], 0))
console.log('1', search([0,1,2,4,5,6,7], 1))
console.log('2', search([0,1,2,4,5,6,7], 2))
console.log('-1', search([0,1,2,4,5,6,7], 3))
console.log('3', search([0,1,2,4,5,6,7], 4))
console.log('4', search([0,1,2,4,5,6,7], 5))
console.log('5', search([0,1,2,4,5,6,7], 6))
console.log('6', search([0,1,2,4,5,6,7], 7))
console.log()
console.log('4', search([4,5,6,7,0,1,2], 0))
console.log('5', search([4,5,6,7,0,1,2], 1))
console.log('6', search([4,5,6,7,0,1,2], 2))
console.log('-1', search([4,5,6,7,0,1,2], 3))
console.log('0', search([4,5,6,7,0,1,2], 4))
console.log('1', search([4,5,6,7,0,1,2], 5))
console.log('2', search([4,5,6,7,0,1,2], 6))
console.log('3', search([4,5,6,7,0,1,2], 7))
console.log()
