'use strict';

const { performance } = require('perf_hooks');

// 2x faster than [a, b] = [b, a];
function _swap(arr, i, j) {
  let _t = arr[i];
  arr[i] = arr[j];
  arr[j] = _t;
}

function _pref(func, ...args) {
  let begin = performance.now();
  let result = func(...args);
  let end = performance.now();
  return { result, time: end - begin };
}

module.exports = { _swap, _pref };
