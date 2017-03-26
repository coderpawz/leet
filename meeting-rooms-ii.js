/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const starts = [];
  const ends = [];

  for (let ii = intervals.length - 1; ii >= 0; ii--) {
    starts.push(intervals[ii].start);
    ends.push(intervals[ii].end);
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let rooms = 0;

  for (let ii = 0, jj = 0; ii < starts.length; ii++) {
    if (starts[ii] < ends[jj]) {
      rooms++;
    } else {
      jj++;
    }
  }

  return rooms;
};

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

console.log(2, minMeetingRooms([new Interval(0, 30), new Interval(5, 10), new Interval(15, 20)]));
console.log(1, minMeetingRooms([new Interval(2, 7)]));
console.log(2, minMeetingRooms([new Interval(2, 10), new Interval(1, 4)]));
