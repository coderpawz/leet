/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  'use strict';
  const map = {};
  const ps = [];
  getSubsets(nums.sort((a,b) => a - b), map, ps);
  return ps;
};

var getSubsets = function(nums, map, ps) {
  'use strict';
  if(nums.length === 0) {
    map[''] = true;
    ps.push([]);
  } else {
    const first = nums[0];
    getSubsets(nums.slice(1), map, ps);
    for(let ii = ps.length-1; ii >= 0; ii--) {
      const sub = ps[ii];
      const hash = sub.join('');
      if(!map[first + hash]) {
        ps.push([first].concat(sub));
        map[first + hash] = true;
      }
    }
    if(!map[first]) {
      ps.push([first]);
      map[first] = true;
    }
  }
};

console.log('[1,2,2]');
console.log(subsetsWithDup([1,2,2]));
console.log();

console.log('[1,2,3,4,5,6,7,8,10,0]');
console.log(subsetsWithDup([1,2,2]));
console.log();