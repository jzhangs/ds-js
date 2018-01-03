'use strict';

const helper = require('./wgraph_helper');
const DenseWeightedGraph = require('./dense_wgraph');
const SparseWeightedGraph = require('./sparse_wgraph');

const file = './assets/testG1.txt';

const V = 8;
const g1 = new DenseWeightedGraph(V, false);
helper.readWGraph(g1, file);
g1.show();
console.info('');

const g2 = new SparseWeightedGraph(V, false);
helper.readWGraph(g2, file);
g2.show();
console.info('');
