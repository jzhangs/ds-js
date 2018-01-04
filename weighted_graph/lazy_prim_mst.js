'use strict';

const assert = require('assert');
const { MinHeap } = require('../heap/minheap');
const Edge = require('./edge');

class LazyPrimMST {
  constructor(graph) {
    this.G = graph;
    this.pq = new MinHeap(graph.e());
    this.marked = (new Array(graph.v())).fill(false);
    this.mst = [];

    // lazy prim
    this.visit(0);
    while (!this.pq.isEmpty()) {
      const e = this.pq.extractMin();
      if (this.marked[e.v()] === this.marked[e.w()]) {
        continue;
      }
      this.mst.push(e);
      if (!this.marked[e.v()]) {
        this.visit(e.v());
      } else {
        this.visit(e.w());
      }
    }

    let mstWeight = this.mst[0].wt();
    for (let i = 1; i < this.mst.length; i++) {
      mstWeight += this.mst[i].wt();
    }
    this.mstWeight = mstWeight;
  }

  visit(v) {
    assert(!this.marked[v]);
    this.marked[v] = true;

    const adj = this.G.adj(v);
    for (let e of adj) {
      if (!this.marked[e.other(v)]) {
        this.pq.insert(e);
      }
    }
  }

  mstEdges() {
    return this.mst;
  }

  result() {
    return this.mstWeight;
  }
}

module.exports = LazyPrimMST;
