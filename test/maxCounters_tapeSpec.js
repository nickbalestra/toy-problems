var test = require('tape');
var file = require('../src/codility/counting-elements/maxCounters.js');

test('maxCounters', function(t) { 
  t.plan(4);
  t.deepEqual([3,2,2,4,2], file.maxCounters(5, [ 3, 4, 4, 6, 1, 4, 4 ]), 'first example test');
  t.deepEqual([0,0,0,0,0], file.maxCounters(5, [ 6, 6, 6, 6, 6, 6 ]), 'all max_counter operations');
  t.deepEqual([3], file.maxCounters(1, [ 2, 1, 1, 2, 1 ]), 'only one counter');
  t.deepEqual([1], file.maxCounters(1, [ 1 ]), 'only one counter');
});
