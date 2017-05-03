/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }
  const dset = new DSet();
  for (let ii = 0; ii < grid.length; ii++) {
    const row = grid[ii];
    for (let jj = 0; jj < row.length; jj++) {
      if (grid[ii][jj] !== '1') {
        continue;
      }
      const num = jj + ii * row.length;
      dset.add(num);
      if (jj > 0 && grid[ii][jj - 1] === '1') {
        dset.union(num - 1, num);
      }
      if (ii > 0 && grid[ii - 1][jj] === '1') {
        dset.union(num - row.length, num);
      }
    }
  }
  const islands = dset.getAll();
  return Object.keys(islands).reduce((uniq, name) => {
    return islands[name].parent === islands[name].val ? uniq + 1 : uniq;
  }, 0);
};

function DSet() {
  const map = {};
  this.add = function(num) {
    if (!map[num]) {
      map[num] = { parent: num, val: num, rank: 0 };
    }
  };
  this.find = function(num) {
    const node = map[num];
    if (num !== node.parent) {
      const parentNode = this.find(node.parent);
      node.parent = parentNode.parent;
    }
    return map[node.parent];
  };
  this.union = function(num1, num2) {
    const root1 = this.find(num1);
    const root2 = this.find(num2);

    if (root1.parent === root2.parent) {
      return;
    }

    if(root1.rank < root2.rank) {
      root1.parent = root2.val;
      root1.rank = root2.rank;
    } else if(root1.rank > root2.rank) {
      root2.parent = root1.val;
      root2.rank = root1.rank;
    } else {
      root2.parent = root1.val;
      root2.rank = ++root1.rank;
    }
  };
  this.getAll = function() {
    return map;
  };
}

let m = [];
console.log(0, numIslands(m));

m = [''];
console.log(0, numIslands(m));

m = ['0'];
console.log(0, numIslands(m));

m = ['1'];
console.log(1, numIslands(m));

m = ['11'];
console.log(1, numIslands(m));

m = ['101'];
console.log(2, numIslands(m));

m = ['1','1'];
console.log(1, numIslands(m));

m = ['1','0','1'];
console.log(2, numIslands(m));

m = [
  '11000',
  '11000',
  '00100',
  '00011'
];
console.log(3, numIslands(m));

m = [
  '111',
  '010',
  '111'
];
console.log(1, numIslands(m));

m = [
  '11001101',
  '11010101',
  '00100001',
  '00011001',
  '00011001',
  '11000001',
];
console.log(7, numIslands(m));

m = [
  '11111',
  '00001',
  '10101',
  '10111',
  '11111'
];
console.log(1, numIslands(m));

m = [
  '11111011111111101011',
  '01111111111110111110',
  '10111001101111111111',
  '11110111111111111111',
  '10011111111111111111',
  '10111111011101110111',
  '01111111111101101111',
  '11111111111101111011',
  '11111111110111111111',
  '11111111111111111111',
  '01111111011111111111',
  '11111111111111111111',
  '11111111111111111111',
  '11111011111110111111',
  '10111110111011110111',
  '11111111111101111110',
  '11111111111110111100',
  '11111111111111111111',
  '11111111111111111111',
  '11111111111111111111'
];
console.log(1, numIslands(m));

m = [
  '11111110111111111111',
  '11111101110101011111',
  '11111111111000111100',
  '10101111010101101111',
  '10111111011001110111',
  '01111101101001110111',
  '11111111011101011111',
  '11111011111010101011',
  '01111111010110111001',
  '01000111111011101010',
  '01111111110000111111',
  '10110111111111110101',
  '11111101011010111111',
  '11111111111011111110',
  '11010111011111111111',
  '11111101110111011001',
  '10111111111100111111',
  '10011100110111001111',
  '11101100010011110011',
  '11111111011111110101'
];
console.log(3, numIslands(m));

