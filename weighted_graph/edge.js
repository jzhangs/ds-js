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
    assert(x === a || x === b);
    return x === a ? b : a;
  }
}

module.exports = Edge;
