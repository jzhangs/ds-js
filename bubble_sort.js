'use strict';

function bubbleSort(arr, n) {
  n = n || arr.length;
  let swap = true;

  for (let i = 0; i < n && swap; i++) {
    swap = false;
    for (let j = n - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        swap = true;
      }
    }
  }
}

function bubbleSortNoOpt(arr, n) {
  n = n || arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
}

module.exports = {
  opt: bubbleSort,
  noOpt: bubbleSortNoOpt
};
