var test = require('tape');
var file = require('../src/various/flattenArray/flattenArray.js');

test('flattenArray', function(t) { 
  t.plan(1);
  t.deepEqual([0,1,2,3,4,5,6,7,8,9,10], file.flattenArray([[0, 1], [2, 3], [4, 5, [6, 7, [8, [9, 10]]]]]), 'return an array with no nested arrays');
});
