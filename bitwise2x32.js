'use strict';

function and(a, b) {
  return [a[0] & b[0], a[1] & b[1]];
}

module.exports = {
  and
};
