'use strict';

const { insertionSortLR } = require('./insertion_sort');

function _merge(arr, l, mid, r) {
  const aux = arr.slice(l, r + 1);

  let i = l, j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l]; j++;
    } else if (j > r) {
      arr[k] = aux[i - l]; i++;
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l]; i++;
    } else {
      arr[k] = aux[j - l]; j++;
    }
  }
}

function _merge2(arr, aux, l, mid, r) {
  for (let i = l ; i <= r; i++) {
    aux[i] = arr[i];
  }

  let i = l, j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j]; j++;
    } else if (j > r) {
      arr[k] = aux[i]; i++;
    } else if (aux[i] < aux[j]) {
      arr[k] = aux[i]; i++;
    } else {
      arr[k] = aux[j]; j++;
    }
  }
}

function mergeSortNoOpt(arr, n) {
  n = n || arr.length;

  function _mergeSort(arr, l, r) {
    if (l >= r) {
      return;
    }

    let mid = Math.floor((l + r) / 2);
    _mergeSort(arr, l, mid);
    _mergeSort(arr, mid + 1, r);
    _merge(arr, l, mid, r);
  }

  _mergeSort(arr, 0, n - 1);
}

function mergeSort(arr, n) {
  n = n || arr.length;

  function _mergeSort(arr, l, r) {
    if (r - l <= 15) {             // 1. optimze for small size array
      insertionSortLR(arr, l, r);
      return;
    }

    let mid = Math.floor((l + r) / 2);
    _mergeSort(arr, l, mid);
    _mergeSort(arr, mid + 1, r);
    if (arr[mid] > arr[mid + 1]) {  // 2. optimze for nearly ordered array
      _merge(arr, l, mid, r);
    }
  }

  _mergeSort(arr, 0, n - 1);
}

function mergeSort2(arr, n) {
  n = n || arr.length;
  let aux = new Array(n);  // 3. optimze space alloc
  // let aux = [...arr];
  // let aux = [];

  function _mergeSort2(arr, l, r) {
    if (r - l <= 15) {             // 1. optimze for small size array
      insertionSortLR(arr, l, r);
      return;
    }

    let mid = Math.floor((l + r) / 2);
    _mergeSort2(arr, l, mid);
    _mergeSort2(arr, mid + 1, r);
    if (arr[mid] > arr[mid + 1]) {  // 2. optimze for nearly ordered array
      _merge2(arr, aux, l, mid, r);
    }
  }

  _mergeSort2(arr, 0, n - 1);
}

function mergeSortBU(arr, n) {
  n = n || arr.length;
  for (let sz = 1; sz <= n; sz += sz) {
    for (let i = 0; i + sz < n; i += sz + sz) {
      _merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n-1));
    }
  }
}

function mergeSortBUOpt(arr, n) {
  n = n || arr.length;
  for (let i = 0; i <n; i+=16) {
    insertionSortLR(arr, i, Math.min(i+15, n-1));
  }

  for (let sz = 16; sz <= n; sz += sz) {
    for (let i = 0; i + sz < n; i += sz + sz) {
      _merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n-1));
    }
  }
}

module.exports = { mergeSortNoOpt, mergeSort, mergeSort2, mergeSortBU, mergeSortBUOpt };
