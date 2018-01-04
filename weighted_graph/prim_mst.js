'use strict';

const assert = require('assert');
const IndexMinHeap = require('../heap/index_minheap');
const Edge = require('./edge');

class PrimMST {
  constructor(graph) {
    this.G = graph;
    this.ipq = new IndexMinHeap(graph.v());
    this.marked = (new Array(graph.v())).fill(false);
    this.edgeTo = (new Array(graph.v())).fill(null);
    this.mst = [];

    // prim
    this.visit(0);
    while (!this.ipq.isEmpty()) {
      const v = this.ipq.extractMinIndex();
      assert(this.edgeTo[v]);
      this.mst.push(this.edgeTo[v]);
      this.visit(v);
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
      let w = e.other(v);
      if (!this.marked[w]) {
        if (!this.edgeTo[w]) {
          this.ipq.insert(w, e.wt());
          this.edgeTo[w] = e;
        } else if (e.wt() < this.edgeTo[w].wt()) {
          this.edgeTo[w] = e;
          this.ipq.change(w, e.wt());
        }
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

module.exports = PrimMST;
