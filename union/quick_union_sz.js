'use strict';

const assert = require('assert');

class UnionFind {
  constructor(n) {
    this.count = n;
    this.parent = [];
    this.sz = [];
    for (let i = 0; i < n; i++) {
      this.parent.push(i);
      this.sz.push(1);
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
    if (this.sz[pRoot] < this.sz[qRoot]) {
      this.parent[pRoot] = qRoot;
      this.sz[qRoot] += this.sz[pRoot];
    } else {
      this.parent[qRoot] = pRoot;
      this.sz[pRoot] += this.sz[qRoot];
    }
  }
}

const UF3 = {};
UF3.UnionFind = UnionFind;

module.exports = UF3;
