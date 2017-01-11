/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  if (word1 === word2) {
    return 0;
  }
  if (!word1 || !word1.length) {
    return (word2 || '').length;
  }
  if (!word2 || !word2.length) {
    return (word1 || '').length;
  }
  const dp = [];
  for (let ii = 0; ii <= word1.length; ii++) {
    dp[ii] = [ii];
  }
  for (let kk = 0; kk <= word2.length; kk++) {
    dp[0][kk] = kk;
  }

  for (var ii = 1; ii <= word1.length; ii++) {
    for (var kk = 1; kk <= word2.length; kk++) {
      dp[ii][kk] = Math.min(
        dp[ii - 1][kk],
        dp[ii][kk - 1],
        dp[ii - 1][kk - 1]
      );
      if (word1[ii - 1] === word2[kk - 1]) {
        dp[ii][kk] = dp[ii - 1][kk - 1];
      } else {
        dp[ii][kk]++;
      }
    }
  }
  // console.log(dp)
  return dp[word1.length][word2.length];
};

console.log(minDistance('aaaaaa','aa'), 4);
console.log(minDistance('zoologicoarchaeologist','zoogeologist'), 10);
console.log(minDistance('a','ab'), 1);
console.log(minDistance('dog','bog'), 1);
console.log(minDistance('cart','mart'), 1);
console.log(minDistance('size','prize'), 2);
console.log(minDistance('mouse','birdy'), 5);

