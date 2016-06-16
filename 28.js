/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// let strStr = function(haystack, needle) {
//   if (!needle) {
//     return 0;
//   }
//   if (!haystack) {
//     return -1;
//   }
//   for (let ii = 0; ii < haystack.length; ii++) {
//     if(haystack.substr(ii, needle.length) === needle) {
//       return ii;
//     }
//   }
//   return -1;
// };
let strStr = function(haystack, needle) {
  const a = new RegExp(needle, 'g');
  a.test(haystack);
  return Math.max(a.lastIndex - needle.length, -1);
};

console.log(`Expected 0`);
console.log(`Actual   ${strStr('abc', '')}\n`);

console.log(`Expected 0`);
console.log(`Actual   ${strStr('abc', 'a')}\n`);

console.log(`Expected 1`);
console.log(`Actual   ${strStr('abc', 'b')}\n`);

console.log(`Expected 2`);
console.log(`Actual   ${strStr('abc', 'c')}\n`);

console.log(`Expected 0`);
console.log(`Actual   ${strStr('abc', 'abc')}\n`);

console.log(`Expected 1`);
console.log(`Actual   ${strStr('abc', 'bc')}\n`);

console.log(`Expected 0`);
console.log(`Actual   ${strStr('aaa', 'a')}\n`);

console.log(`Expected -1`);
console.log(`Actual   ${strStr('aaa', 'b')}\n`);

console.log(`Expected -1`);
console.log(`Actual   ${strStr('aaa', 'aaaa')}\n`);

console.log(`Expected -1`);
console.log(`Actual   ${strStr('mississippi', 'issipi')}\n`);
