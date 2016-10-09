/**
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums) {
    'use strict';
    const strs = nums.map(n => ('' + n));
    strs.sort((a1,a2) => {
        if(a1 + a2 > a2 + a1) {
            return -1;
        } else if(a2+a1 > a1+a2) {
            return 1;
        } else {
            return 0;
        }
    });
    return strs.join('').replace(/,/g,'').replace(/^0+/, '0');
}

console.log('A: ' + largestNumber([123,1239,9012,23,1,3,4,5,7,64]));
console.log('E: 90127645432312391231');

console.log('A: ' + largestNumber([3, 30, 34, 5, 9]));
console.log('E: 9534330');

console.log('A: ' + largestNumber([500,50,54,5,504,440,4]));
console.log('E: 554505045004440');

console.log('A: ' + largestNumber([9682,928,2354,8060]));
console.log('E: 968292880602354');

console.log('A: ' + largestNumber([824,938,1399,5607,6973,5703,9609,4398,8247]));
console.log('E: 9609938824824769735703560743981399');