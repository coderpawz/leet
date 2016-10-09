/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.freshnessQueue = {};
    this.staleNode = null;
    this.freshNode = null;
    this.cap = capacity;
    this.size = 0;
    this.map = {};
};

LRUCache.prototype.refresh = function(key) {
    if(this.staleNode.key === key) {
        if(this.staleNode.prev) {
            this.staleNode.prev.next = null;
            this.staleNode = this.staleNode.prev;
        }
    }
    if(this.freshNode.key !== key) {
        if(this.freshnessQueue[key].prev) {
            this.freshnessQueue[key].prev.next = this.freshnessQueue[key].next;
        }
        if(this.freshnessQueue[key].next) {
            this.freshnessQueue[key].next.prev = this.freshnessQueue[key].prev;
        }
        this.freshnessQueue[key].prev = null;
        this.freshnessQueue[key].next = this.freshNode;
        this.freshNode.prev = this.freshnessQueue[key];
        this.freshNode = this.freshnessQueue[key];
    }
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map[key]) {
        this.refresh(key);
        return this.map[key];
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    if(this.cap <= 0) {
        return;
    }
    if(this.map[key]) {
        this.map[key] = value;
        this.refresh(key);
    } else {
        this.map[key] = value;
        this.freshnessQueue[key] = { prev: null, next: null, key: key };
        if(this.freshNode) {
            this.freshnessQueue[key].next = this.freshNode;
            this.freshNode.prev = this.freshnessQueue[key];
            this.freshNode = this.freshnessQueue[key];
        } else {
            this.freshNode = this.freshnessQueue[key];
        }
        if(!this.staleNode) {
            this.staleNode = this.freshnessQueue[key];
        }
        if(this.cap > this.size) {
            this.size++;
        } else {
            delete this.map[this.staleNode.key];
            delete this.freshnessQueue[this.staleNode.key];
            if(this.staleNode.prev) {
                this.staleNode.prev.next = null;
                this.staleNode = this.staleNode.prev;
            }
        }
    }
};

var lru = new LRUCache(2);
lru.set(2,1);
lru.set(1,1);
console.log('A: ' + lru.get(2));
console.log('E: 1');
lru.set(4,1);
console.log('A: ' + lru.get(1));
console.log('E: -1');
console.log('A: ' + lru.get(2));
console.log('E: 1');
console.log();

var lru2 = new LRUCache(3);
lru2.set(1,1);
lru2.set(2,2);
lru2.set(3,3);
lru2.set(4,4);

console.log('A: ' + lru2.get(4) + ' ' + lru2.get(3) + ' ' + lru2.get(2) + ' ' + lru2.get(1));
console.log('E: 4 3 2 -1');
lru2.set(5,5);
console.log('A: ' + lru2.get(1) + ' ' + lru2.get(2) + ' ' + lru2.get(3) + ' ' + lru2.get(4) + ' ' + lru2.get(5));
console.log('E: -1 2 3 -1 5');