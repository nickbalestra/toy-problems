var test = require('tape');
var file = require('../src/various/powerSet/powerSet.js');

test('powerSet', function(t) { 
  t.plan(4);
  t.equal(8, file.powerSet('abc').length, 'returns array with the power set of a given string');
  t.deepEqual(['','a','ab','abc','ac','b','bc','c'], file.powerSet('abc'), 'returns array with the power set of a given string');
  t.equal(16, file.powerSet('jump').length, 'returns array with the power set of a given string');
  t.deepEqual(['','j','ju','jum','jump','jup','jm','jmp','jp','u','um','ump','up','m','mp','p'], file.powerSet('jump'), 'returns array with the power set of a given string');
});
