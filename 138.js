/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    'use strict';

    if(!head) {
        return null;
    }

    const nodes = [head];
    const rands = [];
    const newNodes = [Object.assign({}, head, {next: null, random: null})];
    let curr = head;
    while(curr.next) {
        nodes.push(curr.next);
        newNodes.push(Object.assign({}, curr.next, {next: null, random: null}));
        curr = curr.next;
    }
    rands.push(nodes.indexOf(head.random));
    curr = head;
    while(curr.next) {
        rands.push(nodes.indexOf(curr.next.random));
        curr = curr.next;
    }
    for(let ii = 0, rand = rands[ii]; ii < nodes.length; ii++) {
        newNodes[ii].next = newNodes[ii+1] || null;
        newNodes[ii].random = rand === -1 ? null : newNodes[rand];
    }
    return newNodes[0];
};

var d = {d:123, next: null, random: null};
var c = {c:123, next: d, random: null};
var b = {b:123, next: c, random: d};
var a = {label:-1, next: null, random: null};

console.log(a);
console.log(copyRandomList(a));
