/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {//eslint-disable-line
  if (!head || !head.next || m === n) {
    return head;
  }
  let h = null;
  let start = head;
  for (var ii = m - 1; ii > 0; ii--) {
    h = start;
    start = h.next;
  }
  if (h) {
    reverseListHelper(start.next, start, h, start, n - m);
    return head;
  }
  return reverseListHelper(start.next, start, h, start, n - m);
};

function reverseListHelper(start, prev, head, tail, count) {
  const next = start.next;
  start.next = prev;
  if (!--count) {
    tail.next = next;
    if (head) {
      head.next = start;
      return head;
    }
    return start;
  }
  return reverseListHelper(next, start, head, tail, count);
}
