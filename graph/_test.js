'use strict';

const SparseGraph = require('./sparse_graph');
const DenseGraph = require('./dense_graph');
const helper = require('./graph_helper');

// const N = 20;
// const M = 100;
// helper.testAddEdge(SparseGraph, N, M);
// helper.testAddEdge(DenseGraph, N, M);

const file = './assets/testG1.txt';
let g1 = new SparseGraph(13, false);
helper.readGraph(g1, file);
g1.show();

console.info('');

let g2 = new DenseGraph(13, false);
helper.readGraph(g2, file);
g2.show();
