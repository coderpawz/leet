const Heap = require('../minheap');
const makeError = (e, a) => {
  return `Test failed: expected ${e} to be ${a}`;
};

const h = new Heap();

//test push
const nums = [
  1,
  11,
  111,
  1111,
  11111,
  111111,
  2,
  3,
  4,
  5,
  99,
  200
];
for (var ii = 0; ii < nums.length; ii++) {
  h.push(nums[ii]);
}
if ([1,3,2,4,5,200,111,1111,11,11111,99,111111].join(',') !== h.queue.join(',')) {
  throw new Error(makeError([1,3,2,4,5,200,111,1111,11,11111,99,111111].join(','), h.queue.join(',')));
}

//test pop
nums.sort((a, b) => a < b ? -1 : 1);
let next;
let idx = 0;
while (next = h.pop()) {//eslint-disable-line no-cond-assign
  if (nums[idx++] !== next) {
    throw new Error(makeError(nums[idx-1], next));
  }
}
console.log('All tests passed!');
