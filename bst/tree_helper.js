'use strict';

const assert = require('assert');
const fs = require('fs');
const { performance } = require('perf_hooks');
const { _swap } = require('../util');

const TreeHelper = function () { };

TreeHelper.prototype = {
  generateOrderArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  },

  generateWordsArrayFrom(file) {
    const words = [];
    const text = fs.readFileSync(file, 'utf8');
    text.split(/\r?\n/).forEach((line) => {
      let arr = line.match(/\w+/g);
      arr = arr ? arr.map(word => word.toLowerCase()) : [];
      words.push(...arr);
    });
    return words;
  },

  generateTree(Tree, n = 10, m) {
    m = m || n;
    const t = new Tree();
    for (let i = 0; i < n; i++) {
      let key = Math.floor(Math.random() * m);
      let value = key;
      t.insert(key, value);
    }
    return t;
  },

  generateRandomOrder(n) {
    function shuffle(arr, n) {
      n = n || arr.length;
      for (let i = n - 1; i >= 0; i--) {
        let x = Math.floor(Math.random() * (i + 1));
        _swap(arr, i, x);
      }
      return arr;
    }
    const order = [];
    for (let i = 0; i < n; i++) {
      order.push(i);
    }
    return shuffle(order);
  },

  generateRandomOrderedArray(n, l, r) {
    const arr = [];
    for (let i = 0; i < n; i++)
      arr.push(l + Math.floor(Math.random() * (r - l + 1)));
    arr.sort((a, b) => (a - b));
    return arr;
  },

  testSearch(searchName, search, arr) {
    const n = arr.length;
    const begin = performance.now();
    for (let i = 0, len = 2 * n; i < len; i++) {
      let v = search(arr, i);
      if (i < n) {
        assert(v === i);
      } else {
        assert(v === -1);
      }
    }
    const end = performance.now();
    console.info(`    ${searchName}: from ${n} items searched ${2 * n} items in ${end - begin} ms.`);
  },

  testTreeSearch(treeName, Tree, arr, key) {
    const begin = performance.now();

    const t = new Tree();
    for (let i = 0; i < arr.length; i++) {
      let node = t.search(arr[i]);
      if (node) {
        node.value++;
      } else {
        t.insert(arr[i], 1);
      }
    }
    if (t.contain(key)) {
      process.stdout.write(`    '${key}': ${t.search(key).value}`);
    } else {
      process.stdout.write(`no word "${key}"`);
    }
    const end = performance.now();
    console.info(`    ${treeName}, time: ${end - begin} ms.`);
  },

  testTraverse(t) {
    console.info(`size: ${t.size()}`);
    process.stdout.write('preOrder   : ');
    t.preOrder((v) => { process.stdout.write(`${v} `) });
    console.info('');

    process.stdout.write('inOrder    : ');
    t.inOrder((v) => { process.stdout.write(`${v} `) });
    console.info('');

    process.stdout.write('postOrder  : ');
    t.postOrder((v) => { process.stdout.write(`${v} `) });
    console.info('');

    process.stdout.write('levelOrder : ');
    t.levelOrder((v) => { process.stdout.write(`${v} `) });
    console.info('');
  },

  testRemoveMin(t) {
    console.info('Test removeMin:');
    while (!t.isEmpty()) {
      process.stdout.write(`min: ${t.min()} , `);
      t.removeMin();
      process.stdout.write(`after removeMin, size = ${t.size()}\n`);
    }
  },

  testRemoveMax(t) {
    console.info('Test removeMax:');
    while (!t.isEmpty()) {
      process.stdout.write(`max: ${t.max()} , `);
      t.removeMax();
      process.stdout.write(`after removeMax, size = ${t.size()}\n`);
    }
  },

  testRemove(t, order) {
    const n = order.length;
    for (let i = 0; i < n; i++) {
      if (t.contain(order[i])) {
        t.remove(order[i]);
        console.info(`\nAfter remove ${order[i]}, size = ${t.size()}.`);
      }
    }
    console.info(`End: ${t.size()}`);
  }
}

module.exports = new TreeHelper();
