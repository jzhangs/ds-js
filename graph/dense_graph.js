'use strict';

const assert = require('assert');

class DenseGraph {
  constructor(n, directed) {
    this.n = n;
    this.m = 0;
    this.directed = directed;
    this.g = [];
    for (let i = 0; i < n; i++) {
      this.g.push((new Array(n)).fill(false));
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
    if (this.hasEdge(v, w)) {
      return;
    }

    this.g[v][w] = true;
    if (!this.directed) {
      this.g[w][v] = true;
    }
    this.m++;
  }

  hasEdge(v, w) {
    assert(v >= 0 && v < this.n);
    assert(w >= 0 && w < this.n);
    return this.g[v][w];
  }

  adj(v) {
    assert(v >= 0 && v < this.n);
    const adj = [];
    for (let i = 0; i < this.n; i++) {
      if (this.g[v][i]) {
        adj.push(i);
      }
    }
    return adj;
  }
}

module.exports = DenseGraph;
