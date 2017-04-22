/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
      if (n <= 1) {
        return -1;
      }
      let cand = n - 1;
      for (let ii = n - 2; ii >= 0; ii--) {
        if(knows(cand, ii)) {
          cand = ii;
        }
      }
      for (let ii = n - 1; ii >= 0; ii--) {
        if (ii !== cand && (knows(cand, ii) || !knows(ii, cand))) {
          return -1;
        }
      }
      return cand;
    };
};

let map;
function f(a, b) {
  return map[a][b];
}
map = {
  0: {
    1: false,
    5: true,
    2: false,
    3: true,
    4: false
  },
  1: {
    0: true,
    5: false,
    2: false,
    3: true,
    4: false
  },
  2: {
    0: false,
    1: true,
    5: false,
    3: true,
    4: false
  },
  3: {
    0: false,
    1: false,
    2: false,
    5: false,
    4: false
  },
  4: {
    0: false,
    1: false,
    2: true,
    3: true,
    5: false
  },
  5: {
    0: false,
    1: false,
    2: false,
    3: true,
    4: false
  }
}
console.log(3, solution(f)(6));

map = {
  0: {
    1: false,
    2: true,
  },
  1: {
    0: true,
    2: false,
  },
  2: {
    0: false,
    1: true,
  }
}
console.log(-1, solution(f)(3));
