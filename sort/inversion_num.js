'use strict';

function invNumBrute(arr, n) {
  n = n || arr.length;
  let ret = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      ret += (arr[i] > arr[j] ? 1 : 0);
    }
  }
  return ret;
}

function invNumMerge(arr, n) {
  n = n || arr.length;
  let ret = 0;

  function _merge(arr, l, mid, r) {
    let ret = 0;

    const aux = arr.slice(l, r + 1);
    let i = l, j = mid + 1;

    for (let k = l; k <= r; k++) {
      if (i > mid) {
        arr[k] = aux[j - l]; j++;
      } else if (j > r) {
        arr[k] = aux[i - l]; i++;
      } else if (aux[i - l] <= aux[j - l]) { // don't add count when numbers are same.
        arr[k] = aux[i - l]; i++;
      } else {
        arr[k] = aux[j - l]; j++; ret += (mid + 1 - i);
      }
    }
    return ret;
  }

  function _inversionCount(arr, l, r) {
    if (l < r) {
      let mid = Math.floor((l + r) / 2);
      _inversionCount(arr, l, mid);
      _inversionCount(arr, mid + 1, r);
      if (arr[mid] > arr[mid + 1]) {
        ret += _merge(arr, l, mid, r);
      }
    }
  }
  _inversionCount(arr, 0, n - 1);
  return ret;
}

const helper = require('./sort_helper');
const { _pref } = require('./util');

const n = 10000;
const swapTimes = 10;
let arr1 = helper.generateRandomArray(n, 0, n);
let arr2 = helper.generateNearlyOrderedArray(n, swapTimes);

function result(type, ret) {
  console.info(`Used: ${ret.time} ms to get ${ret.result} inversion pairs (${type}) `)
}

// n: 10000, swapTimes: 10
// Used: 188.28006798028946 ms to get 25122140 inversion pairs (brute)
// Used: 11.379546016454697 ms to get 25122140 inversion pairs (merge)
// Used: 67.7749910056591 ms to get 74094 inversion pairs (brute)
// Used: 3.781702995300293 ms to get 74094 inversion pairs (merge)

result('brute', _pref(invNumBrute, arr1));
result('merge', _pref(invNumMerge, arr1));

result('brute', _pref(invNumBrute, arr2));
result('merge', _pref(invNumMerge, arr2));
