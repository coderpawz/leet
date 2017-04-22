/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    var temp = [];
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        let bytes = 4;
        let total = 0;
        while (buf.length < n && temp.length) {
            buf.push(temp.shift());
            total++;
        }
        while (buf.length < n && bytes === 4) {
            bytes = read4(temp);
            while (buf.length < n && temp.length) {
                buf.push(temp.shift());
                total++;
            }
        }
        return total;
    };
};
