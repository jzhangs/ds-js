'use strict';

const assert = require('assert');
const { _swap } = require('../util');

class MinHeap {
  constructor(n) {
    if (typeof n === 'number') {
      this.capacity = n;
      this.count = 0;
      this.data = new Array(n + 1);
    } else if (Array.isArray(n)) {
      this.capacity = n.length;
      this.count = this.capacity;
      this.data = [0, ...n];
      // heapify
      for (let i = Math.floor(this.count / 2); i >= 1; i--) {
        this._shiftDown(i);
      }
    }
  }

  _shiftUp(k) {
    const { data } = this;
    while (k > 1) {
      let p = Math.floor(k / 2);
      if (data[p] <= data[k]) {
        break;
      }
      _swap(data, p, k);
      k = p;
    }
  }

  _shiftDown(k) {
    const { count, data } = this;
    while (k * 2 <= count) {
      let j = k * 2;
      if (j + 1 <= count && data[j + 1] < data[j]) {
        j += 1;
      }
      if (data[k] <= data[j]) {
        break;
      }
      _swap(data, k, j);
      k = j;
    }
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  insert(item) {
    assert(this.count + 1 <= this.capacity);
    this.data[++this.count] = item;
    this._shiftUp(this.count);
  }

  extractMin() {
    assert(this.count > 0);
    let ret = this.data[1];
    _swap(this.data, 1, this.count--);
    this._shiftDown(1);
    return ret;
  }
}

module.exports = { MinHeap };
