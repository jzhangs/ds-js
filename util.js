'use strict';

const { performance } = require('perf_hooks');

function _pref(func, ...args) {
  let begin = performance.now();
  let result = func(...args);
  let end = performance.now();
  return { result, time: end - begin };
}

// 2x faster than [a, b] = [b, a];
function _swap(arr, i, j) {
  let _t = arr[i];
  arr[i] = arr[j];
  arr[j] = _t;
}

function _shuffle(arr, n) {
  n = n || arr.length;
  for (let i = n - 1; i >= 0; i--) {
    let x = Math.floor(Math.random() * (i + 1));
    _swap(arr, i, x);
  }
  return arr;
}

module.exports = { _pref, _swap, _shuffle };
