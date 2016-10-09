/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    'use strict';
    return getSubsetsIterative(nums);
};


var getSubsetsIterative = function(nums) {
    let ps = [[]];
    let psTemp;
    for (let i = nums.length - 1; i >= 0; i--) {
        psTemp = [];
        for (var ii = ps.length - 1; ii >= 0; ii--) {
            for (var iii = ps[ii].length; iii >= 0; iii--) {
                psTemp.push(spliceCopy(ps[ii], iii, 0, nums[i]));
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

console.log('[ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]');
console.log(permute([1,2,3]));
console.log();
