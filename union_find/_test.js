'use strict';

const helper = require('./uf_helper');
const UF1 = require('./quick_find');
const UF2 = require('./quick_union');
const UF3 = require('./quick_union_sz');
const UF4 = require('./quick_union_rank');
const UF5 = require('./quick_union_pc');
const UF6 = require('./quick_union_pc2');


let n = 1000000;
// helper.testUnionFind('Quick Find      ', UF1.UnionFind, n);
// helper.testUnionFind('Quick Union     ', UF2.UnionFind, n);
// helper.testUnionFind('Quick Union SZ    ', UF3.UnionFind, n);
// helper.testUnionFind('Quick Union Rank  ', UF4.UnionFind, n);
// helper.testUnionFind('Quick Union PC    ', UF5.UnionFind, n);
// helper.testUnionFind('Quick Union PC Rcr', UF6.UnionFind, n);

// const unionArr = helper.generatePairArray(n);
// const connectArr = helper.generatePairArray(n);

// helper.testUnionFindSameArray('Quick Union SZ    ', UF3.UnionFind, unionArr, connectArr);
// helper.testUnionFindSameArray('Quick Union Rank  ', UF4.UnionFind, unionArr, connectArr);
// helper.testUnionFindSameArray('Quick Union PC    ', UF5.UnionFind, unionArr, connectArr);
// helper.testUnionFindSameArray('Quick Union PC Rcr', UF6.UnionFind, unionArr, connectArr);

// test path compressions
n = 10;
let uf5 = new UF5.UnionFind(n);
let uf6 = new UF6.UnionFind(n);
for (let i = 1; i < n; i++) {
  uf5.parent[i] = i -1;
  uf6.parent[i] = i - 1;
}
uf5.find(n-1);
uf6.find(n-1);

console.info('UF implements Path Compression by iteration:');
uf5.show();
console.info('UF implements Path Compression by recursion:');
uf6.show();
