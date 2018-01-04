'use strict';

const assert = require('assert');

class Edge {
  constructor(a, b, weight) {
    this.a = a;
    this.b = b;
    this.weight = weight;
  }

  v() {
    return this.a;
  }

  w() {
    return this.b;
  }

  wt() {
    return this.weight;
  }

  other(x) {
    assert(x === this.a || x === this.b);
    return x === this.a ? this.b : this.a;
  }

  valueOf() {
    return this.weight;
  }

  toString() {
    return `${this.a}-${this.b}: ${this.weight}`;
  }
}

module.exports = Edge;
