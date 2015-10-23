var test = require('tape');
var file = require('../src/hr/largestProductOfThree/largestProductOfThree.js');

test('largestProductOfThree', function(t) { 
  t.plan(1);
  t.deepEqual(42, file.largestProductOfThree([2,1,3,7]), 'largest possible product of any 3 numbers');
});
