var test = require('tape');
var file = require('../src/codility/time-complexity/frogJmp.js');

test('frogJmp', function(t) { 
  t.plan(6);
  t.equal(3, file.frogJmp(10, 85, 30), 'example test');
  t.equal(34, file.frogJmp(5, 105, 3), 'two elements');
  t.equal(3, file.frogJmp(2, 11, 3), 'two elements');
  t.equal(0, file.frogJmp(1, 1, 3), 'no jump needed');
  t.equal(0, file.frogJmp(1000000000, 1000000000, 1), 'no jump needed');
  t.equal(0, file.frogJmp(1999999999, 1000000000, 1000000000), 'one big jump');
});
