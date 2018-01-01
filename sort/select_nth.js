const { quickSort } = require('./quick_sort');
const { _swap } = require('../util');

function selectNthSort(arr, nth) {
  quickSort(arr);
  return arr[nth-1];
}

function selectNthDivide(arr, nth) {
  let k = nth - 1;

  function _partition(arr, l, r) {
    _swap(arr, l, Math.floor(Math.random() * (r - l + 1)) + l);

    const v = arr[l];

    let j = l;
    for (let i = l + 1; i <=r; i++) {
      if (arr[i] < v) {
        _swap(arr, ++j, i);
      }
    }
    _swap(arr, l, j);
    return j;
  }

  function _select(arr, l, r) {
    let p = _partition(arr, l, r);
    if (p === k) {
      return arr[p];
    } else if (p < k) {
      return _select(arr, p + 1, r);
    } else {
      return _select(arr, l, p - 1);
    }
  }

  return _select(arr, 0, arr.length - 1);
}

const helper = require('./sort_helper');
const { _pref } = require('../util');

const n = 1000000;
let arr1 = helper.generateNearlyOrderedArray(n, 0);
helper.shuffleArr(arr1);
let arr2 = [...arr1];

const nth = n / 2;
console.info(`arr[${nth}]=${arr1[nth]}`);
function result(type, ret) {
  console.info(`Used: ${ret.time} ms to get ${nth}th min number: ${ret.result} (${type}) `)
}

result('divide/O(n)', _pref(selectNthDivide, arr1, nth));
result('sort/O(nlogn)', _pref(selectNthSort, arr2, nth));
