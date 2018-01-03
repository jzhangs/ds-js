'use strict';

const assert = require('assert');

class Path {
  constructor(graph, s) {
    this.G = graph;
    this.visited = (new Array(graph.v())).fill(false);
    this.from = (new Array(graph.v())).fill(-1);

    assert(s >= 0 && s < this.G.v());
    this.s = s;
    this.dfs(s);
  }

  dfs(v) {
    this.visited[v] = true;
    const adj = this.G.adj(v);
    for (let i of adj) {
      if (!this.visited[i]) {
        this.from[i] = v;
        this.dfs(i);
      }
    }
  }

  hasPath(w) {
    assert(w >= 0 && w < this.G.v());
    return this.visited[w];
  }

  path(w) {
    const s = [];
    let p = w;
    while (p !== -1) {
      s.push(p);
      p = this.from[p];
    }
    return s.reverse();
  }

  showPath(w) {
    let path = this.path(w);
    console.info(path.join(' -> '));
  }
}

module.exports = Path;
