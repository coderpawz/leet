/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  if (!intervals || !intervals.length) {
    return [newInterval];
  }
  const res = [];
  let pos = 0;
  const mergedInterval = new Interval(newInterval.start, newInterval.end);
  for (let ii = 0; ii < intervals.length; ii++) {
    if (intervals[ii].end < mergedInterval.start) {
      res.push(intervals[ii]);
      pos++;
    } else if (intervals[ii].start > mergedInterval.end) {
      res.push(intervals[ii]);
    } else {
      mergedInterval.start = Math.min(intervals[ii].start, mergedInterval.start);
      mergedInterval.end = Math.max(intervals[ii].end, mergedInterval.end);
    }
  }
  res.splice(pos, 0, mergedInterval);
  return res;
};

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

console.log(insert([new Interval(1,3), new Interval(6,9)], new Interval(2,5)), [new Interval(1,5), new Interval(6,9)]);
console.log(insert([new Interval(1,5)], new Interval(6,9)), [new Interval(1,5), new Interval(6,9)]);
console.log(insert([new Interval(1,5)], new Interval(0,0)), [new Interval(0,0), new Interval(1,5)]);
console.log(insert([], new Interval(5,7)), [new Interval(5,7)]);
console.log(insert([new Interval(1,5), new Interval(6,8)], new Interval(5,6)), [new Interval(1,8)]);
