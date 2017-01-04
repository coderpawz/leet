/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(str) {
const DO = {
    '+': add,
    '-': sub,
    '*': mult,
    '/': div
  };
  const s = [];
  const ops = [];
  const nums = [];
  for (let ii = 0; ii < str.length; ii++) {
    if (str[ii] !== ' ') {
      s.push(str[ii]);
    }
  }
  for (let ii = 0; ii < s.length; ii++) {
    const ch = s[ii];
    switch (ch) {
      case '+':
      case '-':
        while(ops.length) {
          nums.unshift(DO[ops.shift()](nums.shift(),nums.shift()));
        }
        ops.push(ch);
        break;
      case '*':
      case '/':
        ops.push(ch);
        break;
      default: {
        const num = getOperand(s, ii);
        ii += num.length - 1;
        if (ops.length && isInOrder(ops[ops.length-1], s[ii+1])) {
          nums[nums.length - 1] = DO[ops.pop()](nums[nums.length - 1], num);
        } else {
          nums.push(num);
        }
        break;
      }
    }
  }
  while(ops.length) {
    nums.unshift(DO[ops.shift()](nums.shift(),nums.shift()));
  }
  return parseInt(nums[0]);
};

function isInOrder(op1, op2) {
  return !op2 || '0123456789-+'.indexOf(op2) !== -1 ||
    op1 === '*' || op1 === '/';
}

function getOperand(s, idx) {
  let num = '';
  while ('-+*/ '.indexOf(s[idx]) === -1 && s[idx]) {
    num += s[idx];
    idx++;
  }
  return num;
}

function add(a,b) {
  return parseInt(a) + parseInt(b);
}

function sub(a,b) {
  return parseInt(a) - parseInt(b);
}

function mult(a,b) {
  return parseInt(a) * parseInt(b);
}

function div(a,b) {
  return Math.trunc(parseInt(a) / parseInt(b));
}

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
