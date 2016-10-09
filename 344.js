/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let r = '';
    for (let ii = s.length - 1; ii >= 0; ii--) {
        r += s[ii];
    }
    return r;
    // return s.split('').reverse().join('');
};
