/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  let ch = '';
  let closing = false;
  let matching = false;
  for (var ii = 0; ii < s.length; ii++) {
    ch = s.charAt(ii);
    closing = isClosing(ch);
    matching = isMatching(stack[stack.length - 1], ch);
    if (!stack.length && closing) {
      return false;
    }
    if (!matching && closing) {
      return false;
    }
    if (matching) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return !stack.length;
};

function isMatching(l, r) {
  return l === '(' && r === ')' ||
    l === '[' && r === ']' ||
    l === '{' && r === '}';
}

function isClosing(ch) {
  return ch === ')' || ch === ']' || ch === '}';
}

console.log(true, isValid('()'));
console.log(true, isValid('()[]{}'));
console.log(false, isValid('(]'));
console.log(false, isValid('([)]'));
