/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const rob_help = function(root, hash, cache) {
    const hashL = hash + 'l';
    const hashR = hash + 'r';
    if (!root) {
        cache[hashL] = 0;
        cache[hashR] = 0;
        return 0;
    }
    if (!root.left && !root.right) {
        cache[hashL] = 0;
        cache[hashR] = 0;
        return root.val || 0;
    } else {
        if(typeof cache[hashL] === 'undefined') {
            cache[hashL] = rob_help(root.left, hashL, cache);
        }
        if(typeof cache[hashR] === 'undefined') {
            cache[hashR] = rob_help(root.right, hashR, cache);
        }
        return Math.max(cache[hashL] + cache[hashR], root.val + cache[hashL + 'l'] + cache[hashL + 'r'] + cache[hashR + 'l'] + cache[hashR + 'r']);
    }
};

const rob = function(root) {
    return rob_help(root, '', {});
};

const node = function(val, left, right) {
    return { val, left, right };
};

console.log(`actual is ${rob(node())}`);
console.log('should be 0');
console.log();
console.log(`actual is ${rob(node(1))}`);
console.log('should be 1');
console.log();
console.log(`actual is ${rob(node(1,node(2)))}`);
console.log('should be 2');
console.log();
console.log(`actual is ${rob(node(1,node(3),node(2)))}`);
console.log('should be 5');
console.log();
console.log(`actual is ${rob(node(3,node(2),node(1)))}`);
console.log('should be 3');
console.log();
console.log(`actual is ${rob(node(1,node(3,node(4),node(5)),node(2,node(6),node(7))))}`);
console.log('should be 23');
console.log();
console.log(`actual is ${rob(node(1,node(3,node(4),node(5)),node(2,node(6))))}`);
console.log('should be 16');
console.log();
console.log(`actual is ${rob(node(3,node(4,node(5,node(0),node(0)),node(3,node(0),node(0))),node(2,node(4),node(9))))}`);
console.log('should be 24');
console.log();
console.log(`actual is ${rob(node(1,node(1,node(1),node(1)),node(1,node(1),node(1))))}`);
console.log('should be 5');
console.log();
console.log(`actual is ${rob(node(1,node(999,node(1,node(2),node(3)),node(2,node(3),node(3))),node(1,node(2,node(3),node(3)),node(2))))}`);
console.log('should be 1017');

// console.log(`actual is ${rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211])}`);
// console.log('should be 3365');

// const times = [];
// const TRIES = 100;
// for (let ii = TRIES; ii > 0; ii--) {
// const then = Date.now();

// times.push(Date.now() - then);
// }
// console.log(times.join(','));
// console.log(Math.floor(times.reduce((sofar, num) => sofar+=num, 0) / TRIES));
