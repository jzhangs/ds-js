'use strict';

const { binarySearch, binarySearchRecur } = require('./binary_search');
const helper = require('./search_helper');

const n = 1000000;

let arr1 = helper.generateOrderArray(n);
let arr2 = [...arr1];
helper.testSearch('Binary Search          ', binarySearch, arr1);
helper.testSearch('Binary Search Recursion', binarySearchRecur, arr2);
