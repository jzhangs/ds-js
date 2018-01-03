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

  static firstGreaterOrEqual(...args) {
    this.lowerBound(...args);
  }

  static firstGreaterThan(...args) {
    this.upperBound(...args);
  }

  static lastLessOrEqual(arr, target) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      if (arr[i] > target) {
        return i - 1;
      }
    }
    return n - 1;
  }

  static lastLessThan(arr, target) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      if (arr[i] >= target) {
        return i - 1;
      }
    }
    return n - 1;
  }
}

module.exports = LinearSearch;
