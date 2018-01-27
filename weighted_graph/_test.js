'use strict';

const helper = require('./wgraph_helper');
const DenseWeightedGraph = require('./dense_wgraph');
const SparseWeightedGraph = require('./sparse_wgraph');
const LazyPrimMST = require('./lazy_prim_mst');
const PrimMST = require('./prim_mst');
const KruskalMST = require('./kruskal_mst');
const Dijkstra = require('./djkstra');
const BellmanFord = require('./bellman_ford');

// const file = './assets/testG1.txt';
// const V = 8;

// // const g1 = new DenseWeightedGraph(V, false);
// // helper.readWGraph(g1, file);
// // g1.show();
// // console.info('');

// // const g2 = new SparseWeightedGraph(V, false);
// // helper.readWGraph(g2, file);
// // g2.show();
// // console.info('');

// const g = new SparseWeightedGraph(V, false);
// helper.readWGraph(g, file);

// console.info(`Test Lazy Prim MST:`);
// const lazyPrimMST = new LazyPrimMST(g);
// let mst = lazyPrimMST.mstEdges();
// for (let i = 0; i < mst.length; i++) {
//   console.info(`${mst[i]}`);
// }
// console.info(`The MST weight is: ${lazyPrimMST.result().toFixed(2)}\n`);

// console.info(`Test Prim MST:`);
// const primMST = new PrimMST(g);
// mst = primMST.mstEdges();
// for (let i = 0; i < mst.length; i++) {
//   console.info(`${mst[i]}`);
// }
// console.info(`The MST weight is: ${primMST.result().toFixed(2)}\n`);

// console.info(`Test Kruskal MST:`);
// const kruskalMST = new KruskalMST(g);
// mst = kruskalMST.mstEdges();
// for (let i = 0; i < mst.length; i++) {
//   console.info(`${mst[i]}`);
// }
// console.info(`The MST weight is: ${kruskalMST.result().toFixed(2)}\n`);

// const file = './assets/testG1_1.txt';
// const V = 5;
// const g = new SparseWeightedGraph(V, true);
// helper.readWGraph(g, file);

// console.info('Test Dijkstra: ');
// const dij = new Dijkstra(g, 0);
// for (let i = 1; i < V; i++) {
//   if (dij.hasPathTo(i)) {
//     console.info(`Shortest Path to ${i} : ${dij.shortestPathTo(i)}`);
//     dij.showPath(i);
//   } else {
//     console.info(`No path to ${i}.`);
//   }
//   console.info('-----------------');
// }

const file = './assets/testG2_2.txt';
// const file = './assets/testG_negative_circle.txt';
const V = 5;
const g = new SparseWeightedGraph(V, true);
helper.readWGraph(g, file);

console.info('Test Bellman-Ford: ');
const s = 0;
const bellmanFord = new BellmanFord(g, s);
if (bellmanFord.negetiveCycle()) {
  console.info('The graph contain negative cycle!');
} else {
  for (let i = 0; i < V; i++) {
    if (i === s) {
      continue;
    }

    if (bellmanFord.hasPathTo(i)) {
      console.info(`Shortest Path to ${i} : ${bellmanFord.shortestPathTo(i)}`);
      bellmanFord.showPath(i);
    } else {
      console.info(`No path to ${i}.`);
    }
    console.info('-----------------');
  }
}


