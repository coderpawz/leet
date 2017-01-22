/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const map = nums.reduce((m, n, i) => {
    m[n] = i;
    return m;
  }, {});
  return nums.reduce((arr, n, i) => {
    if (arr.length < 2 && map[target - n]) {
      return [i, map[target - n]];
    }
    return arr;
  }, []);
};

console.log([4, 5], twoSum([0, 1, 2, 3, 4, 5], 9));
