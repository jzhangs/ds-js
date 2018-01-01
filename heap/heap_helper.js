'use strict';

const assert = require('assert');

const HeapHelper = function () { };

HeapHelper.prototype = {
  print(heap) {
    if (heap.size() >= 64) {
      console.info("Only work for less than 64 ints."); // floats look ugly
    }

    let n = heap.size();

    console.info(`Max heap size is: ${heap.capacity}, current items: ${n}.`);

    if (n <= 0) {
      return;
    }
    console.info(`Data in the heap: ${(heap.data.slice(1, n + 1)).join(' ')}`);
    console.info('Heap tree:\n');

    let level = 0;
    let num = 1;  // number per level;
    let count = n;
    while (count > 0) {
      level += 1;
      count -= num;
      num *= 2;
    }

    const maxWidth  = 2 ** (level - 1);
    let lineLength = maxWidth * 3 - 1;
    let idx = 1;
    let width = lineLength;

    const pad = ' ';

    for (let l = 0; l < level; l++) {
      // print number lines.
      let line = pad.repeat(lineLength);
      let lineBranch = pad.repeat(lineLength);
      let itemLen = Math.min(n - 2 ** l + 1, 2 ** l);
      let offset = 0;
      for (let i = 0; i < itemLen; i++) {
        let num = heap.data[idx++];
        offset = i * (width + 1) + Math.floor((width  - 1 )/2);
        num = `${num > 9 ? '' : pad}${num}`;
        // need a better solution
        line = `${line.slice(0, offset)}${num}${line.slice(offset)}`;

        // get branch lines according to num offset
        if (l !== 0) {
          let padding = Math.floor(width / 4);
          i % 2 ? offset -= padding : offset += padding + 1;
          lineBranch = `${lineBranch.slice(0, offset)}${i % 2 ? '\\' : '/'}${lineBranch.slice(offset)}`;
        }
      }
      if (l !== 0) {
        console.info(lineBranch.substr(0, lineLength));
      }
      console.info(line.substr(0, lineLength));
      width = Math.floor(width / 2);
    }
    console.info(''); // extra blank line to make it prettier
  }
}

module.exports = new HeapHelper();
