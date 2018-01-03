'use strict';

const assert = require('assert');

class SparseGraph {
  constructor(n, directed) {
    this.n = n;
    this.m = 0;
    this.directed = directed;
    this.g = [];
    for (let i = 0; i < n; i++) {
      this.g.push([]);
    }
  }

  v() {
    return this.n;
  }

  e() {
    return this.m;
  }

  addEdge(v, w) {
    assert(v >= 0 && v < this.n);
    assert(w >= 0 && w < this.n);
    
    this.g[v].push(w);
    if (v !== w && !this.directed) {
      this.g[w].push(v);
    }
    this.m++;
  }

  hasEdge(v, w) {
    assert(v >= 0 && v < this.n);
    assert(w >= 0 && w < this.n);
    for (let i = 0; i < this.g[v].length; i++) {
      if (this.g[v][i] === w) {
        return true;
      }
    }
    return false;
  }

  adj(v) {
    assert(v >= 0 && v < this.n);
    return this.g[v];
  }
}

module.exports = SparseGraph;
