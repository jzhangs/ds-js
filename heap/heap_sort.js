'use strict';

const assert = require('assert');
const { MaxHeap, MaxHeapO } = require('./maxheap');
const IndexMaxHeap = require('./index_maxheap');
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

function heapSort1O(arr, n) {
  n = n || arr.length;

  let maxheap = new MaxHeapO(n);
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

  function _shiftDownOld(arr, n, k) {
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

  function _shiftDown(arr, n, k) {
    const e = arr[k];
    while (k * 2 + 1 < n) {
      let j = k * 2 + 1;
      if (j + 1 < n && arr[j + 1] > arr[j]) {
        j += 1;
      }
      if (e >= arr[j]) {  // important !!
        break;
      }
      arr[k] = arr[j];
      k = j;
    }
    arr[k] = e;
  }
}

function heapSortIMP(arr, n) {
  n = n || arr.length;

  let imp = new IndexMaxHeap(n);
  for (let i = 0; i < n; i++) {
    imp.insert(i, arr[i]);
  }

  assert(imp.testIndexes());

  for (let i = n - 1; i >= 0; i--) {
    arr[i] = imp.extractMax();
  }
}

module.exports = { heapSort1, heapSort1O, heapSort2, heapSort, heapSortIMP };
