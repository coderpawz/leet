/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const num = /\d/;
  let reps = [];
  let strs = [];
  let groups = 0;
  let rep = 0;
  let str = '';
  let res = '';
  for (let ii = 0; ii < s.length; ii++) {
    let ch = s[ii];
    if (ch === '[') {
      groups++;
      reps.push(rep);
      strs.push(str);
      rep = 0;
      str = '';
    } else if (ch === ']') {
      groups--;
      const temp = str;
      str = strs.pop();
      rep = reps.pop();
      while(rep) {
        str += temp;
        rep--;
      }
    } else if (num.test(ch)) {
      let temp = '';
      while(num.test(ch)) {
        temp += ch;
        ch = s[++ii];
      }
      ii--;
      rep = parseInt(temp);
    } else {
      str += ch;
    }
    if (!groups) {
      res += str;
      str = '';
    }
  }
  return res + str;
};


console.log('expect', 'aaabcbc');
console.log('actual', decodeString('3[a]2[bc]'));

console.log('expect', 'accaccacc');
console.log('actual', decodeString('3[a2[c]]'));

console.log('expect', 'abcabccdcdcdef');
console.log('actual', decodeString('2[abc]3[cd]ef'));
