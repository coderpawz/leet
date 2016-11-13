/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const map = {};
  const comp = (a, b) => a - b;
  for (var ii = s.length - 1; ii >= 0; ii--) {
    if (map[s[ii]]) {
      map[s[ii]].val++;
    } else {
      map[s[ii]] = {
        val: 1,
        idx: ii
      };
    }
  }
  return s
    .split('')
    .sort((a, b) => map[a].val === map[b].val ?
      comp(map[a].idx, map[b].idx) :
      comp(map[b].val, map[a].val))
    .join('');
};




console.log('eert', frequencySort('tree'));
console.log('cccaaa', frequencySort('cccaaa'));
console.log('bbaA', frequencySort('Aabb'));
