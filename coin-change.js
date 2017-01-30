/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = [0];

  for (let ii = 1; ii <= amount; ii++) {
    dp[ii] = amount + 1;
  }

  for (let ii = coins.length - 1; ii >= 0; ii--) {
    for (let jj = coins[ii]; jj <= amount; jj++) {
      dp[jj] = Math.min(dp[jj], dp[jj - coins[ii]] + 1);
    }
  }

  return dp[dp.length - 1] > amount ? -1 : dp[dp.length - 1];
};

console.log(3, coinChange([1, 2, 5], 11));
