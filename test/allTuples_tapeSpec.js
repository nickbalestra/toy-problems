var test = require('tape');
var file = require('../src/various/allTuples/allTuples.js');

test('allTuples', function(t) { 
  t.plan(3);
  t.deepEqual([[1,3]], file.allTuples([1,2,3], 4), 'retur all tuples that sum up to target');
  t.deepEqual([[2,3]], file.allTuples([1,2,3], 5), 'retur all tuples that sum up to target');
  t.deepEqual(undefined, file.allTuples([1,2,3], 2), 'retur all tuples that sum up to target');
});
