'use strict';

const helper = require('./graph_helper');
const SparseGraph = require('./sparse_graph');
const DenseGraph = require('./dense_graph');
const Component = require('./component');

// const N = 20;
// const M = 100;
// helper.testAddEdge(SparseGraph, N, M);
// helper.testAddEdge(DenseGraph, N, M);

// const file = './assets/testG1.txt';
// let g1 = new SparseGraph(13, false);
// helper.readGraph(g1, file);
// g1.show();

// console.info('');

// let g2 = new DenseGraph(13, false);
// helper.readGraph(g2, file);
// g2.show();

const file1 = './assets/testG1.txt';
let g1 = new SparseGraph(13, false);
helper.readGraph(g1, file1);
let component1 = new Component(g1);
console.info(`TestG1.txt, Component count: ${component1.count()}`);

const file2 = './assets/testG2.txt';
let g2 = new SparseGraph(7, false);
helper.readGraph(g2, file2);
let component2 = new Component(g2);
console.info(`TestG2.txt, Component count: ${component2.count()}`);
