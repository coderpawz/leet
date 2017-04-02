/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function(words) {
  if (!words || !words.length) {
    return [];
  }
  const result = [];
  const trie = new Trie();
  for (let ii = 0; ii < words.length; ii++) {
    trie.addWord(words[ii]);
  }
  for (let ii = 0; ii < words.length; ii++) {
    helper([words[ii]], trie, result);
  }
  return result;
};

function helper(arr, trie, result) {
  if (arr.length === arr[0].length) {
    result.push(arr);
    return;
  }
  const letterIdx = arr.length;
  let curr = trie.root;
  let word = '';
  for (let ii = 0; ii < arr.length; ii++) {
    if (!curr.children[arr[ii][letterIdx]]) {
      return;
    }
    word += arr[ii][letterIdx];
    curr = curr.children[arr[ii][letterIdx]];
  }
  helper2(curr, word, arr, trie, result);
}

function helper2(curr, word, arr, trie, result) {
  const children = Object.keys(curr.children).map(l => curr.children[l]);
  for (let ii = 0; ii < children.length; ii++) {
    const next = children[ii];
    if (next.isWord) {
      arr.push(word + next.val);
      helper(arr.slice(), trie, result);
      arr.pop();
    } else {
      helper2(next, word + next.val, arr, trie, result);
    }
  }
}

function Node(val) {
  this.val = val;
  this.isWord = false;
  this.children = {};
}

function Trie() {
  this.root = new Node(null);
  this.addWord = (w) => {
    let curr = this.root;
    for (var ii = 0; ii < w.length; ii++) {
      if (!curr.children[w[ii]]) {
        curr.children[w[ii]] = new Node(w[ii]);
      }
      curr = curr.children[w[ii]];
    }
    curr.isWord = true;
  }
}

console.log([
  [ "wall", "area", "lead", "lady"],
  [ "ball", "area", "lead", "lady"]
]);
console.log(wordSquares(["area","lead","wall","lady","ball"]));

console.log([
  [ "baba", "abat", "baba", "atan"],
  [ "baba", "abat", "baba", "atal"]
]);
console.log(wordSquares(["abat","baba","atan","atal"]));

console.log([
  [ "aaaa", "aaaa", "aaaa", "aaaa"]
]);
console.log(wordSquares(["aaaa"]));
