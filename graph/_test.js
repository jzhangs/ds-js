'use strict';

const helper = require('./graph_helper');
const SparseGraph = require('./sparse_graph');
const DenseGraph = require('./dense_graph');
const Component = require('./component');
const Path = require('./path');
const ShortestPath = require('./shortest_path');

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

const V = 100;
const E = Math.floor(V * (V - 1) / 2 / 30);
let g3 = new SparseGraph(V, false);
helper.generateRandomEdge(g3, V, E);
let component3 = new Component(g3);
console.info(`Test Random Graph, Component count: ${component3.count()}`);

// const file = './assets/testG2.txt';
// let g = new SparseGraph(7, false);
// helper.readGraph(g, file);
// g.show();
// console.info('');

// const dfs = new Path(g, 0);
// console.info('DFS: Path from 0 to 6:');
// dfs.showPath(6);

// const bfs = new ShortestPath(g, 0);
// console.info('BFS: Path from 0 to 6:');
// bfs.showPath(6);

