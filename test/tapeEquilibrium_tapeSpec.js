var test = require('tape');
var file = require('../src/codility/time-complexity/tapeEquilibrium.js');

test('commonCharacters', function(t) { 
  t.plan(5);
  t.deepEqual(1, file.tapeEquilibrium([3,1,2,4,3]), 'example test');
  t.deepEqual(2000, file.tapeEquilibrium([ -1000, 1000 ]), 'two elements');
  t.deepEqual(0, file.tapeEquilibrium([ 1, 1 ]), 'two elements');
  t.deepEqual(4, file.tapeEquilibrium([ 5, 6, 2, 4, 1 ]), 'simple test with positive numbers, length = 5');
  t.deepEqual(3, file.tapeEquilibrium([ -10, -5, -3, -4, -5 ]), 'simple test with negative numbers, length = 5');
});
