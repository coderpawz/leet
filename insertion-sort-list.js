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
var insertionSortList = function(head) {
  if (!head) {
    return head;
  }
  let res = new ListNode(head.val);
  let curr = head.next;
  while (curr) {
    let next = curr.next;

    let locPrev = res;
    if (curr.val <= res.val) {
      res = new ListNode(curr.val);
      res.next = locPrev;
      curr = next;
      continue;
    }

    let locCurr = res.next;
    if(!locCurr) {
      res.next = new ListNode(curr.val);
    }
    while (locCurr) {
      let locNext = locCurr.next;
      if (curr.val < locCurr.val) {
        locPrev.next = new ListNode(curr.val);
        locPrev.next.next = locCurr;
        break;
      }
      if (!locNext) {
        locCurr.next = new ListNode(curr.val);
      }
      locPrev = locCurr;
      locCurr = locNext;
    }

    curr = next;
  }
  return res;
};

function ListNode(val, next) {
    this.val = val;
    this.next = next || null;
}

console.log(insertionSortList(new ListNode(4, new ListNode(2, new ListNode(3)))));
console.log(new ListNode(2, new ListNode(3, new ListNode(4))));
console.log();
console.log(insertionSortList(new ListNode(4, new ListNode(3, new ListNode(2)))));
console.log(new ListNode(2, new ListNode(3, new ListNode(4))));

