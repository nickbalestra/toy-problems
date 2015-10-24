var test = require('tape');
var file = require('../src/various/allCombos/allCombos.js');

test('allCombos', function(t) { 
  t.plan(1);
  t.deepEqual([[],['a'],['a','b'],['a','b','c'],['a','c'],['b'],['b','c'],['c']], file.allCombos(['a','b','c']), 'returns all permutations');
});
