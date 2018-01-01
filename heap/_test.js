'use strict';

const MaxHeap = require('./maxheap');
const helper = require('./heap_helper');
const sortHelper = require('../sort/sort_helper');
const { heapSortIMP } = require('./heap_sort');

// let maxheap = new MaxHeap(100);

// for (let i = 0; i < 40; i++) {
//   maxheap.insert(Math.floor(Math.random() * 100));
// }

// helper.print(maxheap);
// while (!maxheap.isEmpty()) {
//   process.stdout.write(`${maxheap.extractMax()} `);
// }
// process.stdout.write(`\n`);

// helper.print(maxheap);

const n = 100000;
let arr = sortHelper.generateRandomArray(n, 0, n);
sortHelper.testSort('Heap Sort Using Index-Max-Heap', heapSortIMP, arr);
