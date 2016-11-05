/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (!nums || !nums.length) {
    return -1;
  }
  if (nums.length === 1) {
    return 0;
  }
  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start + 1 < end) {
    mid = Math.floor(start + (end - start)/2);
    if ((mid - 1 < 0 || nums[mid - 1] < nums[mid]) && (mid + 1 === nums.length || nums[mid + 1] < nums[mid])) {
      return mid;
    } else if(mid - 1 >= 0 && nums[mid] < nums[mid - 1]) {
      end = mid;
    } else {
      start = mid;
    }
  }
  if(nums[0] > nums[1]) {
    return 0;
  }
  if(nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1;
  }
  return -1;
};

// public int findPeak(int[] A) {
//     // write your code here
//     int start = 1, end = A.length-2; // 1.答案在之间，2.不会出界
//     while(start + 1 <  end) {
//         int mid = (start + end) / 2;
//         if(A[mid] < A[mid - 1]) {
//             end = mid;
//         } else if(A[mid] < A[mid + 1]) {
//             start = mid;
//         } else {
//             end = mid;
//         }
//     }
//     if(A[start] < A[end]) {
//         return end;
//     } else {
//         return start;
//     }
// }

console.log('2', findPeakElement([1,2,3,1]));
console.log();

console.log('2', findPeakElement([1,2,3]));
console.log();

console.log('0', findPeakElement([4,1,2,2]));
console.log();

console.log('12', findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,12]));
console.log();
