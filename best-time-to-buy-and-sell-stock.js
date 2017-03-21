/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices || prices.length < 2) {
    return 0;
  }
  let min = prices[0];
  let res = 0;

  for (let ii = 1; ii < prices.length; ii++) {
    if (prices[ii] < prices[ii - 1]) {
      res = Math.max(res, prices[ii - 1] - min);
      min = Math.min(min, prices[ii]);
    }
  }

  return Math.max(res, prices[prices.length - 1] - min);
};

console.log(5, maxProfit([7, 1, 6, 5, 3, 4]));
console.log(0, maxProfit([7, 6, 5, 4]));
console.log(1, maxProfit([1, 2]));
console.log(3, maxProfit([1, 2, 4]));
