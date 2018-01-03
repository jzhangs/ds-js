'use strict';

const assert = require('assert');

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

function floor(arr, target) {
  let n = arr.length;
  let l = -1, r = n - 1;
  while (l < r) {
    // Math.ceil here to avoid endless looping
    let mid = l + Math.ceil((r - l) / 2);
    if (arr[mid] >= target) {
      r = mid - 1;
    } else {
      l = mid;
    }
  }

  assert(l === r);
  if (l + 1 < n && arr[l + 1] === target) {
    return l + 1;
  }
  return l;
}

function ceil(arr, target) {
  let n = arr.length;
  let l = 0, r = n;
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  assert(l === r);

  if (l - 1 >= 0 && arr[l - 1] === target) {
    return l - 1;
  }
  return l;
}
module.exports = { binarySearch, binarySearchRecur, floor, ceil }
