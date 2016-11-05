/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  'use strict';
  return getSubsetsIterative(nums);
};


var getSubsetsIterative = function(nums) {
  const uniqueness = {};
  let ps = [[]];
  let psTemp;
  for (let i = nums.length - 1; i >= 0; i--) {
    psTemp = [];
    for (var ii = ps.length - 1; ii >= 0; ii--) {
      for (var iii = ps[ii].length; iii >= 0; iii--) {
        const candidate = spliceCopy(ps[ii], iii, 0, nums[i]);
        const hash = candidate.join(',');
        if(!uniqueness[hash]) {
          psTemp.push(candidate);
          uniqueness[hash] = true;
        }
      }
    }
    ps = psTemp;
  }
  return ps;
};

function spliceCopy(arr, start, del, item) {
  const temp = arr.slice();
  temp.splice(start, del, item);
  return temp;
}

console.log('[ [1,1,2], [2,1,1], [1,2,1,] ]');
console.log(permuteUnique([1,2,1]));
console.log();
