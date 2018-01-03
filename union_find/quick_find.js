'use strict';

const assert = require('assert');

class UnionFind {
  constructor(n) {
    this.count = n;
    this.id = [];
    for (let i = 0; i < n; i++) {
      this.id.push(i);
    }
  }

  find(p) {
    assert(p >= 0 && p < this.count);
    return this.id[p];
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  union(p, q) {
    let pID = this.find(p);
    let qID = this.find(q);
    if (pID === qID) {
      return;
    }
    for (let i = 0; i < this.count; i++) {
      if (this.id[i] === pID) {
        this.id[i] = qID;
      }
    }
  }
}

const UF1 = {};
UF1.UnionFind = UnionFind;

module.exports = UF1;
