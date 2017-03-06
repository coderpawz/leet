/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  const isOddLength = s.length % 2;
  const map = {};
  for(let ii = s.length - 1; ii >= 0; ii--) {
    map[s[ii]] = (map[s[ii]] || 0) + 1;
  }
  const letters = Object.keys(map);
  let numOddCounts = 0;
  for(let jj = letters.length - 1; jj >= 0; jj--) {
    let isOdd = map[letters[jj]] % 2;
    if (isOdd && !numOddCounts) {
      ++numOddCounts;
    } else if (isOdd) {
      return false;
    }
  }

  return !!(isOddLength || !numOddCounts);
};

console.log(true, canPermutePalindrome('aabbc'));
