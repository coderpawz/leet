/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length < 2) {
        return nums.map(n => n.toString());
    }
    let inRange = false;
    const result = nums.reduce((acc, n, k) => {
        if (k === 0) {
            acc[acc.length] = n.toString();
            return acc;
        }
        if (inRange && nums[k - 1] === n - 1) {
            return acc;
        } else if (inRange) {
            inRange = false;
            acc[acc.length - 1] += nums[k - 1].toString();
            acc[acc.length] = n.toString();
            return acc;
        } else if (nums[k - 1] === n - 1) {
            inRange = true;
            acc[acc.length - 1] += '->';
            return acc;
        } else {
            acc[acc.length] = n.toString();
            return acc;
        }
    }, []);
    if (inRange) {
        result[result.length - 1] += nums[nums.length - 1];
    }
    return result;
};

console.log(summaryRanges([]), []);
console.log(summaryRanges([0]), ['0']);
console.log(summaryRanges([0,1]), ['0->1']);
console.log(summaryRanges([0,2]), ['0','2']);
console.log(summaryRanges([0,1,2,4,5,7]), ['0->2', '4->5', '7']);
console.log(summaryRanges([0,1,2,4,5,7,8,9]), ['0->2', '4->5', '7->9']);
