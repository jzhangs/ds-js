'use strict';

const assert = require('assert');
const { _swap } = require('../util');

class MaxHeap {
  constructor(capacity) {
    this.data = new Array(capacity + 1);
    this.count = 0;
    this.capacity = capacity;
  }

  _shiftUp(k) {
    while (k > 1) {
      let p = Math.floor(k / 2);
      if (this.data[p] >= this.data[k]) {
        break;
      }
      _swap(this.data, p, k);
      k = p;
    }
  }

  _shiftDown(k) {
    const { count, data } = this;
    while ( k * 2 <= count) {
      let j = k * 2;
      if (j + 1 <= count && data[j+1] > data[j]) {
        j += 1;
      }
      if (data[k] >= data[j]) {
        break;
      }
      // TODO, optimize this using assignment, not swap;
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

  extractMax() {
    assert(this.count > 0);
    let ret = this.data[1];
    _swap(this.data, 1, this.count--);
    this._shiftDown(1);
    return ret;
  }
}

module.exports = MaxHeap;
