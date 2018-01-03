'use strict';

const helper = require('./uf_helper');
const UF1 = require('./quick_find');
const UF2 = require('./quick_union');
const UF3 = require('./quick_union_sz');
const UF4 = require('./quick_union_rank');
const UF5 = require('./quick_union_pc');
const UF6 = require('./quick_union_pc2');


const n = 1000000;
// helper.testUnionFind('Quick Find      ', UF1.UnionFind, n);
// helper.testUnionFind('Quick Union     ', UF2.UnionFind, n);
// helper.testUnionFind('Quick Union SZ    ', UF3.UnionFind, n);
// helper.testUnionFind('Quick Union Rank  ', UF4.UnionFind, n);
// helper.testUnionFind('Quick Union PC    ', UF5.UnionFind, n);
// helper.testUnionFind('Quick Union PC Rcr', UF6.UnionFind, n);

const unionArr = helper.generatePairArray(n);
const connectArr = helper.generatePairArray(n);

helper.testUnionFindSameArray('Quick Union SZ    ', UF3.UnionFind, unionArr, connectArr);
helper.testUnionFindSameArray('Quick Union Rank  ', UF4.UnionFind, unionArr, connectArr);
helper.testUnionFindSameArray('Quick Union PC    ', UF5.UnionFind, unionArr, connectArr);
helper.testUnionFindSameArray('Quick Union PC Rcr', UF6.UnionFind, unionArr, connectArr);



