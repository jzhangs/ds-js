'user strict';

const helper = require('./sort_helper');

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

const a = helper.generateRandomArray(5000, 0, 10000);
helper.testSort('Selection Sort', selectionSort, a);
