/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0
  };
  for (let ii = magazine.length - 1; ii >= 0; ii--) {
    map[magazine.charAt(ii)]++;
  }
  for (let ii = ransomNote.length - 1; ii >= 0; ii--) {
    if (!map[ransomNote.charAt(ii)]) {
      return false;
    }
    map[ransomNote.charAt(ii)]--;
  }
  return true;
};


console.log(canConstruct('a', 'b'), false);
console.log(canConstruct('aa', 'ab'), false);
console.log(canConstruct('aa', 'aab'), true);
