'use strict';

class LinearSearch {
  static lowerBound(arr, target) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      if (arr[i] >= target) {
        return i;
      }
    }
    return n;
  }
  
  static upperBound(arr, target) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      if (arr[i] > target) {
        return i;
      }
    }
    return n;
  }
}

module.exports = LinearSearch;
