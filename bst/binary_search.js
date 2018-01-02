'use strict';

function binarySearch(arr, target) {
  let n = arr.length;
  let l = 0, r = n - 1;
  while (l <= r) {
    // c int overflow.
    // int mid = (l + r) / 2 => int mid = l + (r - l) /2
    // let mid = Math.floor((l+r)/2);
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (target < arr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

function binarySearchRecur(arr, target) {
  let n = arr.length;

  function _binarySearchRecur(arr, l, r) {
    if (l > r) {
      return -1;
    }
    let mid = l + Math.floor((r - l) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      return _binarySearchRecur(arr, l, mid - 1);
    } else {
      return _binarySearchRecur(arr, mid + 1, r);
    }
  }
  return _binarySearchRecur(arr, 0, n - 1);
}

module.exports = { binarySearch, binarySearchRecur }
