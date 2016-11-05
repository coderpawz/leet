/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  //convert the number to base 3 and check that it is 10*
  return /^10*$/.test(Number.prototype.toString.call(n, 3));
};

console.log(0, false, isPowerOfThree(0));
console.log(1, true, isPowerOfThree(1));
console.log(3, true, isPowerOfThree(3));
console.log(9, true, isPowerOfThree(9));
console.log(27, true, isPowerOfThree(27));
console.log(1162261467, true, isPowerOfThree(1162261467));
console.log(15, false, isPowerOfThree(15));
