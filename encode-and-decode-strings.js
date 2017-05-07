/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  return strs.reduce((res, str) => res += `${str.length}|${str}`, '');
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  const res = [];
  for (let ii = 0; ii < s.length; ii++) {
    const brk = s.indexOf('|', ii);
    const size = parseInt(s.slice(ii, brk));
    res.push(s.substr(brk + 1, size));
    ii = brk + size;
  }
  return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

console.log(['test', '"', '\'', '\\'])
console.log(decode(encode(['test', '"', '\'', '\\'])));

console.log([])
console.log(decode(encode([])));

console.log(['test'])
console.log(decode(encode(['test'])));
