/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const chars = {};
  let max = 0;
  let ii = 0;
  let diffChars = 0;
  for (var jj = 0; jj < s.length; jj++) {
    if (!chars[s[jj]]) {
      diffChars++;
      chars[s[jj]] = 0;
    }
    chars[s[jj]]++;
    if (diffChars > k) {
      while(--chars[s[ii++]] > 0);
      diffChars--;
    }
    max = Math.max(max, jj - ii + 1);
  }
  return max;
};


console.log(0, lengthOfLongestSubstringKDistinct('aa', 0));
console.log(1, lengthOfLongestSubstringKDistinct('ab', 1));
console.log(1, lengthOfLongestSubstringKDistinct('a', 1));
console.log(3, lengthOfLongestSubstringKDistinct('eceba', 2));
console.log(4, lengthOfLongestSubstringKDistinct('ecebaba', 2));
