'use strict';

const assert = require('assert');
const fs = require('fs');

const WGraphHelper = function () { };

WGraphHelper.prototype = {
  readWGraph(graph, file) {
    let v, e;
    const text = fs.readFileSync(file, 'utf8');
    text.split(/\r?\n/).forEach((line) => {
      const arr = line.trim().match(/[.\d]+/g);
      if (!arr) {
        return;
      }
      if (!v) {
        [v, e] = arr.map((v) => parseInt(v));
        assert(v === graph.v());
      } else {
        let [a, b, weight] = arr.map((v) => {return parseFloat(v)});
        // weight = weight.toFixed(2);
        assert(a >= 0 && a < v);
        assert(b >= 0 && b < v);
        graph.addEdge(a, b, weight);
      }
    });
  },

  generateRandomEdge(graph, v, e) {
    const p = 2 * e / (v * (v - 1));
    for (let i = 0; i < v; i++) {
      for (let j = i + 1; j < v; j++) {
        const _v = Math.random();
        if (_v < p) {
          graph.addEdge(i, j);
        }
      }
    }
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

module.exports = new WGraphHelper();
