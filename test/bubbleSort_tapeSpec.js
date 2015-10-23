var test = require('tape');
var file = require('../src/bubbleSort/bubbleSort.js');

test('bubbleSort', function(t) { 
  t.plan(2);
  t.deepEqual([1,2,3], file.bubbleSort([2,1,3]), 'returns a sorted array');
  t.deepEqual([1,2,3,4,4,6,7,10], file.bubbleSort([6,7,4,3,10,1,2,4]), 'returns a sorted array');
});
