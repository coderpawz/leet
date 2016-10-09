/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
    const DO = {
        '+': add,
        '-': sub
    };
    const opss = [[]];
    const res = [];
    for (var ii = 0; ii < s.length; ii++) {
        const ch = s.charAt(ii);
        let ops = opss[opss.length - 1];
        switch (ch) {
        case ' ':
            continue;
        case '(':
            res.push('x');
            opss.push([]);
            break;
        case '+':
        case '-':
            ops.push(ch);
            break;
        case ')':
            opss.pop();
            ops = opss[opss.length - 1];
            if (ops.length) {
                const temp = res.pop();
                if (res.length) {
                    res[res.length - 1] =
              DO[ops.pop()](res[res.length - 1], temp);
                } else {
                    res.push(temp);
                }
            }
            break;
        default: {
            const num = getOperand(s, ii);
            if (ops.length) {
                res[res.length - 1] = DO[ops.pop()](res[res.length - 1], num);
            } else {
                if (res[res.length - 1] === 'x') {
                    res[res.length - 1] = num;
                } else if (res[res.length - 1]) {
                    res[res.length - 1] = num;
                } else {
                    res.push(num);
                }
            }
            ii += num.length - 1;
            break;
        }
        }
    }
    if (opss[0][0] && res.length === 2) {
        return DO[opss[0][0]](res[0], res[1]);
    }
    return parseInt(res[0]);
};

function getOperand(s, idx) {
    let num = '';
    while ('-+() '.indexOf(s[idx]) === -1 && s[idx]) {
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

console.log(2, calculate('1 + 1'));
console.log(0, calculate('0 + 1 -1'));
console.log(-12, calculate('1-11+0-2'));
console.log(3, calculate(' 2-1 + 2'));
console.log(23, calculate('(1+(4+5+2)-3)+(6+8)'));
console.log(123242442, calculate('123242442'));
