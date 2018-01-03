'use strict';

const assert = require('assert');

class ShortestPath {
  constructor(graph, s) {
    this.G = graph;
    this.visited = (new Array(graph.v())).fill(false);
    this.from = (new Array(graph.v())).fill(-1);
    this.ord = [...this.from];

    assert(s >= 0 && s < this.G.v());
    this.s = s;
    this.visited[s] = true;
    this.ord[s] = 0;

    const q = [s];
    while (q.length) {
      const v = q.shift();
      const adj = graph.adj(v);
      for (let i of adj) {
        if (!this.visited[i]) {
          q.push(i);
          this.visited[i] = true;
          this.from[i] = v;
          this.ord[i] = this.ord[v] + 1;
        }
      }
    }
  }

  hasPath(w) {
    assert(w >= 0 && w < this.G.v());
    return this.visited[w];
  }

  path(w) {
    assert(w >= 0 && w < this.G.v());
    const s = [];
    let p = w;
    while (p !== -1) {
      s.push(p);
      p = this.from[p];
    }
    return s.reverse();
  }

  showPath(w) {
    assert(w >= 0 && w < this.G.v());
    let path = this.path(w);
    console.info(path.join(' -> '));
  }
}

module.exports = ShortestPath;
