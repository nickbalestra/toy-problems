var test = require('tape');
var file = require('../src/codility/counting-elements/missingInteger.js');

test('missingInteger', function(t) { 
  t.plan(6);
  t.equal(5, file.missingInteger([ 1, 3, 6, 4, 1, 2 ]), 'first example test');
  t.equal(2, file.missingInteger([ 1 ]), 'a single element');
  t.equal(1, file.missingInteger([ 0 ]), 'a single element');
  t.equal(1, file.missingInteger([ -1 ]), 'a single element');
  t.equal(1, file.missingInteger([ 4, 5, 6, 2 ]), 'simple test');
  t.equal(3, file.missingInteger([ 4, 1, 5, 6, 2 ]), 'simple test');
});
