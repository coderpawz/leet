/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const sign = (dividend < 0) ^ (divisor < 0);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let res = 0;
  while (dividend >= divisor) {
    let temp = divisor;
    let ii = 1;
    while (temp <= (dividend >> 1)) {
      ii = ii << 1;
      temp = temp << 1;
    }
    dividend -= temp;
    res += ii;
  }
  return sign ?
    Math.max(-res, -2147483648) :
    Math.min(res, 2147483647);
};

console.log(divide(15, 3), 5);
console.log(divide(20, 3), 6);
console.log(divide(2147483647, 1), 2147483647);
console.log(divide(-2147483647, 1), -2147483647);
console.log(divide(2147483648, -1), -2147483648);
