var test = require('tape');
var file = require('../src/hr/nthFibonacci/nthFibonacci.js');

test('nthFibonacci', function(t) { 
  t.plan(3);
  t.deepEqual(1, file.nthFibonacci(2), 'returns the nth Fibonacci number');
  t.deepEqual(2, file.nthFibonacci(3), 'returns the nth Fibonacci number');
  t.deepEqual(5, file.nthFibonacci(5), 'returns the nth Fibonacci number');
});
