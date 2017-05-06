/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 1;
  let res = [];
  for (var ii = digits.length - 1; ii >= 0; ii--) {
    const temp = digits[ii] + carry;
    carry = Math.floor(temp / 10);
    res.push(temp % 10);
  }
  if (carry) {
    res.push(carry);
  }
  return res.reverse();
};

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(plusOne([1, 2, 3, 4, 5, 6, 7, 8, 8]));

console.log([1, 2, 3, 4, 5, 6, 7, 9, 0]);
console.log(plusOne([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log([1]);
console.log(plusOne([0]));

console.log([1, 0, 0, 0, 0]);
console.log(plusOne([9, 9, 9, 9]));

console.log([1, 1, 1, 0, 0]);
console.log(plusOne([1, 1, 0, 9, 9]));
