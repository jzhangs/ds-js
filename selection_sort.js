'use strict';

function selectionSort(arr, n) {
  n = n || arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex] ) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

function selectionSortOpt(arr, n) {
  n = n || arr.length;
  let left = 0, right = n - 1;
  while (left < right) {
    let minIndex = left;
    let maxIndex = right;
    if (arr[minIndex] > arr[maxIndex]) {
      [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
    }

    for (let i = left; i <= right; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }

    [arr[left], arr[minIndex]] = [arr[minIndex], arr[left]];
    [arr[right], arr[maxIndex]] = [arr[maxIndex], arr[right]];
    left++;
    right--;
  }
}

// module.exports = {
//   opt: selectionSortOpt,
//   noOpt: selectionSort
// };

module.exports = selectionSortOpt;
