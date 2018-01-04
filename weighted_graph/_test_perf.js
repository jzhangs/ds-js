'use strict';

const helper = require('./wgraph_helper');
const SparseWeightedGraph = require('./sparse_wgraph');
const LazyPrimMST = require('./lazy_prim_mst');
const PrimMST = require('./prim_mst');

const file1 = './assets/testG1.txt';
const V1 = 8;

const file2 = './assets/testG2.txt';
const V2 = 250;

const file3 = './assets/testG3.txt';
const V3 = 1000;

const file4 = './assets/testG4.txt';
const V4 = 10000;

const g1 = new SparseWeightedGraph(V1, false);
helper.readWGraph(g1, file1);

const g2 = new SparseWeightedGraph(V2, false);
helper.readWGraph(g2, file2);

const g3 = new SparseWeightedGraph(V3, false);
helper.readWGraph(g3, file3);

const g4 = new SparseWeightedGraph(V4, false);
helper.readWGraph(g4, file4);

console.info(`Test Lazy Prim MST:`);
helper.testPerf('G1', LazyPrimMST, g1);
helper.testPerf('G2', LazyPrimMST, g2);
helper.testPerf('G3', LazyPrimMST, g3);
helper.testPerf('G4', LazyPrimMST, g4);

console.info(`Test Prim MST:`);
helper.testPerf('G1', PrimMST, g1);
helper.testPerf('G2', PrimMST, g2);
helper.testPerf('G3', PrimMST, g3);
helper.testPerf('G4', PrimMST, g4);
