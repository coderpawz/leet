/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) {
    return 'Zero';
  }
  const ones = {
    0: '',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  };
  const teens = {
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
  };
  const tens = {
    0: '',
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety',
  };
  const orders = [
    '',
    'Thousand',
    'Million',
    'Billion'
  ];

  const numStr = `${num}`;
  let res = [];

  for (let ii = 0; ii < numStr.length; ii += 3) {
    const startIdx = Math.max(numStr.length - ii - 3, 0);
    const sub = numStr.slice(startIdx, numStr.length - ii);
    let temp = '';
    if (sub.length === 3) {
      temp = getThrees(ones[sub[0]], teens[sub.slice(1)], tens[sub[1]], ones[sub[2]]);
    }
    if (sub.length === 2) {
      temp = getThrees('', teens[sub], tens[sub[0]], ones[sub[1]]);
    }
    if (sub.length === 1) {
      temp = getThrees('', '', '', ones[sub]);
    }
    if (temp.length) {
      const order  = orders[Math.floor(ii / 3)];
      if (order) {
        res.unshift(order);
      }
      res.unshift(temp);
    }
  }

  return res.join(' ');
};

function getThrees(hun, teen, ten, one) {
  const res = [];
  if (hun) {
    res.push(hun);
    res.push('Hundred');
  }
  if (teen) {
    res.push(teen);
    return res.join(' ');
  }
  if (ten) {
    res.push(ten);
  }
  if (one) {
    res.push(one);
  }
  return res.join(' ');
}

console.log('One Hundred Twenty Three');
console.log(numberToWords(123));
console.log();
console.log('Twelve Thousand Three Hundred Forty Five');
console.log(numberToWords(12345));
console.log();
console.log('One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
console.log(numberToWords(1234567));
console.log();
console.log('One');
console.log(numberToWords(1));
console.log();
console.log('Eleven');
console.log(numberToWords(11));
console.log();
console.log('Twenty');
console.log(numberToWords(20));
console.log();
console.log('One Million');
console.log(numberToWords(1000000));
console.log();
console.log('One Billion One Hundred Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
console.log(numberToWords(1100234567));
console.log();
