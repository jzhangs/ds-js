const assert = require('assert');
const { performance } = require('perf_hooks');

const SortHelper = function() {};

SortHelper.prototype = {
  generateRandomArray(n, min, max) {
    const arr = [];
    while (n--) {
      arr.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return arr;
  },

  testSort(sortName, sort, arr) {
    const begin = performance.now();
    sort(arr);
    const end = performance.now();
    assert(this.isSorted(arr))
    console.info(`${sortName}: ${arr.length} items sorted in ${end - begin} ms.`);
  },

  isSorted(arr, len) {
    len = len || arr.length;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
}

module.exports = new SortHelper();
