/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function(n) {
  const arr = [0];
  for(let i = 0; i < n; i++) {
    let inc = 1 << i;
    for(let j = arr.length - 1; j >= 0; j--) {
      arr[arr.length] = arr[j] + inc;
    }
  }
  return arr;
};

/**
 * @param {number} n
 * @return {number[]}
 */
// const grayCodeOG = function(n) {
//     if (n === 0) {
//         return [0];
//     }
//     if (n === 1) {
//         return [0,1];
//     }
//     const seq = [0,1,3,2];
//     if (n > 2) {
//         helper(0, 3, n, true, [], seq);
//     }
//     return seq;
// };

// function helper(start, curr, n, reverse, ops, seq) {
//     let nextOp = Math.pow(2, curr - 1);
//     let next = start + Math.pow(2, curr - 1);
//     ops.push(nextOp);
//     addNextFour(reverse, next, seq);

//     for (var ii = ops.length - 2; ii >= 0; ii--) {
//         nextOp = -1 * ops[ii];
//         next += nextOp;
//         ops.push(nextOp);
//         reverse = !reverse;
//         addNextFour(reverse, next, seq);
//     }

//     if(curr < n) {
//         helper(next, curr+1, n, !reverse, ops, seq);
//     }
// }

// function addNextFour(reverse, start, seq) {
//     if (!reverse) {
//         doStep(start, seq);
//     } else {
//         doStepReverse(start, seq);
//     }
// }

// function doStep(start, seq) {
//     seq.push(start, start+1, start+3, start+2);
// }

// function doStepReverse(start, seq) {
//     seq.push(start+2, start+3, start+1, start);
// }

console.log(grayCode(0).join(' '));
console.log([].join(' '));
console.log();
console.log(grayCode(1).join(' '));
console.log([0,1].join(' '));
console.log();
console.log(grayCode(2).join(' '));
console.log([0,1,3,2].join(' '));
console.log();
console.log(grayCode(3).join(' '));
console.log([0,1,3,2, 6,7,5,4].join(' '));
console.log();
console.log(grayCode(4).join(' '));
console.log([0,1,3,2, 6,7,5,4, 12,13,15,14, 10,11,9,8].join(' '));
console.log();
console.log(grayCode(5).join(' '));
console.log([0,1,3,2, 6,7,5,4, 12,13,15,14, 10,11,9,8, 24,25,27,26, 30,31,29,28, 20,21,23,22, 18,19,17,16].join(' '));
console.log();


// for each new bit that we turn on, we create new elements by reading the existing sequence from end to start. rinse and repeat
// 0
// 1


// 00
// 01
// 11
// 10


// 000
// 001
// 011
// 010
//
// 110
// 111
// 101
// 100


// 0000
// 0001
// 0011
// 0010
//
// 0110
// 0111
// 0101
// 0100
//
// 1100
// 1101
// 1111
// 1110
//
// 1010
// 1011
// 1001
// 1000


// 00000
// 00001
// 00011
// 00010
//
// 00110  -- turn on 4 (+4)
// 00111
// 00101
// 00100
//
// 01100  -- turn on 8 (+8)
// 01101
// 01111
// 01110
//
// 01010  -- turn off 4 (-4)
// 01011
// 01001
// 01000
//
// 11000  -- turn on 16 (+16)
// 11001
// 11011
// 11010
//
// 11110 -- turn on 4 (+4)
// 11111
// 11101
// 11100
//
// 10100 -- turn off 8 (-8)
// 10101
// 10111
// 10110
//
// 10010  -- turn off 4 (-4)
// 10011
// 10001
// 10000




//   doStep(0);           //2 0*2  -- 0*4   0

//   doStepReverse(4);    //3 2*2  -- 1*4   +4

//   doStep(12);          //4 6*2  -- 3*4   +8
//   doStepReverse(8);    //4 4*2  -- 2*4   -4

//   doStep(24);          //5 12*2 -- 6*4   +16
//   doStepReverse(28);   //5 14*2 -- 7*4   +4
//   doStep(20);          //5 10*2 -- 5*4   -8
//   doStepReverse(16);   //5 8*2  -- 4*4   -4

//   48                   //6 24*2 -- 12*4  +32
//   52                   //6 26*2 -- 12*4  +4
//   60                   //6 30*2 -- 12*4  +8
//   56                   //6 28*2 -- 12*4  -4
//   40                   //6 20*2 -- 10*4  -16
//   44                   //6 22*2 -- 11*4  +4
//   36                   //6 13*2 -- 9*4   -8
//   32                   //6 16*2 -- 8*4   -4


//   11 0000
//   11 0100
//   11 1100
//   11 1000
//   10 1000
//   10 1100
//   10 0100
//   10 0000
// };
