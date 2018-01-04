const assert = require('assert');
const Edge = require('./edge');
const IndexMinHeap = require('../heap/index_minheap');

class Dijkstra {
  constructor(graph, s) {
    this.G = graph;
    this.s = s;

    this.distTo = [];
    this.marked = [];
    this.from = [];
    for (let i = 0; i < graph.v(); i++) {
      this.distTo.push(0.0);
      this.marked.push(false);
      this.from.push(null);
    }

    this.ipq = new IndexMinHeap(graph.v());

    // Dijkstra
    this.marked[s] = true;
    this.from[s] = new Edge(s, s, 0.0);
    this.ipq.insert(s, this.distTo[s]);
    while (!this.ipq.isEmpty()) {
      const v = this.ipq.extractMinIndex();
      this.marked[v] = true;

      // relaxation
      const adj = this.G.adj(v);
      for (let e of adj) {
        const w = e.other(v);
        if (!this.marked[w]) {
          if (!this.from[w] || this.distTo[v] + e.wt() < this.distTo[w]) {
            this.distTo[w] = this.distTo[v] + e.wt();
            this.from[w] = e;
            if (this.ipq.contain(w)) {
              this.ipq.change(w, this.distTo[w]);
            } else {
              this.ipq.insert(w, this.distTo[w]);
            }
          }
        }
      }
    }
  }

  shortestPathTo(w) {
    assert(w >= 0 && w <this.G.v());
    return this.distTo[w];
  }

  hasPathTo(w) {
    assert(w >= 0 && w <this.G.v());
    return this.marked[w];
  }

  shortestPath(w) {
    assert(w >= 0 && w <this.G.v());
    assert(this.hasPathTo(w));

    const s = [];
    let e = this.from[w];
    while (e.v() !== e.w()) {
      s.push(e);
      e = this.from[e.v()];
    }
    return s.reverse();
  }

  showPath(w) {
    assert(w >= 0 && w <this.G.v());
    assert(this.hasPathTo(w));

    const p = this.shortestPath(w);
    for (let i = 0; i < p.length; i++) {
      process.stdout.write(`${p[i].v()} -> `);
      if (i === p.length - 1) {
        process.stdout.write(`${p[i].w()}\n`);
      }
    }
  }
}

module.exports = Dijkstra;
