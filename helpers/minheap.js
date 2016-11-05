const siftdown = (start, lessThan, queue) => {
  let idx = start;
  let left = idx * 2 + 1;
  let right = idx * 2 + 2;
  if (left < queue.length && lessThan(queue[left], queue[idx])) {
    if (right >= queue.length || lessThan(queue[left], queue[right])) {
      swap(queue, left, idx);
      siftdown(left, lessThan, queue);
    } else if (right < queue.length) {
      swap(queue, right, idx);
      siftdown(right, lessThan, queue);
    }
  } else if (right < queue.length && lessThan(queue[right], queue[idx])) {
    swap(queue, right, idx);
    siftdown(right, lessThan, queue);
  }
};

const siftup = (start, lessThan, queue) => {
  let idx = start;
  let parent = Math.floor((idx - 1) / 2);
  while (idx > 0 && lessThan(queue[idx], queue[parent])) {
    swap(queue, parent, idx);
    idx = parent;
    parent = Math.floor((idx - 1) / 2);
  }
};

const swap = (queue, a, b) => {
  const temp = queue[a];
  queue[a] = queue[b];
  queue[b] = temp;
};

module.exports = class {
  constructor(pred) {
    this.queue = [];
    this.lessThan = pred || ((a, b) => a < b);
  }
  size() {
    return this.queue.length;
  }
  pop() {
    if (this.queue.length > 1) {
      swap(this.queue, 0, this.queue.length - 1);
      const res = this.queue.pop();
      siftdown(0, this.lessThan, this.queue);
      return res;
    } else if (this.queue.length === 1){
      return this.queue.pop();
    } else {
      return null;
    }
  }
  push(num) {
    this.queue.push(num);
    siftup(this.queue.length - 1, this.lessThan, this.queue);
  }
};
