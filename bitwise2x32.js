'use strict';

// Convert an signed 32-bit result (from bitwise operations) to
// JavaScript's 53-bit numeric type as if it was unsigned
function signed32toUnsigned53(n) {
  if (n < 0) {
    return 0x100000000 + n;
  } else {
    return n;
  }
}

function and(a, b) {
  return [a[0] & b[0], signed32toUnsigned53(a[1] & b[1])];
}

function or(a, b) {
  return [a[0] | b[0], signed32toUnsigned53(a[1] | b[1])];
}

function xor(a, b) {
  return [a[0] ^ b[0], signed32toUnsigned53(a[1] ^ b[1])];
}

function not(a) {
  return [~a[0], signed32toUnsigned53(~a[1])];
}

function shift_left1(a) {
  a = [a[0], a[1]];

  a[1] *= 2;
  a[0] *= 2;
  if (a[1] > 0xffffffff) {
    a[1] -= 0xffffffff;
    a[0] += 1;
  }
  if (a[0] > 0xffffffff) {
    // TODO
  }
  return a;
}

// << left shift n
function shift_left(a, n) {
  for (let i = 0; i < n; ++n) {
    a = shift_left1(a);
  }
  return a;
}

// TODO: >>> right-shift zero fill

module.exports = {
  signed32toUnsigned53,
  and,
  or,
  xor,
  not,
  shift_left1,
  shift_left,
};
