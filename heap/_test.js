'use strict';

const { MaxHeap, MaxHeapO} = require('./maxheap');
const helper = require('./heap_helper');
const sortHelper = require('../sort/sort_helper');
const { heapSort1, heapSort1O, heapSortIMP } = require('./heap_sort');

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

const n = 1000000;
let arr1 = sortHelper.generateRandomArray(n, 0, n);
let arr2 = [...arr1];
let arr3 = [...arr1];
// sortHelper.testSort('Heap Sort Using Index-Max-Heap', heapSortIMP, arr1);
sortHelper.testSort('Heap Sort 1          ', heapSort1, arr2);
sortHelper.testSort('Heap Sort 1 Optimized', heapSort1O, arr3);
