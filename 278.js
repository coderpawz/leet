/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */


/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let start = 1;
      let end = n;
      while(start + 1 < end) {
        const mid = start + Math.floor((end - start) / 2);
        if (isBadVersion(mid)) {
          end = mid;
        } else {
          start = mid;
        }
      }
      return isBadVersion(start) ? start : end;
    };
};

console.log(5, solution(n => n >= 5)(15));
console.log(16, solution(n => n >= 16)(100));
console.log(1, solution(n => n >= 1)(3));
console.log(2, solution(n => n >= 2)(3));
console.log(3, solution(n => n >= 3)(3));
