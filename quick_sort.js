'use strict';

const { _swap } = require('./util');

function quickSort(arr, n) {
  n = n || arr.length;

  function _partition(arr, l, r) {
    const v = arr[l];

    let j = l;
    // arr[l+1 ...j] < v; arr[j+1 ...i] > v
    for (let i = l + 1; i <= r; i++) {
      if (arr[i] < v) {
        _swap(arr, i, ++j);
      }
    }
    _swap(arr, l, j);
    return j;
  }

  function _quickSort(arr, l, r) {
    if (l >= r) {
      return;
    }

    let p = _partition(arr, l, r);
    _quickSort(arr, l, p - 1);
    _quickSort(arr, p + 1, r);
  }

  _quickSort(arr, 0, n - 1);
}

module.exports = quickSort;
