var test = require('tape');
var file = require('../src/codility/prefix-sums/minAvgTwoSlice.js');

test('minAvgTwoSlice', function(t) { 
  t.plan(8);
  t.equal(1, file.minAvgTwoSlice([ 4, 2, 2, 5, 1, 5, 8 ]), 'example test');
  t.equal(0, file.minAvgTwoSlice([ -10000, -10000 ]), 'two or four elements');
  t.equal(0, file.minAvgTwoSlice([ 10000, -10000 ]), 'two or four elements');
  t.equal(0, file.minAvgTwoSlice([ 10000, -10000 ]), 'two or four elements');
  t.equal(1, file.minAvgTwoSlice([ 10000, -10000, -10000, 10000 ]), 'two or four elements');
  t.equal(2, file.minAvgTwoSlice([ 5, 6, 3, 4, 9 ]), 'simple test, the best slice has length 3');
  t.equal(5, file.minAvgTwoSlice([ 10, 10, -1, 2, 4, -1, 2, -1 ]), 'simple test, the best slice has length 3');
  t.equal(2, file.minAvgTwoSlice([ -3, -5, -8, -4, -10 ]), 'simple test, the best slice has length 3');
});
