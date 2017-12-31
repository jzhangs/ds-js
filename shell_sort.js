'use strict';

function shellSort(arr, n) {
  n = n || arr.length;

  let h = 1;
  while (h < n / 3) {
    h = h * 3 + 1;
  }

  while (h >= 1) {
    for (let i = h; i < n; i++) {
      const e = arr[i];
      let j;
      for (j = i; j > h - 1 && arr[j - h] > e; j-= h) {
        arr[j] = arr[j - h];
      }
      arr[j] = e;
    }
    h = (h - 1) / 3;
  }
}

module.exports = shellSort;
