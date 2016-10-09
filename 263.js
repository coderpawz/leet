/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (!num) {
        return false;
    }
    if (num === 1) {
        return true;
    }

    const nums = [2,3,5];
    for (var i = nums.length - 1; i >= 0; i--) {
        if (num % nums[i] === 0) {
            return isUgly(num / nums[i]);
        }
    }
    return false;
};

console.log(true, isUgly(6));
console.log(true, isUgly(8));
console.log(false, isUgly(14));
