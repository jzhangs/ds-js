'use strict';

const helper = require('./wgraph_helper');
const DenseWeightedGraph = require('./dense_wgraph');
const SparseWeightedGraph = require('./sparse_wgraph');
const LazyPrimMST = require('./lazy_prim_mst');

const file = './assets/testG1.txt';
const V = 8;

// const g1 = new DenseWeightedGraph(V, false);
// helper.readWGraph(g1, file);
// g1.show();
// console.info('');

// const g2 = new SparseWeightedGraph(V, false);
// helper.readWGraph(g2, file);
// g2.show();
// console.info('');

const g = new SparseWeightedGraph(V, false);
helper.readWGraph(g, file);

console.info(`Test Lazy Prim MST:`);
const lazyPrimMST = new LazyPrimMST(g)
const mst = lazyPrimMST.mstEdges();
for (let i = 0; i < mst.length; i++) {
  console.info(`${mst[i]}`);
}
console.info(`The MST weight is: ${lazyPrimMST.result().toFixed(2)}`);
