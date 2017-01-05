/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(str) {
  str = '+' + str + '+';
  let total = 0;
  let term = 0;
  let n;
  let op;
  for (let ii = 0; ii < str.length;) {
    while((op = str[ii++]) === ' ') {/**/}
    if (op === '+' || op === '-') {
      total += term;
      term = '';
      while((/[0-9\s]/).test(str[ii])) {
        term += str[ii++];
      }
      term = parseInt(term);
      term *= (op === '+') ? 1 : -1;
    } else {
      n = '';
      while((/[0-9\s]/).test(str[ii])) {
        n += str[ii++];
      }
      n = parseInt(n);
      if (op === '*') {
        term *= n;
      } else {
        term /= n;
        term = Math.trunc(term);
      }
    }
  }
  return total;
};

console.log(2, calculate('1 + 1'));
console.log(0, calculate('0 + 1 -1'));
console.log(-12, calculate('1-11+0-2'));
console.log(3, calculate(' 2-1 + 2'));
console.log(5, calculate('3 + 1 * 2 - 1 / 4'));
console.log(123242442, calculate('123242442'));
console.log(7, calculate('3+2*2'));
console.log(1, calculate(' 3/2 '));
console.log(5, calculate(' 3+5  / 2 '));
console.log(8, calculate('14-13/2'));
console.log(4067, calculate('282-1*2*13-30-2*2*2/2-95/5*2+55+804+3024'));
