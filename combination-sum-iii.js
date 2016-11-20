/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const res = [];
  if (!n || !k) {
    return res;
  }

  helper(res, [], 1, k, n);

  return res;
};

function helper(res, list, num, k, target) {
  const sum = list.reduce((sum, n) => sum + n, 0);
  if (list.length > k || sum > target) {
    return;
  }
  if (list.length === k && sum === target) {
    res.push(list.slice());
    return;
  }

  for (var ii = num; ii < 10; ii++) {
    list.push(ii);
    helper(res, list, ii + 1, k, target);
    list.pop();
  }
}

console.log(combinationSum3(3, 7));
console.log([[1,2,4]]);

console.log(combinationSum3(3, 9));
console.log([[1,2,6], [1,3,5], [2,3,4]]);
