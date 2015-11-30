var test = require('tape');
var file = require('../src/various/binarySearchArray/binarySearchArray.js');

test('binarySearch', function(t) { 
  t.plan(2);
  t.equal(3, file.binarySearch([1, 2, 3, 4, 5], 4), 'find the index of an element');
  t.equal(-1, file.binarySearch([1, 2, 3, 4, 5], 6), 'find the index of an element');
});
