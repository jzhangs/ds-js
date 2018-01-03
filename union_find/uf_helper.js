'use strict';

const assert = require('assert');
const { performance } = require('perf_hooks');
const UF1 = require('./quick_find');

const UnionFindTestHelper = function() {};

UnionFindTestHelper.prototype = {
  testUF1(n) {
    const uf = new UF1.UnionFind(n);
    const begin = performance.now();
    for (let i = 0; i < n ; i++) {
      let a = Math.floor(Math.random() * n);
      let b = Math.floor(Math.random() * n);
      uf.union(a, b);
    }
    for (let i = 0; i< n; i++) {
      let a = Math.floor(Math.random() * n);
      let b = Math.floor(Math.random() * n);
      uf.isConnected(a, b);
    }
    const end = performance.now();
    console.info(`UF1, ${n*2} ops in ${end - begin} ms.`);
  }
}

module.exports = new UnionFindTestHelper();
