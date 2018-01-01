'use strict';

const MaxHeap = require('./maxheap');
const { _swap } = require('../util');

function heapSort1(arr, n) {
  n = n || arr.length;

  let maxheap = new MaxHeap(n);
  for (let i = 0; i < n; i++) {
    maxheap.insert(arr[i]);
  }

  for (let i = n - 1; i >= 0; i--) {
    arr[i] = maxheap.extractMax();
  }
}

// heapSort2 should be faster than heapSort, but it seems that
// due to gc on V8, it may slower when there're too many numbers.
// Tested using C++.
function heapSort2(arr, n) {
  n = n || arr.length;

  let maxheap = new MaxHeap(arr);
  for (let i = n - 1; i >= 0; i--) {
    arr[i] = maxheap.extractMax();
  }
}

function heapSort(arr, n) {
  n = n || arr.length;

  for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
    _shiftDown(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    _swap(arr, 0, i);
    _shiftDown(arr, i, 0);
  }

  function _shiftDown(arr, n, k) {
    while (k * 2 + 1 < n) {
      let j = k * 2 + 1;
      if (j + 1 < n && arr[j + 1] > arr[j]) {
        j += 1;
      }
      if (arr[k] >= arr[j]) {
        break;
      }
      // TODO, optimize this using assignment, not swap;
      _swap(arr, k, j);
      k = j;
    }
  }
}

module.exports = { heapSort1, heapSort2, heapSort };
