'use strict';

const selectionSort = require('./selection_sort');
const insertionSort = require('./insertion_sort');
const bubbleSort = require('./bubble_sort');
const helper = require('./sort_helper');

// const a = helper.generateRandomArray(10000, 0, 10000)
const a = helper.generateNearlyOrderedArray(10000, 10);
// const a = helper.generateNearlyOrderedArray(10000, 0, true);
const b = [...a];
const c = [...a];
const d = [...a];
// console.log(c.toString());

helper.testSort('Insertion Sort', insertionSort, a);
helper.testSort('Selection Sort', selectionSort, b);
helper.testSort('Bubble Sort Opt', bubbleSort.opt, c);
helper.testSort('Bubble Sort Not Opt', bubbleSort.noOpt, d);
