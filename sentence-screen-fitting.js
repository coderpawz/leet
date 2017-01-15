/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
  if (!cols || !rows || !sentence) {
    return 0;
  }
  const dp = [];
  const n = sentence.length;
  //generate dp array that has one entry for each word
  //where:
  //key represents the index of the word in the sentence
  //value represents the index (exclusive) to which the current row of words spans
  //in addition, the following property holds true:
  //number of words in each line is value - key
  for(let ii = 0, prev = 0, len = 0; ii < n; ++ii) {
    if(ii !== 0 && len > 0) {
      len -= sentence[ii - 1].length + 1;
    }
    while(len + sentence[prev % n].length <= cols) {
      len += sentence[prev++ % n].length + 1;
    }
    dp[ii] = prev;
  }
  console.log(dp);
  let count = 0;
  for(let ii = 0, k = 0; ii < rows; ++ii) {
    if(dp[k] === k) {
      return 0;
    }
    count += dp[k] - k;
    k = dp[k] % n;
  }
  return Math.floor(count / n);
};

console.log(0, wordsTyping(['asdasdhello', 'world'], 2, 8));
console.log(1, wordsTyping(['hello', 'world'], 2, 8));
console.log(2, wordsTyping(['a', 'bcd', 'e'], 3, 6));
console.log(1, wordsTyping(['ii', 'had', 'apple', 'pie'], 4, 5));
console.log(1, wordsTyping(['ii', 'had', 'apple', 'pie'], 20000, 20000));

