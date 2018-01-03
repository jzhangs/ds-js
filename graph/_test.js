'use strict';

const SparseGraph = require('./sparse_graph');
const DenseGraph = require('./dense_graph');
const N = 20;
const M = 100;

const g1 = new SparseGraph(N, false);
for (let i = 0; i < M; i++) {
  let a = Math.floor(Math.random() * N);
  let b = Math.floor(Math.random() * N);
  g1.addEdge(a, b);
}

for (let v = 0; v < N; v++) {
  process.stdout.write(`${v} : `);
  let adj = g1.adj(v);
  for (let w of adj) {
    process.stdout.write(`${w} `);
  }
  process.stdout.write('\n');
}

console.info('');

const g2 = new DenseGraph(N, false);
for (let i = 0; i < M; i++) {
  let a = Math.floor(Math.random() * N);
  let b = Math.floor(Math.random() * N);
  g2.addEdge(a, b);
}

for (let v = 0; v < N; v++) {
  process.stdout.write(`${v} : `);
  let adj = g2.adj(v);
  for (let w of adj) {
    process.stdout.write(`${w} `);
  }
  process.stdout.write('\n');
}
