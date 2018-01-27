const assert = require('assert');
const Edge = require('./edge');

class BellmanFord {
  constructor(graph, s) {
    this.G = graph;
    this.s = s;

    this.distTo = [];
    this.from = [];
    for (let i = 0; i < graph.v(); i++) {
      this.distTo.push(0.0);
      this.from.push(null);
    }

    this.from[s] = new Edge(s, s, 0.0);

    for (let pass = 1; pass < graph.v(); pass++) {
      for (let i = 0; i < graph.v(); i++) {
        const adj = this.G.adj(i);
        for (let e of adj) {
          if (this.from[e.v()] &&
              (!this.from[e.w()] || this.distTo[e.v()] + e.wt() < this.distTo[e.w()])) {
            this.distTo[e.w()] = this.distTo[e.v()] + e.wt();
            this.from[e.w()] = e;
          }
        }
      }
    }

    this.hasNegativeCycle = this._detectNegativeCycle();
  }

  _detectNegativeCycle() {
    for (let i = 0; i < this.G.v(); i++) {
      const adj = this.G.adj(i);
      for (let e of adj) {
        if (this.from[e.v()] && this.distTo[e.v()] + e.wt() < this.distTo[e.w()]) {
          return true;
        }
      }
    }
    return false;
  }

  negetiveCycle() {
    return this.hasNegativeCycle;
  }

  shortestPathTo(w) {
    assert(w >= 0 && w <this.G.v());
    assert(!this.hasNegativeCycle);
    assert(this.hasPathTo(w));
    return this.distTo[w];
  }

  hasPathTo(w) {
    assert(w >= 0 && w <this.G.v());
    return this.from[w] !== null;
  }

  shortestPath(w) {
    assert(w >= 0 && w <this.G.v());
    assert(!this.hasNegativeCycle);
    assert(this.hasPathTo(w));

    const s = [];
    let e = this.from[w];
    while (e.v() !== this.s) {
      s.push(e);
      e = this.from[e.v()];
    }
    s.push(e);
    return s.reverse();
  }

  showPath(w) {
    assert(w >= 0 && w <this.G.v());
    assert(!this.hasNegativeCycle);
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

module.exports = BellmanFord;
