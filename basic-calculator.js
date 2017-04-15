/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  const stack = [];
  let number = 0;
  let sign = 1;
  let result = 0;
  for (var ii = 0; ii < s.length; ii++) {
    const ch = s.charAt(ii);
    switch (ch) {
      case ' ':
        continue;
      case '+':
        result += sign * number;
        number = '';
        sign = 1;
        break;
      case '-':
        result += sign * number;
        number = 0;
        sign = -1;
        break;
      case ')':
        result += sign * number;
        result *= stack.pop();
        result += stack.pop();
        number = '';
        break;
      case '(':
        stack.push(result);
        stack.push(sign);
        result = 0;
        sign = 1;
        break;
      default:
        number = number * 10 + parseInt(ch);
        break;
    }
  }
  if (number) {
    result += sign * number;
  }
  return result;
};

console.log(2, calculate('1 + 1'));
console.log(0, calculate('0 + 1 -1'));
console.log(-12, calculate('1-11+0-2'));
console.log(3, calculate(' 2-1 + 2'));
console.log(23, calculate('(1+(4+5+2)-3)+(6+8)'));
console.log(123242442, calculate('123242442'));
