'use strict';

const assert = require('assert');
const Edge = require('./edge');

class SparseWeightedGraph {
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

  addEdge(v, w, weight) {
    assert(v >= 0 && v < this.n);
    assert(w >= 0 && w < this.n);
    
    this.g[v].push(new Edge(v, w, weight));
    if (v !== w && !this.directed) {
      this.g[w].push(new Edge(w, v, weight));
    }
    this.m++;
  }

  hasEdge(v, w) {
    assert(v >= 0 && v < this.n);
    assert(w >= 0 && w < this.n);
    for (let i = 0; i < this.g[v].length; i++) {
      if (this.g[v][i].other(v) === w) {
        return true;
      }
    }
    return false;
  }

  adj(v) {
    assert(v >= 0 && v < this.n);
    return this.g[v];
  }

  show() {
    for (let i = 0; i < this.n; i++) {
      process.stdout.write(`vertex ${i}:  `);
      for (let j = 0; j < this.g[i].length; j++) {
        process.stdout.write(`(to:${this.g[i][j].w()}, wt:${this.g[i][j].wt()}) `);
      }
      process.stdout.write('\n');
    }
  }
}

module.exports = SparseWeightedGraph;
