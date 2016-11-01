/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    'use strict';
    const ps = [];
    // getSubsetsRecursive(nums, 0, ps);
    getSubsetsIterative(nums, ps);
    return ps;
};

var getSubsetsIterative = function(nums, ps) {
    ps[ps.length] = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        for(let ii = ps.length - 1; ii >= 0; ii--) {
            const a = [nums[i]];
            for (var iii = ps[ii].length - 1; iii >= 0; iii--) {
                a[a.length] = ps[ii][iii];
            }
            ps[ps.length] = a;
        }
    }
};

var getSubsetsRecursive = function(nums, fi, ps) {
    'use strict';
    if(nums.length === fi) {
        ps.push([]);
    } else {
        const first = nums[fi];
        getSubsetsRecursive(nums, fi+1, ps);
        for(let ii = ps.length-1; ii >= 0; ii--) {
            ps.push([first].concat(ps[ii]));
        }
    }
};

console.log('[ [], [ 3 ], [ 2, 3 ], [ 2 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 1 ] ]');
console.log(subsets([1,2,3]));
console.log();

// console.log('[1,2,3,4,5,6,7,8,10,0]')
// console.log(subsets([1,2,3,4,5,6,7,8,10,0]));

// let then;
// let times = [];
// for (var i = 0; i < 50; i++) {
//     then = Date.now();
//     subsets([1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,19,0]);
//     times.push(Date.now() - then);
// }
// console.log(times.reduce((n, k) => n+k, 0)/times.length);

