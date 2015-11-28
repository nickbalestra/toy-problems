var test = require('tape');
var file = require('../src/codility/prefix-sums/passingCars.js');

test('passingCars', function(t) { 
  t.plan(8);
  t.equal(5, file.passingCars([ 0, 1, 0, 1, 1 ]), 'first example test');
  t.equal(0, file.passingCars([0]), 'single element');
  t.equal(0, file.passingCars([1]), 'single element');
  t.equal(0, file.passingCars([1,0]), 'two elements');
  t.equal(0, file.passingCars([0,0]), 'two elements');
  t.equal(1, file.passingCars([0,1]), 'two elements');
  t.equal(0, file.passingCars([1,1]), 'two elements');
  t.equal(6, file.passingCars([ 0, 1, 0, 1, 0, 1 ]), 'simple test');
});
