'use strict';

const assert = require('assert');

class Component {
  constructor(graph) {
    this.G = graph;
    this.ccount = 0;
    this.visited = (new Array(graph.v())).fill(false);
    this.id = (new Array(graph.v())).fill(-1);

    for (let i = 0; i < graph.v(); i++) {
      if (!this.visited[i]) {
        this.dfs(i);
        this.ccount++;
      }
    }
  }

  dfs(v) {
    this.visited[v] = true;
    this.id[v] = this.ccount;
    const adj = this.G.adj(v);
    for (let i of adj) {
      if (!this.visited[i]) {
        this.dfs(i);
      }
    }
  }

  count() {
    return this.ccount;
  }

  isConnected(v, w) {
    assert(v >= 0 && v < this.G.v());
    assert(w >= 0 && w < this.G.v());
    return (this.id[v] === this.id[w]);
  }
}

module.exports = Component;
