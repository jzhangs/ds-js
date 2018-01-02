'use strict';

const { binarySearch, binarySearchRecur } = require('./binary_search');
const helper = require('./tree_helper');
const BST = require('./bst');
const SST = require('./sst');

// const n = 1000000;

// let arr1 = helper.generateOrderArray(n);
// let arr2 = [...arr1];
// helper.testSearch('Binary Search          ', binarySearch, arr1);
// helper.testSearch('Binary Search Recursion', binarySearchRecur, arr2);

// const file = './assets/bible.txt';
// const word = 'god';
// let words = helper.generateWordsArrayFrom(file);
// console.info(`There are ${words.length} words in ${file.match(/[^\\/]+$/)[0]}.`);
// helper.testTreeSearch('BST', BST, words, word);
// helper.testTreeSearch('SST', SST, words, word);

helper.testTraverse('BST', BST);
