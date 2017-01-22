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
var reverseList = function(head) {//eslint-disable-line
  if (!head || !head.next) {
    return head;
  }
  const next = head.next;
  head.next = null;
  return reverseListHelper(next, head);
};

function reverseListHelper(head, tail) {
  const next = head.next;
  head.next = tail;
  if (!next) {
    return head;
  }
  return reverseListHelper(next, head);
}
