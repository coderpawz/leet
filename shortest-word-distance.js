/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
  let shortest = Number.MAX_SAFE_INTEGER;

  let idx1 = -1;
  let idx2 = -1;
  let temp;
  for (var ii = 0; ii < words.length; ii++) {
    if (words[ii] === word1) {
      idx1 = ii;
      temp = Math.abs(idx1 - idx2);
      if (idx2 !== -1 && temp < shortest) {
        shortest = temp;
      }
    } else if (words[ii] === word2) {
      idx2 = ii;
      temp = Math.abs(idx1 - idx2);
      if (idx1 !== -1 && temp < shortest) {
        shortest = temp;
      }
    }
  }

  return shortest;
};

console.log(shortestDistance(['a','x','x','b','c','a','b'], 'a', 'b'), 1);
console.log(shortestDistance(['a','x','x','ba','c','asa','b'], 'a', 'b'), 6);
console.log(shortestDistance(['a','x','b','b','b','b','a'], 'a', 'b'), 1);
