/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */
function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

function print(head) {
    let curr = head;
    const res = [];
    while (curr) {
        res.push(curr.random ? curr.random.label : '#');
        curr = curr.next;
    }
    return res.join(', ');
}

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    'use strict';

    if(!head) {
        return null;
    }

    const nodes = [];
    const rands = [];
    const newNodes = [];
    let curr = head;
    while(curr) {
        nodes.push(curr);
        newNodes.push(new RandomListNode(curr.label));
        curr = curr.next;
    }
    curr = head;
    while(curr) {
        rands.push(nodes.indexOf(curr.random));
        curr = curr.next;
    }
    for(let ii = 0; ii < nodes.length; ii++) {
        newNodes[ii].next = newNodes[ii+1] || null;
        newNodes[ii].random = rands[ii] === -1 ? null : newNodes[rands[ii]];
    }
    return newNodes[0];
};

const a = new RandomListNode(-1);
const b = new RandomListNode(0);
const c = new RandomListNode(1);
const d = new RandomListNode(2);
const e = new RandomListNode(3);
const f = new RandomListNode(4);
const g = new RandomListNode(-3);
const h = new RandomListNode(8);
const i = new RandomListNode(7);
const j = new RandomListNode(7);

a.random = a;
b.random = h;
c.random = i;
d.random = g;
e.random = f;
f.random = f;
g.random = g;
h.random = null;
i.random = null;
j.random = a;

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;
j.next = null;

console.log(print(a));
console.log(print(copyRandomList(a)));
