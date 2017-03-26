/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (!s) {
    return 0;
  }

  let dp = [];
  dp[s.length] = 1;
  dp[s.length - 1] = s[s.length - 1] != '0' ? 1 : 0;

  for (let ii = s.length - 2; ii >= 0; ii--) {
    if (s[ii] === '0') {
      dp[ii] = 0;
      continue;
    }
    dp[ii] = (s[ii] + s[ii + 1]) <= '26' ? dp[ii + 1] + dp[ii + 2] : dp[ii + 1];
  }
  return dp[0] || 0;
};

console.log(0, numDecodings(''));
console.log(1, numDecodings('1'));
console.log(1, numDecodings('2'));
console.log(1, numDecodings('3'));
console.log(1, numDecodings('4'));
console.log(1, numDecodings('5'));
console.log(1, numDecodings('6'));
console.log(1, numDecodings('7'));
console.log(1, numDecodings('8'));
console.log(1, numDecodings('9'));
console.log(1, numDecodings('10'));
console.log(1, numDecodings('101'));
console.log(2, numDecodings('12'));
console.log(3, numDecodings('121'));
console.log(6, numDecodings('12323'));
console.log(18, numDecodings('12321521'));
