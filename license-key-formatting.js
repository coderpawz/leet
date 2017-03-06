/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  let res = '';

  let idx = S.length - 1;

  let blockSize = 0;
  while (idx >= 0) {
    while (S[idx] === '-') {
      --idx;
    }
    if (idx < 0) {
      return res.toUpperCase();
    }
    if (blockSize === K) {
      res = '-' + res;
      res = S[idx] + res;
      blockSize = 1;
    } else {
      res = S[idx] + res;
      ++blockSize;
    }
    --idx;
  }

  return res.toUpperCase();
};

console.log('24A0-R74K', licenseKeyFormatting('2-4A0r7-4k', 4));
console.log('24-A0R-74K', licenseKeyFormatting('2-4A0r7-4k', 3));
console.log('24-A0-R7-4K', licenseKeyFormatting('2-4A0r7-4k', 2));
