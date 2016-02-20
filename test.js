'use strict';

const test = require('tape');
const bitwise2x32 = require('./');

test('and', t => {
  t.deepEqual(bitwise2x32.and([0x11223344, 0x55667788], [0xf0000000, 0xff0000ff]), [0x10000000, 0x55000088]);
  t.end();
});
test('and msb', t => {
  t.deepEqual(bitwise2x32.and([0x11223344, 0xaabbccdd], [0xf0000000, 0xff0000ff]), [0x10000000, 0xaa0000dd]);
  t.end();
});
