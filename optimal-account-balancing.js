/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function(transactions) {
  const accounts = transactions.reduce((accs, t) => {
    accs[t[0]] = accs[t[0]] ? accs[t[0]] - t[2] : -t[2];
    accs[t[1]] = accs[t[1]] ? accs[t[1]] + t[2] : t[2];
    return accs;
  }, {});
  const balances = Object.keys(accounts).reduce((blncs, key) => {
    if (accounts[key]) {
      blncs.push(accounts[key]);
    }
    return blncs;
  }, []);
  return dfs(0, 0, balances);
};

function dfs(s, cnt, debt) {
  let res = Number.MAX_SAFE_INTEGER;
  while (s < debt.length && !debt[s]) {
    ++s;
  }
  for (let ii = s + 1; ii < debt.length; ++ii) {
    if (debt[ii] * debt[s] < 0) {
      debt[ii] += debt[s];
      res = Math.min(res, dfs(s + 1, cnt + 1, debt));
      debt[ii] -= debt[s];
    }
  }
  return res < Number.MAX_SAFE_INTEGER ? res : cnt;
}


console.log(2, minTransfers([[0,1,10], [2,0,5]]));
console.log(1, minTransfers([[0,1,10], [1,0,1], [1,2,5], [2,0,5]]));
