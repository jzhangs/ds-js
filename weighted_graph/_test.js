'use strict';

const helper = require('./wgraph_helper');
const DenseWeightedGraph = require('./dense_wgraph');
const SparseWeightedGraph = require('./sparse_wgraph');
const LazyPrimMST = require('./lazy_prim_mst');
const PrimMST = require('./prim_mst');
const KruskalMST = require('./kruskal_mst');

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
const lazyPrimMST = new LazyPrimMST(g);
let mst = lazyPrimMST.mstEdges();
for (let i = 0; i < mst.length; i++) {
  console.info(`${mst[i]}`);
}
console.info(`The MST weight is: ${lazyPrimMST.result().toFixed(2)}\n`);

console.info(`Test Prim MST:`);
const primMST = new PrimMST(g);
mst = primMST.mstEdges();
for (let i = 0; i < mst.length; i++) {
  console.info(`${mst[i]}`);
}
console.info(`The MST weight is: ${primMST.result().toFixed(2)}\n`);

console.info(`Test Kruskal MST:`);
const kruskalMST = new KruskalMST(g);
mst = kruskalMST.mstEdges();
for (let i = 0; i < mst.length; i++) {
  console.info(`${mst[i]}`);
}
console.info(`The MST weight is: ${kruskalMST.result().toFixed(2)}\n`);
