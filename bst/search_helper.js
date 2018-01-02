'use strict';

const assert = require('assert');
const { performance } = require('perf_hooks');

const SearchHelper = function () { };

SearchHelper.prototype = {
  testSearch(searchName, search, arr) {
    const n = arr.length;
    const begin = performance.now();
    for (let i = 0, len = 2 * n; i < len; i++) {
      let v = search(arr, i);
      if (i < n) {
        assert(v === i);
      } else {
        assert(v === -1);
      }
    }
    const end = performance.now();
    console.info(`    ${searchName}: from ${n} items searched ${2 * n} items in ${end - begin} ms.`);
  },

  generateOrderArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }
}

module.exports = new SearchHelper();
