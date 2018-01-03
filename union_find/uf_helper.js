'use strict';

const assert = require('assert');
const { performance } = require('perf_hooks');

const UnionFindTestHelper = function () { };

UnionFindTestHelper.prototype = {
  generatePairArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      let a = Math.floor(Math.random() * n);
      let b = Math.floor(Math.random() * n);
      arr.push({ a, b });
    }
    return arr;
  },

  testUnionFind(name, UnionFind, n) {
    const uf = new UnionFind(n);
    const begin = performance.now();
    for (let i = 0; i < n; i++) {
      let a = Math.floor(Math.random() * n);
      let b = Math.floor(Math.random() * n);
      uf.union(a, b);
    }
    for (let i = 0; i < n; i++) {
      let a = Math.floor(Math.random() * n);
      let b = Math.floor(Math.random() * n);
      uf.isConnected(a, b);
    }
    const end = performance.now();
    console.info(`${name}: ${n * 2} ops in ${end - begin} ms.`);
  },

  testUnionFindSameArray(name, UnionFind, unionArr, connectArr) {
    const n = unionArr.length;
    const uf = new UnionFind(n);
    const begin = performance.now();
    for (let i = 0; i < n; i++) {
      let { a, b } = unionArr[i];
      uf.union(a, b);
    }
    for (let i = 0; i < n; i++) {
      let { a, b } = connectArr[i];
      uf.isConnected(a, b);
    }
    const end = performance.now();
    console.info(`${name}: ${n * 2} ops in ${end - begin} ms.`);
  }
}

module.exports = new UnionFindTestHelper();
