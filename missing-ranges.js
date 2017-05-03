/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  const ranges = [];
  let start = lower;
  let end;
  let idx = 0;
  for (var ii = idx; ii < nums.length; ii++) {
    end = nums[ii] - 1;
    if (end > start) {
      ranges.push(`${start}->${end}`);
    } else if (end === start) {
      ranges.push(`${start}`);
    }
    start = nums[ii] + 1;
  }
  end = upper;
  if (end > start) {
    ranges.push(`${start}->${end}`);
  } else if (end === start) {
    ranges.push(`${start}`);
  }
  return ranges;
};

console.log(['2', '4->49', '51->74', '76->99']);
console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));

console.log([]);
console.log(findMissingRanges([0, 1], 0, 1));

console.log(['1']);
console.log(findMissingRanges([0, 0], 0, 1));

console.log(['2']);
console.log(findMissingRanges([0, 1], 0, 2));

console.log(['0->1']);
console.log(findMissingRanges([], 0, 1));

console.log(['0']);
console.log(findMissingRanges([], 0, 0));

console.log(['0','2']);
console.log(findMissingRanges([1], 0, 2));

console.log(['-10->-1','7','9->10','12->123455']);
console.log(findMissingRanges([0,1,2,3,4,5,5,5,5,6,6,6,8,8,8,11,123456], -10, 123456));

console.log([]);
console.log(findMissingRanges([0], 0, 0));

console.log(['1']);
console.log(findMissingRanges([0], 1, 1));

