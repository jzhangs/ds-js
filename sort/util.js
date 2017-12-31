'use strict';

// 2x faster than [a, b] = [b, a];
function _swap(arr, i, j) {
  let _t = arr[i];
  arr[i] = arr[j];
  arr[j] = _t;
}

module.exports = { _swap };
