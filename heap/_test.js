'use strict';

const { MaxHeap, MaxHeapO} = require('./maxheap');
const { MinHeap } = require('./minheap');
const IndexMaxHeap = require('./index_maxheap');
const IndexMinHeap = require('./index_minheap');
const helper = require('./heap_helper');
const sortHelper = require('../sort/sort_helper');
const { heapSort1, heapSort1O, heapSort1Min, heapSortIMaxH, heapSortIMinH } = require('./heap_sort');

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

// let minheap = new MinHeap(100);

// for (let i = 0; i < 40; i++) {
//   minheap.insert(Math.floor(Math.random() * 100));
// }

// helper.print(minheap);
// while (!minheap.isEmpty()) {
//   process.stdout.write(`${minheap.extractMin()} `);
// }
// process.stdout.write(`\n`);

// helper.print(minheap);

// const n = 100000;
// let arr1 = sortHelper.generateRandomArray(n, 0, n);
// let arr2 = [...arr1];
// let arr3 = [...arr1];
// sortHelper.testSort('Heap Sort Using Index-Max-Heap', heapSortIMaxH, arr1);
// // sortHelper.testSort('Heap Sort 1          ', heapSort1, arr2);
// // sortHelper.testSort('Heap Sort 1 Optimized', heapSort1O, arr3);
// // sortHelper.testSort('Heap Sort 1 MinHeap  ', heapSort1Min, arr1);
// sortHelper.testSort('Heap Sort Using Index-Min-Heap', heapSortIMinH, arr2);


// let iMaxheap = new IndexMaxHeap(100);

// for (let i = 0; i < 40; i++) {
//   iMaxheap.insert(i, Math.floor(Math.random() * 100));
// }
// helper.print(iMaxheap);
// while (!iMaxheap.isEmpty()) {
//   process.stdout.write(`${iMaxheap.extractMaxIndex()} `);
// }
// process.stdout.write(`\n`);
// helper.print(iMaxheap);

// console.info('');

let iMinheap = new IndexMinHeap(100);
for (let i = 0; i < 40; i++) {
  iMinheap.insert(i, Math.floor(Math.random() * 100));
}
helper.print(iMinheap);
while (!iMinheap.isEmpty()) {
  process.stdout.write(`${iMinheap.extractMinIndex()} `);
}
process.stdout.write(`\n`);
helper.print(iMinheap);
