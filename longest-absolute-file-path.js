/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  let max = 0;
  let pos = 0;
  let lenSoFar = 0;
  let depth = 0;
  let word = '';
  const startingPoint = { lenSoFar: 0 };
  const dirs = [];
  while (pos < input.length) {
    word = nextWord(input, pos);
    pos += word.length + 1;
    depth = getDepth(word);
    word = word.slice(depth);
    lenSoFar = (dirs[depth - 1] || startingPoint).lenSoFar + word.length;
    if (isFile(word)) {
      max = Math.max(max, lenSoFar + depth);
    } else {
      if (!dirs[depth]) {
        dirs.push({});
      }
      dirs[depth].lenSoFar = lenSoFar;
      dirs[depth].word = word;
    }
  }
  return max;
};

function nextWord(s, curr) {
  const nextEnd = s.indexOf('\n', curr);
  return s.substring(curr, nextEnd > curr ? nextEnd : s.length);
}

function getDepth(s) {
  return (s.match(/\t/g) || []).length;
}

function isFile(s) {
  return (/\.[^.]/).test(s);
}

console.log(true, isFile('adf.asdf'));
console.log(true, isFile('a.a.a.a'));
console.log(false, isFile('asdfasdf'));

console.log(0, getDepth('tadfasdf'));
console.log(1, getDepth('\tadfasdf'));
console.log(2, getDepth('\t\tadfasdf'));
console.log(3, getDepth('\t\t\tadfasdf'));

console.log('asdf', nextWord('\nwer\nasdf\n1234', 5));
console.log('', nextWord('\nwer1234', 8));
console.log('asdasd', nextWord('\nwer\nasdf\n1234tvntn\n\t\t\tnnnnnnnnnnnn\nnnnnnnn\n\tasdasd', 45));

console.log(32, lengthLongestPath('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'));
console.log(20, lengthLongestPath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext'));
console.log(0, lengthLongestPath(''));
console.log(0, lengthLongestPath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile'));


