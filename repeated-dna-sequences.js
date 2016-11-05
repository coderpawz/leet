/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  if (s.length <= 10) {
    return [];
  }
  const res = [];
  const subs = {};
  let temp;
  for (var start = 0; start + 10 <= s.length; start++) {
    temp = s.slice(start, start+10);
    if (subs[temp] === 1) {
      res[res.length] = temp;
      subs[temp]++;
    } else if(!subs[temp]) {
      subs[temp] = 1;
    }
  }
  return res;
};

console.log(
  ['AAAAACCCCC', 'CCCCCAAAAA'],
  findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
