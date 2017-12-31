'use strict';

const { _swap } = require('./util');
const { insertionSortLR } = require('./insertion_sort');

function quickSort(arr, n) {
  n = n || arr.length;

  function _partition(arr, l, r) {
    // 2. optimze for nearly ordered array
    _swap(arr, l, Math.floor(Math.random() * (r - l + 1)) + l);
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

  // quick sort 2 ways
  function _partition2(arr, l, r) {
    _swap(arr, l, Math.floor(Math.random() * (r - l + 1)) + l);
    const v = arr[l];

    // arr[l+1 ...i] <= v; arr[j ...i] >= v
    let i = l + 1, j = r;
    while (true) {
      while (i <= r && arr[i] < v) i++;
      while (j >= l + 1 && arr[j] > v) j--;
      if (i > j) {
        break;
      }
      _swap(arr, i++, j--);
    }
    _swap(arr, l, j);
    return j;
  }

  function _quickSort(arr, l, r) {
    // if (l >= r) {
    //   return;
    // }

    if (r - l <= 15) {             // 1. optimze for small size array - 5% ?
      insertionSortLR(arr, l, r);
      return;
    }

    let p = _partition2(arr, l, r);
    _quickSort(arr, l, p - 1);
    _quickSort(arr, p + 1, r);
  }

  _quickSort(arr, 0, n - 1);
}

function quickSort3Ways(arr, n) {
  n = n || arr.length;

  function _partition3(arr, l, r) {
    _swap(arr, l, Math.floor(Math.random() * (r - l + 1)) + l);
    const v = arr[l];

    let lt = l;     // arr[l+1 ...lt] < v
    let gt = r + 1; // arr[gt..r] > v
    let i = l + 1;  // arr[lt+1...i) == v
    while (i < gt) {
      if (arr[i] < v) {
        _swap(arr, i++, ++lt);
      } else if (arr[i] > v) {
        _swap(arr, i, --gt);
      } else {  // arr[i] == v
        i++;
      }
    }
    _swap(arr, l, lt);
    return { lt, gt };
  }

  function _quickSort3Ways(arr, l, r) {
    if (r - l <= 15) {
      insertionSortLR(arr, l, r);
      return;
    }

    let { lt, gt } = _partition3(arr, l, r);
    _quickSort3Ways(arr, l, lt - 1);
    _quickSort3Ways(arr, gt, r);
  }

  _quickSort3Ways(arr, 0, n - 1);
}

module.exports = { quickSort, quickSort3Ways} ;
