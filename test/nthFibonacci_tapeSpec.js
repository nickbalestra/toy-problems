var test = require('tape');
var file = require('../src/various/nthFibonacci/nthFibonacci.js');

test('nthFibonacci', function(t) { 
  t.plan(3);
  t.equal(1, file.nthFibonacci(2), 'returns the nth Fibonacci number');
  t.equal(2, file.nthFibonacci(3), 'returns the nth Fibonacci number');
  t.equal(5, file.nthFibonacci(5), 'returns the nth Fibonacci number');
});
