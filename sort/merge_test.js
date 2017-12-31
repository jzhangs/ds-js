'use strict';

const { mergeSortNoOpt, mergeSort, mergeSort2, mergeSortBU, mergeSortBUOpt } = require('./merge_sort');
const helper = require('./sort_helper');

const n = 1000000;
let arr1 = helper.generateRandomArray(n, 0, n);
let arr2 = [...arr1];
let arr3 = [...arr1];
let arr4 = [...arr1];
let arr5 = [...arr1];

console.info(`Test for random array, size = ${n}, random range [0, ${n}]`);
helper.testSort('Merge Sort        ', mergeSortNoOpt, arr1);
helper.testSort('Merge Sort Opt    ', mergeSort, arr2);
helper.testSort('Merge Sort 2 Opt  ', mergeSort2, arr3);
helper.testSort('Merge Sort BU     ', mergeSortBU, arr4);
helper.testSort('Merge Sort BU Opt ', mergeSortBUOpt, arr5);
