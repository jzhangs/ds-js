'use strict';

const assert = require('assert');
const BinarySearch = require('./binary_search');
const LinearSearch = require('./linear_search');
const helper = require('./tree_helper');
const BST = require('./bst');
const SST = require('./sst');

// const n = 1000000;

// let arr1 = helper.generateOrderArray(n);
// let arr2 = [...arr1];
// helper.testSearch('Binary Search          ', BinarySearch.search, arr1);
// helper.testSearch('Binary Search Recursion', BinarySearch.searchRecur, arr2);

// const file = './assets/bible.txt';
// const word = 'god';
// let words = helper.generateWordsArrayFrom(file);
// console.info(`There are ${words.length} words in ${file.match(/[^\\/]+$/)[0]}.`);
// helper.testTreeSearch('BST', BST, words, word);
// helper.testTreeSearch('SST', SST, words, word);

// let t;
// t = helper.generateTree(BST, 10, 100);
// helper.testTraverse(t);

// t = helper.generateTree(BST, 100);
// helper.testRemoveMin(t);

// t = helper.generateTree(BST, 100);
// helper.testRemoveMax(t);

// const n = 10000;
// const order = helper.generateRandomOrder(n);
// t = helper.generateTree(BST, n);
// // t.preOrder((v) => { process.stdout.write(`${v} `) });
// // t.inOrder((v) => { process.stdout.write(`${v} `) });
// helper.testRemove(t, order);

// const file = './assets/communist.txt';
// const word = 'unite';
// let words = helper.generateWordsArrayFrom(file);
// console.info(`There are ${words.length} words in ${file.match(/[^\\/]+$/)[0]}.`);
// helper.testTreeSearch('BST', BST, words, word);
// helper.testTreeSearch('SST', SST, words, word);
// words = words.sort();
// helper.testTreeSearch('BST2', BST, words, word);

// const a = [1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 5, 5, 5, 6, 6, 6];
// for (let i = 0; i < 8; i++) {
//   const floorIndex = BinarySearch.floor(a, i);
//   process.stdout.write(`Floor index of ${i} is ${floorIndex},`)
//   if (floorIndex >= 0 && floorIndex < a.length) {
//     process.stdout.write(` value: ${a[floorIndex]}.`);
//   }
//   console.info('');

//   const ceilIndex = BinarySearch.ceil(a, i);
//   process.stdout.write(`Ceil index of ${i} is ${ceilIndex},`)
//   if (ceilIndex >= 0 && ceilIndex < a.length) {
//     process.stdout.write(` value: ${a[ceilIndex]}.`);
//   }
//   console.info('\n');
// }

// const n = 1000;
// const m = 100;
// let arr = helper.generateRandomOrderedArray(n, 0, m);

// console.info(arr.toString());
// for (let i = -1; i <= m + 1; i++) {
//   assert(BinarySearch.lowerBound(arr, i) ===
//     LinearSearch.lowerBound(arr, i));
//   assert(BinarySearch.upperBound(arr, i) ===
//     LinearSearch.upperBound(arr, i));
// }
// console.info('test completed:)');

// console.info(arr.toString());
// for (let i = -1; i <= m + 1; i++) {
//   assert(BinarySearch.firstGreaterOrEqual(arr, i) ===
//     LinearSearch.firstGreaterOrEqual(arr, i));
//   assert(BinarySearch.firstGreaterThan(arr, i) ===
//     LinearSearch.firstGreaterThan(arr, i));
//   assert(BinarySearch.lastLessOrEqual(arr, i) ===
//     LinearSearch.lastLessOrEqual(arr, i));
//   assert(BinarySearch.lastLessThan(arr, i) ===
//     LinearSearch.lastLessThan(arr, i));
// }
// console.info('test completed:)');

// const N = 1000;
// const min = 0, max = N - 2;
// let t = helper.generateTreeWithEvenNumbers(BST, N);

// for (let i = 0; i <= N; i++) {
//   const floorKey = t.floor(i);
//   if (i % 2 === 0) {
//     if (i >= 0 && i < N) {
//       assert(floorKey === i);
//     } else if (i < 0) {
//       assert(floorKey === null);
//     } else {
//       assert(floorKey === max);
//     }
//   } else {
//     if (i - 1 >= 0 && i - 1 < N) {
//       assert(floorKey === i - 1);
//     } else if (i - 1 < 0) {
//       assert(floorKey === null);
//     } else {
//       assert(floorKey === max);
//     }
//   }
//   console.info(`The floor of ${i} is ${floorKey}.`)

//   const ceilKey = t.ceil(i);
//   if (i % 2 === 0) {
//     if (i >= 0 && i < N) {
//       assert(ceilKey === i);
//     } else if (i < 0) {
//       assert(ceilKey === min);
//     } else {
//       assert(ceilKey === null);
//     }
//   } else {
//     if (i + 1 >= 0 && i + 1 < N) {
//       assert(ceilKey === i + 1);
//     } else if (i + 1 < 0) {
//       assert(ceilKey === min);
//     } else {
//       assert(ceilKey === null);
//     }
//   }
//   console.info(`The ceil of ${i} is ${ceilKey}.`)
// }

const N = 1000;
const arr = helper.generateRandomOrder(N);
let t = new BST();
for (let i = 0; i < arr.length; i++) {
  t.insert(arr[i], arr[i]);
}

// t.preOrder((v) => { process.stdout.write(`${v} `) });
// console.info('');
// t.inOrder((v) => { process.stdout.write(`${v} `) });
// console.info('');

for (let i = 0; i< arr.length; i++) {
  if (i === 0) {
    assert(t.predecessor(i) === null);
    console.info(`The predecessor of 0 is NULL.`);
  } else {
    // console.info(t.predecessor(i));
    assert(t.predecessor(i) === i - 1);
    console.info(`The predecessor of ${i} is ${i-1}.`);
  }
}

for (let i = 0; i< arr.length; i++) {
  if (i === N - 1) {
    assert(t.successor(i) === null);
    console.info(`The successor of ${i} is NULL.`);
  } else {
    assert(t.successor(i) === i + 1);
    console.info(`The successor of  ${i} is ${i+1}.`);
  }
}
