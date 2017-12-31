'use strict';

const { insertionSort, insertionSortLR } = require('./insertion_sort');

function _merge(arr, l, mid, r) {
  const aux = arr.slice(l, r + 1);

  let i = l, j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l];
      j++;
    } else if (j > r) {
      arr[k] = aux[i - l];
      i++;
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l];
      i++;
    } else {
      arr[k] = aux[j - l];
      j++;
    }
  }
}

function mergeSort(arr, n) {
  n = n || arr.length;

  function _mergeSort(arr, l, r) {
    // if (l >= r) {
    //   return;
    // }

    if (r - l <= 15) {             // 2. optimze for small size array
      insertionSortLR(arr, l, r);
      return;
    }

    let mid = Math.floor((l + r) / 2);
    _mergeSort(arr, l, mid);
    _mergeSort(arr, mid + 1, r);
    if (arr[mid] > arr[mid + 1]) {  // 1. optimze for nearly ordered array
      _merge(arr, l, mid, r);
    }
  }

  _mergeSort(arr, 0, n - 1);
}

// bottom up
function mergeSortBU(arr, n) {
  n = n || arr.length;

  for (let sz = 1; sz <= n; sz += sz) {
    for (let i = 0; i + sz < n; i += sz + sz) {
      _merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n-1));
    }
  }
}

module.exports = { mergeSort, mergeSortBU };
