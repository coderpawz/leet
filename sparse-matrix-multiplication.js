/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  if (!A.length || !B.length || A[0].length !== B.length) {
    return [[]];
  }
  const res = [[]];
  for (let ar = 0; ar < A.length; ar++) {
    res[ar] = [];
    for (let bc = 0; bc < B[0].length; bc++) {
      res[ar][bc] = 0;
    }
  }
  for (let ar = 0; ar < A.length; ar++) {
    for (let ac = 0; ac < A[ar].length; ac++) {
      if (A[ar][ac]) {
        for (let bc = 0; bc < B[ac].length; bc++) {
          if (B[ac][bc]) {
            res[ar][bc] += A[ar][ac] * B[ac][bc];
          }
        }
      }
    }
  }
  return res;
};

let A = [
  [ 1, 0, 0],
  [-1, 0, 3]
];
let B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
];
let AB = [
  [7,0,0],
  [-7,0,3]
];
console.log(AB);
console.log(multiply(A, B));

A = [
  [1, -5]
];
B = [
  [ 12 ],
  [ -1 ]
];
AB = [
  [17]
];
console.log(AB);
console.log(multiply(A, B));
