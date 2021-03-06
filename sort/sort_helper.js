'use strict';

const assert = require('assert');
const { performance } = require('perf_hooks');
const { _swap } = require('../util');

const SortHelper = function() {};

SortHelper.prototype = {
  generateRandomArray(n, min, max) {
    const arr = [];
    while (n--) {
      arr.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return arr;
  },

  generateNearlyOrderedArray(n, swapTimes, reverse) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      // arr.push(i);
      arr.push(reverse ? n - i : i);
    }
    for (let i = 0; i < swapTimes; i++) {
      let posx = Math.floor(Math.random() * n);
      let posy = Math.floor(Math.random() * n);
      [arr[posx], arr[posy]] = [arr[posy], arr[posx]];
    }
    return arr;
  },

  testSort(sortName, sort, arr) {
    const begin = performance.now();
    const res = sort(arr) || arr;
    const end = performance.now();
    assert(this.isSorted(res));
    console.info(`    ${sortName}: ${arr.length} items sorted in ${end - begin} ms.`);
  },

  isSorted(arr, len) {
    len = len || arr.length;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // console.info(i, arr[i], arr[i+1]);
        // return true;
        return false;
      }
    }
    return true;
  },

  shuffleArr(arr, n) {
    n = n || arr.length;
    for (let i = 0; i < n; i++) {
      _swap(arr, i, Math.floor(Math.random() * n))
    }
  }
}

module.exports = new SortHelper();
