/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits || !digits.length) {
    return [];
  }

  const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    '0': [' ']
  };

  if (digits.length === 1) {
    return map[digits[0]];
  }

  const res = [];
  const digs = digits.split('').map(d => map[d]);

  digs[0].forEach(d => {
    helper(d, 0, digs, res);
  });

  return res;
};

function helper(prev, ii, digs, res) {
  (digs[ii + 1] || []).forEach(d => {
    if (ii + 1 === digs.length - 1) {
      res.push(prev+d);
    }
    helper(prev+d, ii + 1, digs, res);
  });
}


console.log(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
console.log(letterCombinations('23'));

console.log(['a', 'b', 'c']);
console.log(letterCombinations('2'));
