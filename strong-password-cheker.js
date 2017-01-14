/**
 * @param {string} s
 * @return {number}
 */
var strongPasswordChecker = function(s) {
  if (!s || !s.length) {
    return 6;
  }
  let adds = Math.max(0, 6 - s.length);
  let dels = Math.max(0, s.length - 20);
  let reps = 0;
  if (!/[a-z]/.test(s)) {
    reps++;
  }
  if (!/[A-Z]/.test(s)) {
    reps++;
  }
  if (!/[0-9]/.test(s)) {
    reps++;
  }

  if (adds || !dels) {
    let dupes = (s.match(/(.)\1\1/g) || []).length;
    reps -= dupes;
    adds -= dupes;
    return Math.max(reps, adds, 0) + dupes;
  }

  let dupes = (s.match(/(.)\1\1+/g) || []).reduce(
    (dps, str) =>  {
      dps[str.length] = dps[str.length] + 1 || 1;
      return dps;
    }, []);
  let targetDels = dels;
  let remainingDupes = 0;
  for (let ii = 3; ii < dupes.length; ii++) {
    if (!dupes[ii]) continue;
    for (var jj = 0; jj < dupes[ii]; jj++) {
      if (dels >= ii - 2) {
        dels -= ii - 2;
      } else if (dels) {
        let temp = ii;
        let threesRemainder = temp % 3;
        while (temp > 2 && dels > threesRemainder) {
          dels -= (threesRemainder) + 1;
          temp -= (threesRemainder) + 1;
          threesRemainder = temp % 3;
        }
        remainingDupes += Math.floor(temp / 3);
      } else {
        remainingDupes += Math.floor(ii / 3);
      }
    }
  }
  if (remainingDupes) {
    reps -= remainingDupes;
    return remainingDupes + Math.max(reps, 0) + Math.max(dels, targetDels);
  }
  return reps + targetDels;
};

console.log('valid');
console.log(strongPasswordChecker('aa1Lja'), 0, 'aa1Lja');
console.log(strongPasswordChecker('aa1Ljb'), 0, 'aa1Ljb');
console.log(strongPasswordChecker('aa1Ljx'), 0, 'aa1Ljx');
console.log(strongPasswordChecker('a3a1Lj'), 0, 'a3a1Lj');
console.log(strongPasswordChecker('aAm1lj'), 0, 'aAm1lj');
console.log(strongPasswordChecker('aa11Lj'), 0, 'aa11Lj');
console.log('');
console.log('need adds');
console.log(strongPasswordChecker(''), 6, '');
console.log(strongPasswordChecker('a'), 5, 'a');
console.log(strongPasswordChecker('aa'), 4, 'aa');
console.log(strongPasswordChecker('aaa'), 3, 'aaa');
console.log(strongPasswordChecker('zxc'), 3, 'zxc');
console.log(strongPasswordChecker('aaaa'), 2, 'aaaa');
console.log(strongPasswordChecker('aaaaa'), 2, 'aaaaa');
console.log(strongPasswordChecker('aaaaaa'), 2, 'aaaaaa');
console.log(strongPasswordChecker('aa1Lj'), 1, 'aa1Lj');
console.log();
console.log('no adds no dels');
console.log(strongPasswordChecker('aaaaaa'), 2, 'aaaaaa');
console.log(strongPasswordChecker('zxczxc'), 2, 'zxczxc');
console.log(strongPasswordChecker('aag1tj'), 1, 'aag1tj');
console.log(strongPasswordChecker('aaa111'), 2, 'aaa111');
console.log(strongPasswordChecker('aaa111222'), 3, 'aaa111222');
console.log(strongPasswordChecker('aaaaaaaaaaaaaaaaaaaa'), 6, 'aaaaaaaaaaaaaaaaaaaa');
console.log();
console.log('needs dels');
console.log(strongPasswordChecker('aaaaaaaaaaaaaaaaaaaaa'), 7, 'aaaaaaaaaaaaaaaaaaaaa');
console.log(strongPasswordChecker('aaaaaaaaaaaaaaaaaaaaaa'), 8, 'aaaaaaaaaaaaaaaaaaaaaa');
console.log(strongPasswordChecker('1Aaaaaaaaaaaaaaaaaaaaa'), 8, '1Aaaaaaaaaaaaaaaaaaaaa');
console.log(strongPasswordChecker('1Aaaaaaaaaaaaaaaaaaaaa'), 8, 'zxaaaaaaaaaaaaaaaaaaaa');
console.log(strongPasswordChecker('aaaaaaaaaaaaaaaaaaaaaaa'), 9, 'aaaaaaaaaaaaaaaaaaaaaaa');
console.log(strongPasswordChecker('aaaaaaaaaaaaaaaaaaaaaaaa'), 10, 'aaaaaaaaaaaaaaaaaaaaaaaa');
console.log(strongPasswordChecker('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'), 34, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

console.log(strongPasswordChecker('aag1Ljaag1Ljaag1Ljaag'), 1, 'aag1Ljaag1Ljaag1Ljaag');
console.log(strongPasswordChecker('aag1Ljaag1Ljaag1Ljaag1Lj'), 4, 'aag1Ljaag1Ljaag1Ljaag1Lj');
console.log(strongPasswordChecker('zxczxczxczxczxczxczxczxc'), 6, 'zxczxczxczxczxczxczxczxc');
console.log(strongPasswordChecker('zxczxczxczaaaxczxczxczxc'), 6, 'zxczxczxczaaaxczxczxczxc');
console.log(strongPasswordChecker('zxczxczxaaaaaaazxczxczxc'), 6, 'zxczxczxaaaaaaazxczxczxc');

console.log(strongPasswordChecker('zxczxcaaaaaaaaaaaczxczxc'), 6, 'zxczxcaaaaaaaaaaaczxczxc');
console.log(strongPasswordChecker('zxcaaaaaaaaaaaaaaazxc'), 5, 'zxcaaaaaaaaaaaaaaazxc');
console.log(strongPasswordChecker('aaacaaacaaacaaacaaacaaacaaacaaa'), 13, 'aaacaaacaaacaaacaaacaaacaaacaaa');
console.log(strongPasswordChecker('aaaacaaaacaaaacaaaacaaaacaaaacaaaacaaaa'), 21, 'aaaacaaaacaaaacaaaacaaaacaaaacaaaacaaaa');
console.log(strongPasswordChecker('aaaaacaaaaacaaaaacaaaaacaaaaacaaaaacaaaaacaaaaa'), 29, 'aaaaacaaaaacaaaaacaaaaacaaaaacaaaaacaaaaacaaaaa');
console.log(strongPasswordChecker('aaaaaacaaaaaacaaaaaacaaaaaacaaaaaacaaaaaacaaaaaacaaaaa'), 36, 'aaaaaacaaaaaacaaaaaacaaaaaacaaaaaacaaaaaacaaaaaacaaaaa');
console.log()
console.log(strongPasswordChecker('xc1xczxczaaaaazxczxSzx'), 3, 'xc1xczxczaaaaazxczxSzx');
console.log(strongPasswordChecker('xczxcaaaaaaaaaaaczxczx'), 5, 'xczxcaaaaaaaaaaaczxczx');

console.log(strongPasswordChecker('1234567890123456Baaaaa'), 3, '1234567890123456Baaaaa');
console.log()
console.log(strongPasswordChecker('aaaabbaaabbaaa123456A'), 3, 'aaaabbaaabbaaa123456A');
