'use strict';

function insertionSort(arr, n) {
  n = n || arr.length;
  for (let i = 1; i < n; i++) {
    // for (let j = i; j > 0; j--) {
    //   if (arr[j] < arr[j-1]) {
    //     [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
    //   } else {
    //     break;
    //   }
    // }

    // Insertion Sort: 10000 items sorted in 770.865453004837 ms.
    // Selection Sort: 10000 items sorted in 83.26399698853493 ms.
    // for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
    //   [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    // }

    // optimized:
    // Insertion Sort: 10000 items sorted in 32.6258700042963 ms.
    // Selection Sort: 10000 items sorted in 83.35745200514793 ms.
    // nearly ordered:
    // Insertion Sort: 10000 items sorted in 5.26622699201107 ms.
    // Selection Sort: 10000 items sorted in 88.79796800017357 ms.
    const e = arr[i];
    let j;
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
}

function insertionSortLR(arr, l, r) {
  l = l || 0;
  r = r || arr.length - 1;
  for (let i = l + 1; i <= r; i++) {
    const e = arr[i];
    let j;
    for (j = i; j > l && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
}

module.exports = { insertionSort, insertionSortLR };
