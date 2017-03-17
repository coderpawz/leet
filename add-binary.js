/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const len = Math.max(a.length, b.length);
  const res = [];
  let carry = 0;
  for (let ii = 1; ii <= len; ii++) {
    const n = a[a.length - ii] ? +a[a.length - ii] : 0;
    const m = b[b.length - ii] ? +b[b.length - ii] : 0;
    res[len - ii] = (n ^ m) ^ carry;
    carry = (n & m) || (n ^ m) & carry;
  }
  return carry ? 1 + res.join('') : res.join('');
};

console.log('100', addBinary('11', '1'));
console.log('10100', addBinary('1111', '101'));
console.log('10', addBinary('1', '1'));
console.log('0100', addBinary('0100', '0000'));
console.log('0100', addBinary('0100', '0000'));
console.log('100000000000000000000000', addBinary('00000000000000000000000', '100000000000000000000000'));
