'use strict';

const { MinHeap } = require('../heap/minheap');
const { UnionFind } = require('../union/quick_union_pc');

class KruskalMST {
  constructor(graph) {
    this.pq = new MinHeap(graph.e());
    for (let i = 0; i < graph.v(); i++) {
      const adj = graph.adj(i);
      for (let e of adj) {
        if (e.v() < e.w()) {
          this.pq.insert(e);
        }
      }
    }

    this.mst = [];
    const uf = new UnionFind(graph.v());
    while (!this.pq.isEmpty() && this.mst.length < graph.v() - 1) {
      const e = this.pq.extractMin();
      if (uf.isConnected(e.v(), e.w())) {
        continue;
      }
      uf.union(e.v(), e.w());
      this.mst.push(e);
    }

    let mstWeight = this.mst[0].wt();
    for (let i = 1; i < this.mst.length; i++) {
      mstWeight += this.mst[i].wt();
    }
    this.mstWeight = mstWeight;
  }
  
  mstEdges() {
    return this.mst;
  }

  result() {
    return this.mstWeight;
  }
}

module.exports = KruskalMST;
