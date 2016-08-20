/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  if (isValid(s)) {
    return [s];
  }

  const q = [];
  const res = [];

  q[q.length] = {s, i: 0, r: ')'};

  while (q.length) {
    const curr = q.shift();

    for (let ii = curr.i; ii < curr.s.length; ++ii) {
      const ch = curr.s[ii];

      if (ch != '(' && ch != ')') {
        continue;
      }
      if (ch == curr.s[ii - 1]) {
        continue;
      }
      if (curr.r == '(' && ch == ')') {
        continue;
      }

      const next = curr.s.slice(0, ii) + curr.s.slice(ii + 1);

      if (isValid(next)) {
        res[res.length] = next;
      } else if (!res.length) {
        q[q.length] = {s:next, i: ii, r: ch};
      }
    }
  }

  return res;
};


function isValid(s) {
  let stack = 0;
  for (var ii = 0; ii < s.length; ii++) {
    if (s[ii] === '(') {
      stack++;
    } else if (s[ii] === ')' && !stack) {
      return false;
    } else if (s[ii] === ')') {
      stack--;
    }
  }
  return !stack;
}

console.log(["()()()", "(())()"].join(' '));
console.log(removeInvalidParentheses("()())()").join(' '));
console.log();
console.log(["(a)()()", "(a())()"].join(' '));
console.log(removeInvalidParentheses("(a)())()").join(' '));
console.log();
console.log([""]);
console.log(removeInvalidParentheses(")("));
console.log();
