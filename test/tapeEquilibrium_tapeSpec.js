var test = require('tape');
var file = require('../src/codility/time-complexity/tapeEquilibrium.js');

test('tapeEquilibrium', function(t) { 
  t.plan(5);
  t.equal(1, file.tapeEquilibrium([3,1,2,4,3]), 'example test');
  t.equal(2000, file.tapeEquilibrium([ -1000, 1000 ]), 'two elements');
  t.equal(0, file.tapeEquilibrium([ 1, 1 ]), 'two elements');
  t.equal(4, file.tapeEquilibrium([ 5, 6, 2, 4, 1 ]), 'simple test with positive numbers, length = 5');
  t.equal(3, file.tapeEquilibrium([ -10, -5, -3, -4, -5 ]), 'simple test with negative numbers, length = 5');
});
