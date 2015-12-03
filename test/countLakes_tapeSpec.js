var test = require('tape');
var file = require('../src/various/countLakes/countLakes.js');

test('countLakes', function(t) { 
  t.plan(2);
  t.equal(4, file.countLakes([[1,1,0,0,0],[1,0,0,1,1],[0,1,0,0,0],[0,1,0,0,1]]), 'Find the number of lakes on a given map');
  t.equal(0, file.countLakes([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), 'Return 0 if there are no even-occurrence items');
});
