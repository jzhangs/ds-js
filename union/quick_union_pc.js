'use strict';

const assert = require('assert');

class UnionFind {
  constructor(n) {
    this.count = n;
    this.parent = [];
    this.rank = [];
    for (let i = 0; i < n; i++) {
      this.parent.push(i);
      this.rank.push(1);
    }
  }

  find(p) {
    assert(p >= 0 && p < this.count);

    // path compression 1.
    while (p !== this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]];
      p = this.parent[p];
    }
    return p;

    // path compression 2, recursion may make it slower.
    // if (p !== this.parent[p]) {
    //   this.parent[p] = this.find(this.parent[p]);
    // }
    // return this.parent[p];
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
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot;
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot;
    } else {
      this.parent[pRoot] = qRoot;
      this.rank[qRoot] +=1;
    }
  }

  show() {
    for (let i = 0; i < this.count; i++) {
      process.stdout.write(`${this.parent[i]} `);
    }
    process.stdout.write('\n');
  }
}

const UF5 = {};
UF5.UnionFind = UnionFind;

module.exports = UF5;
