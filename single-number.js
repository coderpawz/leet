/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  let result = 0;
  for (let i = 0; i<nums.length; i++)
    {
    result ^= nums[i];
  }
  return result;
};

console.log(singleNumber([123, 123, 43, 43, 5, 67, 67]));
console.log(5);
