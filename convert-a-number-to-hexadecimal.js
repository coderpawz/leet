/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num < 0) {
    num = ((~ Math.abs(num)) + 1) >>> 0;
  }

  return getHex(num);
};

function getHex(n) {
  const hexTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  if (n < 16) {
    return hexTable[n];
  }
  let res = '';
  let div = n;
  let rem;
  while (div >= 16) {
    rem = div % 16;
    div = Math.floor(div / 16);
    res = hexTable[rem] + res;
  }
  return hexTable[div] + res;
}

console.log('ff', toHex(255));
console.log('0', toHex(0));
console.log('a', toHex(10));
console.log('12c', toHex(300));
console.log('ffffffff', toHex(-1));
console.log('a', toHex(10));
console.log('fffffff6', toHex(-10));
