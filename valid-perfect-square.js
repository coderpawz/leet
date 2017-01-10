/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let start = 1;
  let end = Math.ceil(num / 2);
  let mid = end;
  let temp = num / end;
  while (start + 1 < end) {
    mid = Math.floor(start + (end - start) / 2);
    temp = num / mid;
    if (temp === mid) {
      return true;
    }
    if (temp < mid) {
      end = mid;
    } else {
      start = mid;
    }
  }
  return temp === mid;
};

console.log(isPerfectSquare(4), true);
console.log(isPerfectSquare(9), true);
console.log(isPerfectSquare(16), true);
console.log(isPerfectSquare(25), true);
console.log(isPerfectSquare(24), false);
console.log(isPerfectSquare(10), false);
console.log(isPerfectSquare(2), false);
console.log(isPerfectSquare(1), true);
console.log(isPerfectSquare(2147483647), false);
