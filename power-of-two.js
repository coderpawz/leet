/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return (/^10*$/).test((n).toString(2));
};

console.log(true, isPowerOfTwo(1));
console.log(true, isPowerOfTwo(2));
console.log(true, isPowerOfTwo(4));
console.log(true, isPowerOfTwo(8));
console.log(false, isPowerOfTwo(10));
