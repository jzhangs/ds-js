'use strict';

const assert = require('assert');

class UnionFind {
  constructor(n) {
    this.count = n;
    this.parent = [];
    for (let i = 0; i < n; i++) {
      this.parent.push(i);
    }
  }

  find(p) {
    assert(p >= 0 && p < this.count);
    while (p !== this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  union(p, q) {
    let pRoot = this.find(p);
    let qRoot = this.find(q);
    if (pRoot === qRoot) {
      return;
    }
    this.parent[pRoot] = qRoot;
  }
}

const UF2 = {};
UF2.UnionFind = UnionFind;

module.exports = UF2;
