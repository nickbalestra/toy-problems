var test = require('tape');
var file = require('../src/codility/counting-elements/frogRiverOne.js');

test('frogRiverOne', function(t) { 
  t.plan(7);
  t.deepEqual(6, file.frogRiverOne(5, [ 1, 3, 1, 4, 2, 3, 5, 4 ]), 'example test');
  t.deepEqual(4, file.frogRiverOne(3, [ 1, 3, 1, 3, 2, 1, 3 ]), 'simple test');
  t.deepEqual(0, file.frogRiverOne(1, [1]), 'single element');
  t.deepEqual(-1, file.frogRiverOne(5, [3]), 'single element');
  t.deepEqual(-1, file.frogRiverOne(5, [ 1, 2, 3, 5, 3, 1 ]), 'frog never across the river');
  t.deepEqual(-1, file.frogRiverOne(2, [ 1, 1, 1, 1 ]), 'frog never across the river');
  t.deepEqual(-1, file.frogRiverOne(2, [ 2, 2, 2, 2, 2 ]), 'frog never across the river');
});
