var test = require('tape');
var file = require('../src/codility/counting-elements/permCheck.js');

test('permCheck', function(t) { 
  t.plan(13);
  t.equal(1, file.permCheck([ 4, 1, 3, 2 ]), 'first example test');
  t.equal(0, file.permCheck([ 4, 1, 3 ]), ' second example test');
  t.deepEqual(0, file.permCheck([ 1000000000 ]), 'single element with maximal value');
  t.equal(1, file.permCheck([ 1 ]), 'single element with minimal value');
  t.equal(0, file.permCheck([ 2 ]), 'single element');
  t.equal(1, file.permCheck([ 1, 2 ]), 'two elements');
  t.equal(0, file.permCheck([ 3, 1 ]), 'two elements');
  t.equal(0, file.permCheck([ 3, 2 ]), 'two elements');
  t.equal(0, file.permCheck([ 1, 1 ]), 'two elements');
  t.equal(0, file.permCheck([ 1, 4, 1 ]), 'total sum is correct, but it is not a permutation, N <= 10');
  t.equal(0, file.permCheck([ 2, 2, 2 ]), 'total sum is correct, but it is not a permutation, N <= 10');
  t.equal(0, file.permCheck([ 9, 5, 7, 3, 2, 7, 3, 1, 10, 8 ]), 'total sum is correct, but it is not a permutation, N <= 10');
  t.equal(1, file.permCheck([ 3, 2, 1 ]), 'total sum is correct, but it is not a permutation, N <= 10');
});
