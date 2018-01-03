'use strict';

const assert = require('assert');
const Edge = require('./edge');

class DenseWeightedGraph {
  constructor(n, directed) {
    this.n = n;
    this.m = 0;
    this.directed = directed;
    this.g = [];
    for (let i = 0; i < n; i++) {
      this.g.push((new Array(n)).fill(null));
    }
  }

  v() {
    return this.n;
  }

  e() {
    return this.m;
  }

  addEdge(v, w, weight) {
    assert(v >= 0 && v < this.n);
    assert(w >= 0 && w < this.n);
    if (!this.hasEdge(v, w)) {
      this.m++;
    }

    this.g[v][w] = new Edge(v, w, weight);
    if (!this.directed) {
      this.g[w][v] = new Edge(w, v, weight);;
    }
  }

  hasEdge(v, w) {
    assert(v >= 0 && v < this.n);
    assert(w >= 0 && w < this.n);
    return this.g[v][w] !== null;
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

  show() {
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j< this.n; j++) {
        if (this.g[i][j]) {
          process.stdout.write(`${(this.g[i][j]).wt()}  `);
        } else {
          process.stdout.write(`null  `);
        }
      }
      process.stdout.write('\n');
    }
  }
}

module.exports = DenseWeightedGraph;
