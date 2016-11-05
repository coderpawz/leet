/**
 * @param {number[]} numsj
 * @param {number} m
 * @param {number[]} numsi
 * @param {number} n
 * @return {void} Do not return anything, modify numsj in-place instead.
 */
var merge = function(numsj, m, numsi, n) {
  if (n > 0) {
    let ii = n - 1, jj = m - 1, curr = numsj.length - 1;
    while (jj >= 0 && ii >= 0) {
      if (numsj[jj] < numsi[ii]) {
        numsj[curr--] = numsi[ii--];
      } else {
        numsj[curr--] = numsj[jj--];
      }
    }
    while (ii >= 0) {
      numsj[curr--] = numsi[ii--];
    }
  }
};

console.log([1,2,3,4,5,6,7,8,9]);
let a = [1,3,5,6,9,undefined,undefined,undefined,undefined];
merge(a, 5, [2,4,7,8], 4);
console.log(a);
console.log();
console.log([1]);
a = [undefined];
merge(a, 0, [1], 1);
console.log(a);
