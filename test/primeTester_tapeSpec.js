var test = require('tape');
var file = require('../src/various/primeTester/primeTester.js');

test('primeTester', function(t) { 
  t.plan(4);
  t.equal(false, file.primeTester(1), 'should return false for non-primes');
  t.equal(false, file.primeTester(91), 'should return false for non-primes');
  t.equal(false, file.primeTester(239812076741689), 'should return false for non-primes');
  t.equal(true, file.primeTester(2), 'should return true for primes');
});
