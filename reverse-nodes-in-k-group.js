/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!k || k <= 1 || !head || !head.next) {
    return head;
  }
  const preHead = new ListNode(0);
  preHead.next = head;
  let prev = preHead;
  let curr = preHead;
  let next;
  let num = 0;
  //computing the length first is one approach,
  //another approach would be to reverse the last (num%k) segment
  while (curr = curr.next) {//eslint-disable-line no-cond-assign
    num++;
  }
  for (var jj = num; jj >= k; jj -= k) {
    curr = prev.next;
    next = curr.next;
    for (let ii = 1; ii < k; ii++) {
      curr.next = next.next;
      next.next = prev.next;
      prev.next = next;
      next = curr.next;
    }
    prev = curr;
  }

  return preHead.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
  this.toString = function() {
    if (!this.next) {
      return this.val;
    }
    return `${this.val}, ${this.next.toString()}`;
  };
}


let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
console.log('e: 2, 1, 4, 3, 6, 5', `
a: ${reverseKGroup(head, 2)}`);
console.log();
head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
console.log('e: 3, 2, 1, 6, 5, 4', `
a: ${reverseKGroup(head, 3)}`);
console.log();
head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
console.log('e: 4, 3, 2, 1, 5, 6', `
a: ${reverseKGroup(head, 4)}`);

// head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);
// console.log('e: 2, 1, 4, 3, 5', `a: ${swapPairs(head)}`);

// head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// console.log('e: 2, 1, 4, 3', `a: ${swapPairs(head)}`);

// head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// console.log('e: 2, 1, 3', `a: ${swapPairs(head)}`);

// head = new ListNode(1);
// head.next = new ListNode(2);
// console.log('e: 2, 1', `a: ${swapPairs(head)}`);

// head = new ListNode(1);
// console.log('e: 1', `a: ${swapPairs(head)}`);
