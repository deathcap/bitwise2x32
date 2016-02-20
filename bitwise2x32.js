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

// TODO: << left shift
// TODO: >>> right-shift zero fill

module.exports = {
  signed32toUnsigned53,
  and,
  or,
  xor,
  not,
};
