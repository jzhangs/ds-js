'use strict';

const { _swap } = require('../util');

function bubbleSort1(arr, n) {
  n = n || arr.length;
  let swapped = true;

  for (let i = 0; i < n && swapped; i++) {
    swapped = false;
    for (let j = n - 1; j > i; j--) {
      if (arr[j - 1] > arr[j]) {
        // [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        _swap(arr, j - 1, j);
        swapped = true;
      }
    }
  }

  // n = n || arr.length;
  // let swapped = true;

  // for (let i = 0; i < n && swapped; i++) {
  //   swapped = false;
  //   for (let j = 1; j < n - i; j++) {
  //     if (arr[j - 1] > arr[j]) {
  //       [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
  //       swapped = true;
  //     }
  //   }
  // }
}

function bubbleSort1Opt(arr, n) {
  n = n || arr.length;
  let newn = n;

  for (; newn > 0;) {
    newn = 0;
    for (let j = 1; j < n; j++) {
      if (arr[j - 1] > arr[j]) {
        // [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        _swap(arr, j - 1, j);
        newn = j;
      }
    }
    n = newn;
  }
}

// /* do while version, all the same */
function bubbleSort2(arr, n) {
  n = n || arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        // [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        _swap(arr, i - 1, i);
        swapped = true;
      }
    }
    n--;
  } while (swapped);
}

function bubbleSort(arr, n) {
  n = n || arr.length;
  let newn;  // use newn as flag to skip looping sorted items at bottom

  do {
    newn = 0;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        // [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        _swap(arr, i - 1, i);
        newn = i;
      }
    }
    n = newn;
  } while (newn > 0);
}

module.exports = bubbleSort;
