'use strict';

const selectionSort = require('./selection_sort');
const insertionSort = require('./insertion_sort');
const helper = require('./sort_helper');

// const a = helper.generateRandomArray(10000, 0, 10000)
const a = helper.generateNearlyOrderedArray(10000, 10);
const b = [...a];

helper.testSort('Insertion Sort', insertionSort, b);
helper.testSort('Selection Sort', selectionSort, a);
