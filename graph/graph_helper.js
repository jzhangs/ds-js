'use strict';

const assert = require('assert');
const fs = require('fs');

const GraphHelper = function () { };

GraphHelper.prototype = {
  readGraph(graph, file) {
    let v, e;
    const text = fs.readFileSync(file, 'utf8');
    text.split(/\r?\n/).forEach((line) => {
      const arr = line.trim().match(/\d+/g);
      if (!arr) {
        return;
      }
      if (!v) {
        [v, e] = arr.map((v) => parseInt(v));
        assert(v === graph.v());
      } else {
        let [a, b] = arr.map((v) => parseInt(v));
        assert(a >= 0 && a < v);
        assert(b >= 0 && b < v);
        graph.addEdge(a, b);
      }
    });
  },

  testAddEdge(Graph, N, M) {
    const g = new Graph(N, false);
    for (let i = 0; i < M; i++) {
      let a = Math.floor(Math.random() * N);
      let b = Math.floor(Math.random() * N);
      g.addEdge(a, b);
    }
    
    for (let v = 0; v < N; v++) {
      process.stdout.write(`${v} : `);
      let adj = g.adj(v);
      for (let w of adj) {
        process.stdout.write(`${w} `);
      }
      process.stdout.write('\n');
    }
    
    console.info('');
  }
}

module.exports = new GraphHelper();
