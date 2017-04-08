/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
  this.vs = [v1, v2].filter(a => a.length);
  this.curr = 0;
  this.idxs = this.vs.map(a => 0);
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return !!this.vs.length;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  const res = this.vs[this.curr][this.idxs[this.curr]];
  this.idxs[this.curr]++;
  if (this.idxs[this.curr] >= this.vs[this.curr].length) {
    this.vs.splice(this.curr, 1);
    this.idxs.splice(this.curr, 1);
  }
  if (this.curr >= this.vs.length - 1) {
    this.curr = 0;
  }
  else {
    this.curr++;
  }
  return res;
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

let i = new ZigzagIterator([1, 2, 3], [4, 5, 6, 7]), a = [];
while (i.hasNext()) a.push(i.next());
console.log([1, 4, 2, 5, 3, 6, 7]);
console.log(a);

i = new ZigzagIterator([1, 2], []), a = [];
while (i.hasNext()) a.push(i.next());
console.log([1, 2]);
console.log(a);

i = new ZigzagIterator([1, 2], [3]), a = [];
while (i.hasNext()) a.push(i.next());
console.log([1, 3, 2]);
console.log(a);

i = new ZigzagIterator([2], [3]), a = [];
while (i.hasNext()) a.push(i.next());
console.log([2, 3]);
console.log(a);

i = new ZigzagIterator([], [3]), a = [];
while (i.hasNext()) a.push(i.next());
console.log([3]);
console.log(a);

i = new ZigzagIterator([], []), a = [];
while (i.hasNext()) a.push(i.next());
console.log([]);
console.log(a);

i = new ZigzagIterator([1], [2, 3]), a = [];
while (i.hasNext()) a.push(i.next());
console.log([1, 2, 3]);
console.log(a);
