/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }

  const newHead = head.next;
  let curr = head.next.next;
  let prev = head;
  head.next = newHead.next;
  newHead.next = head;
  let temp;
  while (curr && curr.next) {
    temp = curr.next;
    curr.next = curr.next.next;
    prev.next = temp;
    prev.next.next = curr;
    prev = curr;
    curr = curr.next;
  }

  return newHead;
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
console.log('e: 2, 1, 4, 3, 6, 5', `a: ${swapPairs(head)}`);

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
console.log('e: 2, 1, 4, 3, 5', `a: ${swapPairs(head)}`);

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
console.log('e: 2, 1, 4, 3', `a: ${swapPairs(head)}`);

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
console.log('e: 2, 1, 3', `a: ${swapPairs(head)}`);

head = new ListNode(1);
head.next = new ListNode(2);
console.log('e: 2, 1', `a: ${swapPairs(head)}`);

head = new ListNode(1);
console.log('e: 1', `a: ${swapPairs(head)}`);
