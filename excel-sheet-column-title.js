/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  const letters = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let rem = 0;
  let num = n
  let res = '';
  while (num > 0) {
    if (num <= 26) {
      return letters[num] + res;
    } else {
      rem = Math.floor(num % 26);
      if (rem === 0) {
        res = letters[26] + res;
        num--;
      } else {
        res = letters[rem] + res;
      }
    }
    num = Math.floor(num / 26);
  }
  return res;
};

console.log('A', convertToTitle(1));
console.log('B', convertToTitle(2));
console.log('C', convertToTitle(3));
console.log('Z', convertToTitle(26));
console.log('AA', convertToTitle(27));
console.log('AB', convertToTitle(28));
console.log('AC', convertToTitle(29));
console.log('AY', convertToTitle(51));
console.log('AZ', convertToTitle(52));
console.log('BA', convertToTitle(53));
console.log('BY', convertToTitle(77));
console.log('BZ', convertToTitle(78));
console.log('YZ', convertToTitle(676));
console.log('YYY', convertToTitle(17575));
console.log('YYZ', convertToTitle(17576));
console.log('YZA', convertToTitle(17577));
