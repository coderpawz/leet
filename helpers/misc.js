//given v find the minimum power of two r such that two raised to that power is greater than or equals to v
function getPower(v) {
  let bitmask = [
    0x2,       //10
    0xC,       //1100
    0xF0,      //11110000
    0xFF00,    //1111111100000000
    0xFFFF0000//11111111111111110000000000000000
  ];
  let sigBit = [1,2,4,8,16];
  let r = 0;
  for (let ii = 4; ii >= 0; ii--) {
    if (v & bitmask[ii]) {
      v >>>= sigBit[ii];//unsigned 0-fill
      r |= sigBit[ii];
    }
  }
  return r | 1;//we want max power, or with first bit
}
