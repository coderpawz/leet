/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.sum = 0;
  this.head;
  this.tail;
  this.count = size;
  this.div = 0;
  this.updateHead = (val) => {
    if (!this.head) {
      this.head = { val };
      this.tail = this.head;
      return;
    }
    const temp = { next: this.head, val };
    this.head.prev = temp;
    this.head = temp;
  };
  this.updateTail = () => {
    this.tail = this.tail.prev;
    this.tail.next.prev = null;
    this.tail.next = null;
  }
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.updateHead(val);
  this.sum += val;
  if (--this.count >= 0) {
    this.div++;
    return this.sum / this.div;
  }
  this.sum -= this.tail.val;
  this.updateTail();
  return this.sum / this.div;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = Object.create(MovingAverage).createNew(size)
 * var param_1 = obj.next(val)
 */

let m = new MovingAverage(3);
console.log(1, m.next(1));
console.log(5.5, m.next(10));
console.log(4.666666, m.next(3));
console.log(6, m.next(5));
console.log(5, m.next(7));

m = new MovingAverage(5);
console.log(12009.00000, m.next(12009));
console.log(6987.00000, m.next(1965));
console.log(4344.66667, m.next(-940));
console.log(1129.50000, m.next(-8516));
console.log(-2385.60000, m.next(-16446));
console.log(-3213.40000, m.next(7870));
console.log(1502.60000, m.next(25545));
console.log(-2515.00000, m.next(-21028));
console.log(2874.20000, m.next(18430));
console.log(1470.60000, m.next(-23464));
