'use strict';

const test = require('tape');
const bitwise2x32 = require('./');

test('signed32toUnsigned53', t => {
  t.equal(bitwise2x32.signed32toUnsigned53(0), 0);
  t.equal(bitwise2x32.signed32toUnsigned53(1), 1);
  t.equal(bitwise2x32.signed32toUnsigned53(-1), 0xffffffff);
  t.equal(bitwise2x32.signed32toUnsigned53(-2), 0xfffffffe);
  t.end();
});

test('and', t => {
  t.deepEqual(bitwise2x32.and([0x11223344, 0x55667788], [0xf0000000, 0xff0000ff]), [0x10000000, 0x55000088]);
  t.end();
});
test('and msb', t => {
  t.deepEqual(bitwise2x32.and([0x11223344, 0xaabbccdd], [0xf0000000, 0xff0000ff]), [0x10000000, 0xaa0000dd]);
  t.end();
});
test('or', t => {
  t.deepEqual(bitwise2x32.or([0x11003300, 0xaa00cc00], [0x00220044, 0x00bb00dd]), [0x11223344, 0xaabbccdd]);
  t.end();
});
test('shift_left1', t => {
  t.deepEqual(bitwise2x32.shift_left1([0x00000000, 0xf00000000]), [0x00000001, 0x70000000]);
  t.end();
});
