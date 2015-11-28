var test = require('tape');
var file = require('../src/codility/time-complexity/permMissingElem.js');

test('permMissingElem', function(t) { 
  t.plan(11);
  t.deepEqual(4, file.permMissingElem([2, 3, 1, 5]), 'example test');
  t.deepEqual(1, file.permMissingElem([]), 'empty list');
  t.deepEqual(2, file.permMissingElem([1]), 'single element');
  t.deepEqual(6, file.permMissingElem([ 1, 2, 3, 4, 5 ]), 'first element is missing');
  t.deepEqual(1, file.permMissingElem([ 2, 3, 4, 5, 6 ]), 'last element is missing');
  t.deepEqual(2, file.permMissingElem([1]), 'single element');
  t.deepEqual(1, file.permMissingElem([2]), 'single element');
  t.deepEqual(3, file.permMissingElem([1, 2]), 'two elements');
  t.deepEqual(2, file.permMissingElem([3, 1]), 'two elements');
  t.deepEqual(1, file.permMissingElem([3, 2]), 'two elements');
  t.deepEqual(7, file.permMissingElem([ 4, 2, 3, 5, 1, 6, 8, 9 ]), 'simple test');
});
