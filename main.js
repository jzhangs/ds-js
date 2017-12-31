'use strict';

const selectionSort = require('./selection_sort');
const { insertionSort } = require('./insertion_sort');
const bubbleSort = require('./bubble_sort');
const shellSort = require('./shell_sort');
const { mergeSort, mergeSortBU } = require('./merge_sort');
const { quickSort, quickSort3Ways } = require('./quick_sort');
const helper = require('./sort_helper');

const n = 1000000;
let arr1 = helper.generateRandomArray(n, 0, n);
let arr2 = [...arr1];
let arr3 = [...arr1];
let arr4 = [...arr1];
let arr5 = [...arr1];
let arr6 = [...arr1];
let arr7 = [...arr1];

console.info(`Test for random array, size = ${n}, random range [0, ${n}]`);
// helper.testSort('Insertion Sort', insertionSort, arr1);
// helper.testSort('Selection Sort', selectionSort, arr2);
// helper.testSort('Bubble Sort', bubbleSort, arr3);
helper.testSort('Shell Sort', shellSort, arr4);
helper.testSort('Merge Sort', mergeSort, arr5);
helper.testSort('Quick Sort', quickSort, arr6);
helper.testSort('Quick Sort 3 Ways', quickSort3Ways, arr7);

arr1 = helper.generateRandomArray(n, 0, 10);
arr2 = [...arr1];
arr3 = [...arr1];
arr4 = [...arr1];
arr5 = [...arr1];
arr6 = [...arr1];
arr7 = [...arr1];

console.info(`\nTest for more ordered array, size = ${n}, random range [0, 10]`);
// helper.testSort('Insertion Sort', insertionSort, arr1);
// helper.testSort('Selection Sort', selectionSort, arr2);
// helper.testSort('Bubble Sort Opt', bubbleSort, arr3);
helper.testSort('Shell Sort', shellSort, arr4);
helper.testSort('Merge Sort', mergeSort, arr5);
helper.testSort('Quick Sort', quickSort, arr6);
helper.testSort('Quick Sort 3 Ways', quickSort3Ways, arr7);

const swapTimes = 100;
arr1 = helper.generateNearlyOrderedArray(n, swapTimes);
arr2 = [...arr1];
arr3 = [...arr1];
arr4 = [...arr1];
arr5 = [...arr1];
arr6 = [...arr1];
arr7 = [...arr1];

console.info(`\nTest for nearly ordered array, size = ${n}, swap times = ${swapTimes}`);
// helper.testSort('Insertion Sort', insertionSort, arr1);
// helper.testSort('Selection Sort', selectionSort, arr2);
// helper.testSort('Bubble Sort Opt', bubbleSort, arr3);
helper.testSort('Shell Sort', shellSort, arr4);
helper.testSort('Merge Sort', mergeSort, arr5);
helper.testSort('Quick Sort', quickSort, arr6);
helper.testSort('Quick Sort 3 Ways', quickSort3Ways, arr7);

